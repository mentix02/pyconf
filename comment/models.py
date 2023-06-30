from django.db import models


class Comment(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField(help_text="Reply to this post.")
    post = models.ForeignKey(
        "post.Post", on_delete=models.CASCADE, related_name="comments"
    )

    class Meta:
        ordering = ("-created_at",)

    def __str__(self) -> str:
        return f"Comment(#{self.id} at {self.created_at})"
