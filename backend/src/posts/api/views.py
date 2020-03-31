from rest_framework import viewsets

from posts.models import Post, Comment
from .serializers import PostSerializer, CommentSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView, 
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView,
# )

# # All POST Views
# class PostListView(ListAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostDetailView(RetrieveAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostCreateView(CreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostUpdateView(UpdateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostDeleteView(DestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# # All COMMENT Views
# class CommentListView(ListAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class CommentDetailView(RetrieveAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer