from django.urls import path

from comment.api.v1 import views

app_name = "comment-v1"

urlpatterns = [
    path("create/", views.CommentViewSet.as_view({"post": "create"}), name="create"),
    path(
        "list/<int:post_id>/",
        views.CommentViewSet.as_view({"get": "list"}),
        name="list",
    ),
]
