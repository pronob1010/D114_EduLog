from django.contrib import admin
from . models import *

class PostImageAdmin(admin.StackedInline):
    model = PostImage

class PostReplyAdmin(admin.StackedInline):
    model = PostReply

@admin.register(publicForumPost)
class publicForumPostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin, PostReplyAdmin]
    class Meta:
        model = publicForumPost

 