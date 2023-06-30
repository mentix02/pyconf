import os
import sys
import csv
import random

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "pyconf.settings")
django.setup()


def main():

    from post.models import Post
    from comment.models import Comment

    if len(sys.argv) != 2:
        print(f"usage: {sys.argv[0]} <csv file>", file=sys.stderr)
        quit(1)

    with open(sys.argv[1]) as f:

        reader = csv.reader(f)
        # skip header
        next(reader)

        while True:

            try:

                tweet: str = next(reader)[1]

                if tweet.startswith("@"):
                    # remove @username
                    tweet = tweet[tweet.find(" ") + 1 :]

                post = Post.objects.create(content=tweet)

                n_replies = random.randint(4, 11)

                comments = [
                    Comment(content=next(reader)[1], post_id=post.id)
                    for _ in range(n_replies)
                ]

                Comment.objects.bulk_create(comments)

                print(f"created post #{post.id} with {n_replies} comments")

            except StopIteration:
                break

        print(
            f"created {Post.objects.count()} posts with {Comment.objects.count()} comments"
        )


if __name__ == "__main__":
    main()
