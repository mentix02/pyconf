import random

from django.db.models import Count

from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import Serializer
from rest_framework.generics import RetrieveAPIView
from rest_framework.throttling import AnonRateThrottle, BaseThrottle

from post.models import Post
from pyconf.paginators import SmallPaginator
from post.api.v1.serializers import PostListSerializer, PostCreateSerializer


class PostViewSet(ModelViewSet):

    pagination_class = SmallPaginator
    serializer_class = PostListSerializer
    queryset = (
        Post.objects.all()
        .annotate(comment_count=Count("comments"))
        .order_by("-created_at")
    )

    def get_throttles(self) -> list[BaseThrottle]:
        return [AnonRateThrottle()] if self.action == "create" else []

    def get_serializer_class(self) -> type[Serializer]:
        return (
            PostCreateSerializer if self.action == "create" else self.serializer_class
        )


class RandomPostAPIView(RetrieveAPIView):

    serializer_class = PostListSerializer

    def get_object(self) -> Post:
        count = Post.objects.count()
        random_index = random.randint(1, count)
        return Post.objects.get(pk=random_index)
