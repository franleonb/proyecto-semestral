# Ficha técnica - Lukas Navarro

- **Fuente de los datos**:  
  El listado de alimentos lo sacamos del *Informe Mensual: Valor de la Canasta Básica de Alimentos y Líneas de Pobreza* correspondientes al mes de agosto y elaborado por el Ministerio de Desarrollo Social y Familia.  
  Además, utilicé la página del supermercado Líder.  
  - [Observatorio Ministerio de Desarrollo Social y Familia](https://observatorio.ministeriodesarrollosocial.gob.cl/nueva-serie-cba-2025)  
  - [Supermercado Líder](https://super.lider.cl/)

- **Metodología de la construcción de la base**:  
  Para la metodología usamos la lista de productos del informe de agosto y luego buscamos el precio del producto en la página del supermercado Líder, siempre eligiendo el de menor precio.  
  Después, hice una canasta con el símil de los productos en su versión vegana.  
  La base de datos está creada desde cero.

- **Alcance de los datos**:  
  Tenemos, en ambos tipos de canastas:
  - Los productos  
  - La marca  
  - El precio  
  - La cantidad (L, g, kg, unidades)  

  Al final de cada canasta está la suma de los precios del total de productos para ver cuál es más económica.

- **Características de los datos**:  
  Todos los productos elegidos se basan en los datos del informe de la canasta básica.  
  Los precios, marcas y cantidades provienen del supermercado Líder.  
  Estos varían según la marca, la cantidad y las ofertas disponibles.  
  Las canastas están ordenadas por su tipo: **tradicional** o **vegana**.

- **Variables incorporadas**:  
  | Variable | Descripción |
  |----------|-------------|
  | Precio   | Si se cambia el precio de algún producto, se cambia el total de la suma del precio de la canasta. |

- **Otras observaciones sobre la base**:  
  No.
