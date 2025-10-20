# Documentación

## 1. Proceso de visualización

Para crear la visualización de los cambios entre la canasta tradicional y la vegana, seguí estos pasos:

1. **Procesamiento de datos**:  
   - Utilicé como base el archivo CSV original con los productos de la canasta básica y la vegana (nuestra base de datos).  
   - Ese CSV inlcuía información de categorías de productos y presencia en la canasta tradicional. Sin embargo, la organización de estos datos no me permitió crear un gráfico que reflejara los cambios que sufren los productos de una canasta a otra, por lo que decidí reorganizar los datos en otro archivo.
   - Para esto, el nuevo CSV contó con las listas de ambas canastas y cada producto se identificó en alguna de las siguentes categorías:
     - Mantenidos: productos presentes en ambas canastas sin modificaciones.  
     - Reemplazados: productos de origen animal sustituidos por alternativas veganas.  
     - Eliminados: productos que desaparecen en la canasta vegana.  
     - Agregados: nuevos productos que solo aparecen en la canasta vegana.  
     - Extendidos: un producto se divide en varios productos veganos.  
     - Disminuidos: varios productos se consolidan en uno solo.  
   - Para las categorías Extendidos y Disminuidos, se contabilizó **el número de productos originales que sufrieron cambios**, no los productos resultantes finales.  
   - La base de datos final quedó con dos columnas: **Categoria** y **Cantidad** (cantidad de productos en cada categoría).

3. **Pasos de la visualización**:  
-  Comencé el código usando las librerías pandas y files para subir el archivo .csv que contiene mi base de datos. Una vez que lo subí desde mi computador, lo leí con **pd.read_csv()** y lo guardé en una variable llamada df.
- Con **df.head()** revisé que los datos se hubieran cargado correctamente y que aparecieran las columnas que necesitaba: una con la categoría del producto y otra con la cantidad. 
- Después, agregué una nueva columna al dataframe llamada Descripcion.
Para eso creé un diccionario llamado descripciones, donde asigné a cada categoría una pequeña explicación. Por ejemplo, “Mantenidos” son los productos que no cambian entre una canasta y otra.
- Luego usé la función **map()** para que cada fila del dataframe tomara la descripción que correspondía a su categoría. 
- Aquí construí el gráfico propiamente tal. Usé la librería Altair, que permite hacer visualizaciones interactivas.
- Le pedí que hiciera un gráfico de barras **(mark_bar())**, donde en el eje X aparecen las categorías de cambio de producto (por ejemplo, “Mantenidos” o “Agregados”) y en el eje Y la cantidad de productos en cada una.
- También agregué colores distintos para cada categoría y activé una herramienta de tooltip, que muestra más información cuando uno pasa el mouse por encima de una barra.
- Finalmente, le puse un título, definí el tamaño del gráfico y añadí **.interactive()** para que se pueda mover o acercar dentro del visor. Cuando ejecuté este bloque, apareció el gráfico en Colab.
- Por último, guardé el gráfico usando chart.save.


## 2. Base de datos utilizada

| Variable   | Descripción |
|------------|-------------|
| Categoria  | Tipo de cambio del producto (Mantenidos, Reemplazados, Eliminados, Agregados, Extendidos, Disminuidos) |
| Cantidad   | Número de productos que sufrieron ese cambio |

- **Observaciones sobre la base de datos**:  
  - Los datos fueron reorganizados desde el CSV original para adecuarse a la visualización.    
  - Se utilizó solo la información necesaria para contar los productos que cambiaron de un tipo a otro.  En este caso, los precios de cada producto no fueron considerados.

## 3. Preguntas que puede responder la visualización

La visualización permite explorar y responder preguntas como:

- ¿Qué porcentaje de productos se mantiene sin cambios al pasar a una dieta vegana?  
- ¿Cuántos productos son reemplazados por alternativas vegetales?  
- ¿Existen productos que desaparecen completamente o se agregan solo en la canasta vegana?  
- ¿Cuál es la categoría de cambio más frecuente?  
- ¿Cómo se distribuyen los tipos de cambio entre los productos de la canasta?

