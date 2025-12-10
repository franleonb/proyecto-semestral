document.addEventListener("DOMContentLoaded", () => {

  const leafCount = 60;
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        leaf.style.left = Math.random() * 100 + "vw";

        const size = 20 + Math.random() * 40;
        leaf.style.width = size + "px";
        leaf.style.height = size + "px";

        leaf.style.animationDuration = (6 + Math.random() * 6) + "s";
        leaf.style.animationDelay = Math.random() * 5 + "s";

        document.body.appendChild(leaf);
    }

  function embedAndMove(selector, spec, embedOpt = { mode: "vega-lite" }) {
    return vegaEmbed(selector, spec, embedOpt)
      .then(result => {
        try {
          const host = result.view && typeof result.view.container === "function"
            ? result.view.container()
            : document.querySelector(selector);

          const tooltip = host && host.querySelector ? host.querySelector('.vega-tooltip') : null;

          if (tooltip && tooltip.parentNode !== document.body) {
            document.body.appendChild(tooltip);
            tooltip.style.position = 'fixed';
            tooltip.style.transform = 'none';
            tooltip.style.zIndex = '99999';
            tooltip.style.pointerEvents = 'auto';
          }

        } catch (e) {
          console.warn("No se pudo mover tooltip para", selector, e);
        }

        return result;
      })
      .catch(error => {
        console.error("Error embeding", selector, error);
        const el = document.querySelector(selector);
        if (el) {
          el.innerHTML = `<div style="color:red; padding:8px; background:#fff5f5; border-radius:6px;">
                            <strong>Error al renderizar gráfico</strong><br>${error && error.message ? error.message : String(error)}
                          </div>`;
        }
        throw error;
      });
  }

  const specJL = {
    "config": {"view":{"continuousWidth":300,"continuousHeight":300}},
    "data":{"name":"data-f82b1dbfa5678f1afa27435b5476ebfc"},
    "mark":{"type":"bar"},
    "encoding":{"color":{"field":"Dieta","legend":{"labelExpr":"datum.label == 'Tradicional' ? 'Tradicional / Lobo' : 'Vegano / Caperucita'","title":"Tipo de Dieta"},"scale":{"domain":["Tradicional","Vegano"],"range":["#7FB3D5","#E74C3C"]},"title":"Tipo de Dieta","type":"nominal"},"row":{"field":"Grupo","header":{"labelAlign":"left","labelAngle":0,"labelOrient":"left","labelPadding":5,"title":"Comparativa de Productos (Tradicional vs. Vegano)","titleOrient":"top"},"type":"nominal"},"tooltip":[{"field":"Grupo","type":"nominal"},{"field":"PRODUCTOS","type":"nominal"},{"field":"Dieta","type":"nominal"},{"field":"Precio","type":"quantitative"}],"x":{"axis":{"format":"$,.0f"},"field":"Precio","title":"Precio (Oct 2025)","type":"quantitative"},"y":{"axis":null,"field":"Dieta","sort":null,"title":null,"type":"ordinal"}},
    "title":{"text":"¿Dónde se esconde el costo?: Caperucita vs. Lobo","anchor":"middle"},
    "$schema":"https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "datasets":{
      "data-f82b1dbfa5678f1afa27435b5476ebfc":[
        {"PRODUCTOS":"CARNE DE VACUNO","Dieta":"Tradicional","Precio":8153.2,"Grupo":"Proteína (Carne vs Tofu)"},
        {"PRODUCTOS":"GALLETAS","Dieta":"Tradicional","Precio":606.1,"Grupo":"Galletas"},
        {"PRODUCTOS":"HELADOS","Dieta":"Tradicional","Precio":2779.7,"Grupo":"Helado"},
        {"PRODUCTOS":"LECHE LÍQUIDA","Dieta":"Tradicional","Precio":1104.5,"Grupo":"Leche"},
        {"PRODUCTOS":"MANJAR Y DULCES UNTABLES","Dieta":"Tradicional","Precio":2655.8,"Grupo":"Manjar"},
        {"PRODUCTOS":"MANTEQUILLA","Dieta":"Tradicional","Precio":2001.0,"Grupo":"Mantequilla"},
        {"PRODUCTOS":"PAN","Dieta":"Tradicional","Precio":1901.8,"Grupo":"Pan"},
        {"PRODUCTOS":"PASTAS","Dieta":"Tradicional","Precio":825.9,"Grupo":"Pastas"},
        {"PRODUCTOS":"QUESOS","Dieta":"Tradicional","Precio":4736.8,"Grupo":"Queso"},
        {"PRODUCTOS":"YOGURES Y PRODUCTOS SIMILARES","Dieta":"Tradicional","Precio":809.2,"Grupo":"Yogurt"},
        {"PRODUCTOS":"GALLETAS VEGANAS","Dieta":"Vegano","Precio":1520.3,"Grupo":"Galletas"},
        {"PRODUCTOS":"LECHE VEGANA","Dieta":"Vegano","Precio":2678.0,"Grupo":"Leche"},
        {"PRODUCTOS":"HELADO VEGANO","Dieta":"Vegano","Precio":4655.8,"Grupo":"Helado"},
        {"PRODUCTOS":"MANJAR VEGANO","Dieta":"Vegano","Precio":2936.7,"Grupo":"Manjar"},
        {"PRODUCTOS":"MANTEQUILLA DE ACEITE DE COCO","Dieta":"Vegano","Precio":2690.0,"Grupo":"Mantequilla"},
        {"PRODUCTOS":"QUESO VEGANOS","Dieta":"Vegano","Precio":4256.7,"Grupo":"Queso"},
        {"PRODUCTOS":"YOGURT VEGANO","Dieta":"Vegano","Precio":1329.3,"Grupo":"Yogurt"},
        {"PRODUCTOS":"TOFU","Dieta":"Vegano","Precio":3232.7,"Grupo":"Proteína (Carne vs Tofu)"},
        {"PRODUCTOS":"PAN VEGANO","Dieta":"Vegano","Precio":2826.0,"Grupo":"Pan"},
        {"PRODUCTOS":"PASTAS SIN HUEVO","Dieta":"Vegano","Precio":1078.1,"Grupo":"Pastas"}
      ]
    }
  };

  const specLK = {
    "config":{"view":{"continuousWidth":300,"continuousHeight":300}},
    "data":{"name":"data-c66ac752d9ca6e307f609bd165416036"},
    "mark":{"type":"line","point":true},
    "encoding":{"color":{"field":"Tipo de dieta","scale":{"domain":["Vegano","Tradicional"],"range":["#e84c3d","#7eb3d5"]},"type":"nominal"},"tooltip":[{"field":"Mes","type":"ordinal"},{"field":"Tipo de dieta","type":"nominal"},{"field":"Precio","type":"quantitative"}],"x":{"field":"Mes","sort":["ene-24","feb-24","mar-24","abr-24","may-24","jun-24","jul-24","ago-24","sept-24","oct-24","nov-24","dic-24","ene-25","feb-25","mar-25","abr-25","may-25","oct-25"],"title":"Mes","type":"ordinal"},"y":{"field":"Precio","title":"Suma Total de Precios","type":"quantitative"}},
    "height":400,
    "title":"Suma Total de Precios por Tipo de Dieta a lo Largo del Tiempo",
    "width":800,
    "$schema":"https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "datasets":{
      "data-c66ac752d9ca6e307f609bd165416036":[
        {"Mes":"abr-24","Tipo de dieta":"Tradicional","Precio":196473.6},
        {"Mes":"abr-24","Tipo de dieta":"Vegano","Precio":169473.5},
        {"Mes":"abr-25","Tipo de dieta":"Tradicional","Precio":204298.2},
        {"Mes":"abr-25","Tipo de dieta":"Vegano","Precio":174734.9},
        {"Mes":"ago-24","Tipo de dieta":"Tradicional","Precio":197826.5},
        {"Mes":"ago-24","Tipo de dieta":"Vegano","Precio":174398.5},
        {"Mes":"dic-24","Tipo de dieta":"Tradicional","Precio":184062.3},
        {"Mes":"dic-24","Tipo de dieta":"Vegano","Precio":168150.9},
        {"Mes":"ene-24","Tipo de dieta":"Tradicional","Precio":191832.2},
        {"Mes":"ene-24","Tipo de dieta":"Vegano","Precio":168149.5},
        {"Mes":"ene-25","Tipo de dieta":"Tradicional","Precio":197141.6},
        {"Mes":"ene-25","Tipo de dieta":"Vegano","Precio":174739.4},
        {"Mes":"feb-24","Tipo de dieta":"Tradicional","Precio":189705.5},
        {"Mes":"feb-24","Tipo de dieta":"Vegano","Precio":166651.2},
        {"Mes":"feb-25","Tipo de dieta":"Tradicional","Precio":197019.2},
        {"Mes":"feb-25","Tipo de dieta":"Vegano","Precio":173157.3},
        {"Mes":"jul-24","Tipo de dieta":"Tradicional","Precio":198885.6},
        {"Mes":"jul-24","Tipo de dieta":"Vegano","Precio":173879.2},
        {"Mes":"jun-24","Tipo de dieta":"Tradicional","Precio":196038.69999999998},
        {"Mes":"jun-24","Tipo de dieta":"Vegano","Precio":171556.9},
        {"Mes":"mar-24","Tipo de dieta":"Tradicional","Precio":192672.2},
        {"Mes":"mar-24","Tipo de dieta":"Vegano","Precio":168228.3},
        {"Mes":"mar-25","Tipo de dieta":"Tradicional","Precio":200458.0},
        {"Mes":"mar-25","Tipo de dieta":"Vegano","Precio":174134.5},
        {"Mes":"may-24","Tipo de dieta":"Tradicional","Precio":196921.9},
        {"Mes":"may-24","Tipo de dieta":"Vegano","Precio":170647.6},
        {"Mes":"may-25","Tipo de dieta":"Tradicional","Precio":190704.8},
        {"Mes":"may-25","Tipo de dieta":"Vegano","Precio":168971.2},
        {"Mes":"nov-24","Tipo de dieta":"Tradicional","Precio":184197.965306122},
        {"Mes":"nov-24","Tipo de dieta":"Vegano","Precio":167994.8},
        {"Mes":"oct-24","Tipo de dieta":"Tradicional","Precio":202700.2},
        {"Mes":"oct-24","Tipo de dieta":"Vegano","Precio":177032.3},
        {"Mes":"oct-25","Tipo de dieta":"Tradicional","Precio":190704.8},
        {"Mes":"oct-25","Tipo de dieta":"Vegano","Precio":168971.2},
        {"Mes":"sept-24","Tipo de dieta":"Tradicional","Precio":197688.8},
        {"Mes":"sept-24","Tipo de dieta":"Vegano","Precio":174444.4}
      ]
    }
  };

  const embedOpt = { mode: "vega-lite", actions: false };

  embedAndMove("#vis-jl", specJL, embedOpt)
    .then(() => console.log("vis-jl embebido"))
    .catch(() => { });

  embedAndMove("#vis-lk", specLK, embedOpt)
    .then(() => console.log("vis-lk embebido"))
    .catch(() => { });

  document.querySelectorAll('.canasta').forEach(canasta => {
    canasta.addEventListener('click', () => {
      const info = canasta.querySelector('.info');
      if (!info) return;
      info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.querySelectorAll('.carrusel').forEach(carrusel => {
    const slides = carrusel.querySelectorAll('.slide');
    const prev = carrusel.querySelector('.prev');
    const next = carrusel.querySelector('.next');
    if (!slides.length) return;
    let index = 0;
    function show(i) {
      slides.forEach(s => s.classList.remove('active'));
      slides[i].classList.add('active');
    }
    show(index);
    if (prev) prev.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; show(index); });
    if (next) next.addEventListener('click', () => { index = (index + 1) % slides.length; show(index); });
  });

});