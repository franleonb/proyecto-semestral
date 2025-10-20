# Ficha Técnica

**Características de los datos:**  
- Datos categóricos y numéricos que representan la transición de productos de la canasta tradicional a la vegana.  
- El objetivo es mostrar cuántos productos permanecen, se reemplazan, se eliminan, se agregan, se extienden o se disminuyen.

**Variables incorporadas:**

| Variable   | Descripción |
|------------|-------------|
| Categoria  | Tipo de cambio del producto: Mantenidos, Reemplazados, Eliminados, Agregados, Extendidos, Disminuidos |
| Cantidad   | Número de productos que sufren ese tipo de cambio |

La visualización de datos muestra cómo los productos de la canasta tradicional se transforman al pasar a la versión vegana. Para analizar estos cambios, se identificaron seis tipos de modificaciones que reflejan la dinámica de adaptación de los alimentos: Mantenidos, Reemplazados, Eliminados, Agregados, Extendidos y Disminuidos.

- **Mantenidos**: productos que permanecen iguales en ambas canastas. 
- **Reemplazados**: productos de la canasta tradicional que fueron sustituidos por una alternativa vegana equivalente.  
- **Eliminados**: productos que desaparecen completamente en la canasta vegana.  
- **Agregados**: nuevos productos que aparecen exclusivamente en la canasta vegana.  
- **Extendidos**: un producto de la canasta tradicional se divide en varios productos veganos.  
- **Disminuidos**: varios productos se consolidan en uno solo.

**Observaciones sobre la base de datos:**  
- Para “Extendidos” y “Disminuidos”, la cantidad representa el **número de productos originales que cambiaron**, no los productos resultantes finales.  
- Cada producto fue contabilizado dependiendo de la categoría que se le fue asignada, de forma que esta variable fuera de carácter numérico.


El gráfico permite identificar visualmente cuál es el tipo de cambio más frecuente y cómo se distribuyen los productos entre las diferentes categorías. Se observa que algunas categorías, como Mantenidos o Reemplazados, tienden a ser más numerosas, mientras que las categorías de Eliminados o Disminuidos son menos frecuentes, reflejando cambios puntuales pero significativos. Esta información puede ser útil para entender patrones de consumo, disponibilidad de productos y tendencias de la transición hacia una dieta vegana.
