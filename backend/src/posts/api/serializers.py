from rest_framework import serializers
from posts.models import Post, Comment

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'date_posted', 'last_modified')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'post', 'title', 'body', 'date_posted', 'last_modified')
