from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),
    path('api/data/', include('courses.urls')),
    path('api/site/', include('siteinfo.urls')),
    path('api/payment/', include('payment.urls')),
    path('^_nested_admin/', include('nested_admin.urls')),
]

urlpatterns+=static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
