from django.urls import path

from post.api.v1 import views

app_name = "post-v1"

urlpatterns = [
    path("0/", views.RandomPostAPIView.as_view(), name="random"),
    path("list/", views.PostViewSet.as_view({"get": "list"}), name="list"),
    path("create/", views.PostViewSet.as_view({"post": "create"}), name="create"),
    path("<int:pk>/", views.PostViewSet.as_view({"get": "retrieve"}), name="retrieve"),
]
