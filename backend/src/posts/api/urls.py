from django.urls import path, include

from .views import PostListView, PostDetailView, CommentListView, CommentDetailView

urlpatterns = [
    path('post/', PostListView.as_view()),
    path('post/<pk>', PostDetailView.as_view()),
    path('comment/', CommentListView.as_view()),
    path('comment/<pk>', CommentDetailView.as_view()),
]