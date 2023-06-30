from django.db import models


class Post(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField(help_text="What's on your mind?")

    class Meta:
        ordering = ("-created_at",)

    def __str__(self) -> str:
        return f"Post(#{self.id} {self.created_at})"
