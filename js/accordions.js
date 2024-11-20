class Accordion {
  constructor(title, text, type) {
    this.title = title;
    this.text = text;
    this.type = type;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let accordions = [];
  accordions.push(
    new Accordion(
      "Quais hábitos simples posso adotar para reduzir o consumo de energia?",
      "Desligue luzes e aparelhos ao sair dos ambientes. Utilize lâmpadas de LED. <br>Evite deixar dispositivos no modo stand-by e desligue-os da tomada. <br>Use varal para secar roupas em vez de secadoras, sempre que possível.",
      "geral"
    ),
    new Accordion(
      "Como aproveitar melhor a luz natural para economizar energia?",
      "Abra janelas e cortinas durante o dia para iluminar ambientes. Posicione móveis de trabalho próximos a áreas com luz natural. Pinte paredes com cores claras para refletir melhor a luz.",
      "geral"
    ),
    new Accordion(
      "Como reduzir o consumo de energia em escritórios ou home office?",
      "Configure o modo de economia de energia nos computadores. <br />Desligue monitores quando não estiver trabalhando.<br />Utilize luzes LED e evite acender mais lâmpadas do que onecessário. <br />Considere fontes de energia renováveis, como painéissolares, se possível.",
      "geral"
    ),
    new Accordion(
      "Vale a pena investir em aparelhos mais eficientes?",
      "Sim! Embora sejam mais caros, eletrodomésticos com selo A (Procel) consomem até 40% menos energia, trazendo economia em médio prazo. <br /> <br />Priorize a troca de equipamentos antigos que consomem mais energia, como geladeiras e condicionadores de ar.",
      "product"
    ),
    new Accordion(
      "Como empresas estão lucrando com investimentos em Green Energy?",
      "Empresas que investem em energia verde atraem consumidores conscientes e investidores interessados em ESG (Ambiental, Social e Governança). <br /> Reduzem custos operacionais com sistemas de energia renovável. <br /> Vendem excedentes de energia gerada para a rede elétrica (sistemas on-grid).",
      "product"
    )
  );

  let accordionGeral = document.getElementById("accordionGeneral");
  let accordionProducts = document.getElementById("accordionProduct");

  accordions.map((accordion, index) => {
    let accordionTemplate = `
          <div class="accordion-item">
              <h2 class="accordion-header" id="heading${index}">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneral${index}" aria-expanded="true" aria-controls="accordionGeneral${index}">
                      ${accordion.title}
                  </button>
              </h2>
              <div id="accordionGeneral${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionGeneral">
                  <div class="accordion-body">
                      <p class="large-paragraph">${accordion.text}</p>
                  </div>
              </div>
          </div>
          `;
    if (accordion.type == "geral") {
      accordionGeral.innerHTML += accordionTemplate;
    } else if (accordion.type == "product") {
      accordionProducts.innerHTML += accordionTemplate;
    }
  });
});
