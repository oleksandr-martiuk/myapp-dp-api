from rest_framework import routers
from tasks.viewsets import TaskViewset


router = routers.DefaultRouter()
router.register('tasks', TaskViewset)
