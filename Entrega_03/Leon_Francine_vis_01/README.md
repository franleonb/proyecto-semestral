# Documentación

## 1. Proceso de visualización

Para crear la visualización de los cambios entre la canasta tradicional y la vegana, seguí estos pasos:

1. **Procesamiento de datos**:  
   - utilicé como base el archivo CSV original con los productos de la canasta básica y la vegana (nuestra base de datos).  
   - Ese CSV inlcuía información de categorías de productos y presencia en la canasta tradicional. Sin embargo, la organización de estos datos no me permitió crear un gráfico que reflejara los cambios que sufren los productos de una canasta a otra, por lo que los datos fueron reorganizados y movidos a otro archivo.
   - Para esto, el nuevo CSV contó con las listas de ambas canastas y cada producto se identificó en alguna de las siguentes categorías:
     - Mantenidos: productos presentes en ambas canastas sin modificaciones.  
     - Reemplazados: productos de origen animal sustituidos por alternativas veganas.  
     - Eliminados: productos que desaparecen en la canasta vegana.  
     - Agregados: nuevos productos que solo aparecen en la canasta vegana.  
     - Extendidos: un producto se divide en varios productos veganos.  
     - Disminuidos: varios productos se consolidan en uno solo.  
   - Para las categorías Extendidos y Disminuidos, se contabilizó **el número de productos originales que sufrieron cambios**, no los productos resultantes finales.  
   - La base de datos final quedó con dos columnas: **Categoria** y **Cantidad** (cantidad de productos en cada categoría).

3. **Visualización**:  
   - Usé la librería **Altair de Python** para generar un gráfico de barras interactivo.  
   - Cada barra representa un tipo de cambio de productos y la cantidad correspondiente.  
   - Se agregó un tooltip con la descripción de cada categoría para facilitar la comprensión.  
   - El gráfico fue exportado como archivo **HTML interactivo** y se generó también una versión **PNG**.


## 2. Base de datos utilizada

- Archivo: **database_ocupada.csv**
- Columnas:  

| Variable   | Descripción |
|------------|-------------|
| Categoria  | Tipo de cambio del producto (Mantenidos, Reemplazados, Eliminados, Agregados, Extendidos, Disminuidos) |
| Cantidad   | Número de productos que sufrieron ese cambio |

- **Observaciones sobre la base de datos**:  
  - Los datos fueron reorganizados desde el CSV original para adecuarse a la visualización.    
  - Se utilizó solo la información necesaria para contar los productos que cambiaron de un tipo a otro.  

## 3. Preguntas que puede responder la visualización

La visualización permite explorar y responder preguntas como:

- ¿Qué porcentaje de productos se mantiene sin cambios al pasar a una dieta vegana?  
- ¿Cuántos productos son reemplazados por alternativas vegetales?  
- ¿Existen productos que desaparecen completamente o se agregan solo en la canasta vegana?  
- ¿Cuál es la categoría de cambio más frecuente?  
- ¿Cómo se distribuyen los tipos de cambio entre los productos de la canasta?

