from rest_framework.exceptions import NotFound
from rest_framework.viewsets import ModelViewSet
from rest_framework.throttling import AnonRateThrottle, BaseThrottle

from post.models import Post
from comment.models import Comment
from pyconf.paginators import LargePaginator
from comment.api.v1.serializers import CommentSerializer


class CommentViewSet(ModelViewSet):

    pagination_class = LargePaginator
    serializer_class = CommentSerializer

    def get_throttles(self) -> list[BaseThrottle]:
        return [AnonRateThrottle()] if self.action == "create" else []

    def get_queryset(self):
        post_id = self.kwargs.get("post_id")
        if Post.objects.only("id").filter(id=post_id).exists():
            return Comment.objects.filter(post_id=post_id).order_by("-created_at")
        else:
            raise NotFound()
