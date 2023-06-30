from rest_framework import serializers

from post.models import Post


class PostCreateSerializer(serializers.ModelSerializer):

    comment_count = serializers.IntegerField(read_only=True, default=0)
    created_at = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%SZ", read_only=True)

    class Meta:

        model = Post
        fields = "__all__"


class PostListSerializer(serializers.ModelSerializer):

    # noinspection PyMethodMayBeStatic
    def get_comment_count(self, post: Post) -> int:
        return (
            post.comment_count
            if hasattr(post, "comment_count")
            else post.comments.count()
        )

    comment_count = serializers.SerializerMethodField()
    created_at = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%SZ")
    comments_link = serializers.HyperlinkedIdentityField(
        view_name="comment-v1:list", lookup_field="id", lookup_url_kwarg="post_id"
    )

    class Meta:
        model = Post
        fields = "__all__"
