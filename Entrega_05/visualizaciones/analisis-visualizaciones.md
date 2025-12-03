# Análisis Visualizaciones

## Distribución de  cambios entre los productos de canasta tradicional y la vegana.
Con esta visualización ilustramos las diferencias entre la canasta tradicional y la canasta vegana que confeccionamos. El gráfico permite evidenciar que ambas canastas no presentan diferencias significativas: el 55% de los productos se mantiene, un 16% se reemplaza por su símil vegano y solo se incorpora un 9% de productos nuevos. 
Esto 

## Comparativa de precios de productos de la canasta tradicional con su símil en la canasta vegana.
Escogimos 10 productos que tenían su símil en la canasta vegana y comparamos sus precios. Observamos que, en general, los productos de la canasta vegana eran ligeramente más caros que los de la tradicional, aunque la mayor diferencia se dio entre la carne y la carne de soya. Esto evidencia que la carne es uno de los productos que más incide en el encarecimiento de la canasta tradicional.

## Suma total de precios por tipo de dieta a lo largo del tiempo
Hicimos una comparación del precio total de ambas canastas desde enero de 2024 hasta octubre de 2025, omitiendo los meses entre mayo y septiembre de 2025 por falta de datos. Es importante señalar que los precios de los productos veganos corresponden todos a octubre de 2025, ya que no contamos con registros de otros meses.
Con este aproximado, se observa que, durante toda la línea de tiempo analizada, la canasta vegana resulta más barata que la tradicional, contradiciendo la creencia popular de que una dieta vegana es más costosa.


# Ficha Técnica de Bases de Datos

## Ficha Técnica Gráfico 1
Para esta visualización, modificamos nuestra base de datos original para crear una nueva base de datos. Para esto, comparamos la canasta tradicional y vegana para identificar qué elementos se habían **mantenido, eliminado, reemplazado, agregado, disminuido y extendido.**

Durante este proceso, tuvimos que crear seis categorías. Las categorías **"mantenidos"** y **"eliminados"** fueron las más sencillas de crear, ya que consisten de productos que se repetían en ambas canastas y de elementos que quedaban fuera de la canasta vegana, respectivamente. La categoría **"reemplazados"** fue creada para los productos que, **a diferencia de los elementos "eliminados"**, podían ser reemplazados por una versión vegana del mismo. Por otro lado, la categoría **"agregados"** corresponden a productos que se agregan en la canasta vegana para cumplir con las necesidades nutricionales de una dieta balanceada.

Finalmente, las categorías **"disminuidos"** y **"extendidos"** están compuestas de productos que consideramos que, por sus características y cantidad, no era apropiado incluirlas en la categoría "reemplazados". Por ejemplo, la leche en polvo y leche líquida solo puede ser reemplazada por leche líquida vegana, por lo que estos dos productos fueron integrados en los **"disminuidos"**, ya que de dos productos, pasaron a uno. En cambio, las legumbres clasificaron a la categoría **"extendidos"** debido a que, para cumplir con los requerimientos nutricionales de una dieta balanceada, en la canasta vegana se consideraron varios tipos de legumbres (porotos, lentejas y garbanzos). De esta forma, un producto en la canasta tradicional se tradujo en tres en la vegana.

## Ficha Técnica Gráfico 2 y 3
Utilizamos los datos entregados por el INE de los precios de los alimentos de enero de 2024 hasta mayo de 2025. Complementamos con una canasta vegana creada por nosotros, y donde los productos que no existían en la base de datos, los buscamos en los supermercados Lider, Jumbo y Tottus.

### Ficha Técnica de la Base de Datos
Características de los Datos
La base de datos incluye precios mensuales de varios productos alimenticios, categorizados por tipo de dieta.
Productos: Nombre del alimento.
Mes: Mes y año del registro del precio.
Precio: Precio promedio entregado por el INE de cada producto en ese mes.
Tipo de Dieta: Clasificación de la dieta, puede ser vegano o tradicional.
Variables Incorporadas Observaciones
La base de datos cubre un periodo de dos años (2024-2025).
Se observó que muchos productos veganos eran difíciles de encontrar y el supermercado que más opciones tiene es el Jumbo.
