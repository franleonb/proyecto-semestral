# Proceso de Visualización  
**Proyecto:** ¿Dónde se esconde el costo?: Caperucita vs. Lobo  

---

## Objetivo  
El objetivo de la visualización principal era responder a la pregunta:  
**¿Dónde se esconde el costo?: Caperucita vs. Lobo**  

El propósito fue crear una comparación visual directa entre productos tradicionales clave y sus reemplazos veganos.

---

## Proceso  
El desarrollo siguió los siguientes pasos:

1. Se utilizó un código guía de la librería **Altair** de Python, específicamente el gráfico de barras horizontal del ejemplo:  
   [Altair Grouped Bar Chart (Horizontal)](https://altair-viz.github.io/gallery/grouped_bar_chart_horizontal.html)

2. Con la base de datos se determinó la cantidad de productos tradicionales que cuentan con su reemplazo vegano, usando como datos principales:
   - Nombre del producto  
   - Tipo de dieta  
   - Precio (octubre de 2025)

3. Para comparar los productos, se creó un diccionario de Python que agrupó los productos en pares de su símil o sustituto.

4. Se filtró la tabla de 154 productos originales, quedando finalmente 24 productos definidos en pares comparables.

5. Se seleccionó un gráfico de barras horizontal por filas, con el fin de comparar claramente dos valores (tradicional vs. vegano) a través de diferentes categorías:
   - Leche  
   - Queso  
   - Pan  
   - Proteína, entre otras.

6. Se añadieron los colores narrativos clave del proyecto:
   - Rojo: Caperucita (dieta vegana)  
   - Azul: Lobo (dieta tradicional)  
   - Verde: Referencia simbólica al concepto vegano  

---

## Base de Datos  

La base de datos fue elaborada en conjunto con mis compañeros y recopila información de dos fuentes principales:

1. **Canasta tradicional:**  
   - 79 productos  
   - Precios históricos (enero 2024 a mayo 2025)  
   - Fuente: Instituto Nacional de Estadísticas (INE)

2. **Canasta vegana:**  
   - 75 productos  
   - Precios obtenidos mediante investigación de mercado propia  
   - Promedio de tres supermercados (Líder, Tottus, Jumbo)  
   - Cada producto consideró cinco marcas diferentes, promediadas para obtener un valor representativo  

---

## Preguntas que responde la visualización  

- ¿Dónde se esconde el costo?  
- ¿Cuánto más (o menos) cuesta un producto vegano específico comparado con su contraparte tradicional en octubre de 2025?  
- ¿Cuál es el reemplazo que genera la mayor diferencia visual de precio? (por ejemplo, Helado o Huevos/Aquafaba)  
- ¿Son todos los reemplazos veganos más caros?  
  - Respuesta: No. El gráfico muestra que el queso vegano es ligeramente más barato que los quesos tradicionales.  
- ¿En qué categoría de productos (Lácteos, Proteínas, etc.) se percibe más el “costo extra” de elegir la opción vegana?  

---

## Ficha Técnica de la Base de Datos  

**Características principales:**
- Fuente híbrida:  
  - Datos del INE (Chile): precios de canasta tradicional (enero 2024 a mayo 2025).  
  - Datos de investigación propia: precios de canasta vegana (octubre 2025).  
- Comparación entre tres supermercados (Líder, Tottus, Jumbo).  
- Se promediaron los precios de cinco marcas distintas por producto para obtener un valor representativo.  
- Finalmente, se calculó un único valor promedio por producto entre los tres supermercados.  
