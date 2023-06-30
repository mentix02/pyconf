from rest_framework.pagination import PageNumberPagination


class SmallPaginator(PageNumberPagination):
    page_size = 50
    max_page_size = 50


class LargePaginator(PageNumberPagination):
    page_size = 100
    max_page_size = 100
