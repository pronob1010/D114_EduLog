from django.db import models
from django.db.models.deletion import CASCADE

from accounts.models import *
class publicForumPost(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    caption = models.CharField(max_length=50, null=True, blank=True)
    details = models.TextField(max_length=250, null=True, blank=True)
    image = models.FileField(blank = True,null= True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.caption +" | "+self.user.username
class PostImage(models.Model):
    post = models.ForeignKey(publicForumPost, on_delete=CASCADE)
    images = models.FileField(upload_to ="media/PublicForum", blank = True,null= True)
    def __str__(self):
        return self.post.caption

class PostReply(models.Model):
    post = models.ForeignKey(publicForumPost, on_delete=CASCADE)
    commented_user = models.ForeignKey(User, on_delete=CASCADE)
    reply = models.TextField(max_length=250, null=True, blank=True)
    def __str__(self):
        return self.post.caption + " | " + self.commented_user
        