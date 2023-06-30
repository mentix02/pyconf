from django.urls import path, include

urlpatterns = [
    path("post/", include("post.api.v1.urls")),
    path("comment/", include("comment.api.v1.urls")),
    path("api-auth/", include("rest_framework.urls")),
]
