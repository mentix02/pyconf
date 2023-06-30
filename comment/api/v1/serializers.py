from rest_framework import serializers

from comment.models import Comment


class CommentSerializer(serializers.ModelSerializer):

    post_id = serializers.IntegerField(write_only=True, label="Post ID")
    created_at = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%SZ", read_only=True)

    class Meta:

        model = Comment
        exclude = ("post",)
