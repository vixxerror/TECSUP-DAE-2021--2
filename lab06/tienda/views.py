from django.shortcuts import get_object_or_404,render
from .models import Categoria, Producto
# Create your views here.
def index(request):
    product_list = Producto.objects.order_by('nombre')[:9]
    categorias = Categoria.objects.all()
    
    return render(request,'index.html', {'product_list':product_list,
        'categorias':categorias})

def producto(request,producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    categorias = Categoria.objects.all()
    return render(request,'producto.html',{'categorias':categorias, 'producto':producto})

def categoria(request,categoria_id):
    categorias = Categoria.objects.all()
    cate = get_object_or_404(Categoria, pk=categoria_id)
    productos = Producto.objects.filter(categoria_id=categoria_id)
    return render(request,'categoria.html',{'categorias':categorias, 'productos':productos, 'categoria' : cate})