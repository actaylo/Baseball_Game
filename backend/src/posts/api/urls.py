from posts.api.views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostViewSet, basename='posts')
urlpatterns = router.urls

# from django.urls import path, include

# from .views import (
#     PostListView, 
#     PostDetailView, 
#     PostCreateView,
#     PostUpdateView,
#     PostDeleteView, 
#     CommentListView, 
#     CommentDetailView,
# )

# urlpatterns = [
#     path('post/', PostListView.as_view()),
#     path('post/create/', PostCreateView.as_view()),
#     path('post/<pk>/', PostDetailView.as_view()),
#     path('post/<pk>/update/', PostUpdateView.as_view()),
#     path('post/<pk>/delete/', PostDeleteView.as_view()),
#     path('comment/', CommentListView.as_view()),
#     path('comment/<pk>/', CommentDetailView.as_view()),
# ]