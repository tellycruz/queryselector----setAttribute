// 1. Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.

const cardsStyle = document.querySelectorAll(".card");

cardsStyle.forEach((cardsStyle) => {
  cardsStyle.style.background = "#ff6600";
});

//   2. Capture, armazene e manipule todos os elementos de classe
//   "titulo-card". Modifique os estilos necessários nesses elementos
//   para que fique semelhante a imagem.

// 3. Modifique o texto dos títulos nos cards para "Meu card".

const nomeCard = document.querySelectorAll(".titulo-card");

nomeCard.forEach((nomeCard) => {
  nomeCard.style.color = "#2b385b";
  nomeCard.innerText = "Meu Card";
  nomeCard.style.margin = "8px";
});

// 4. Capture, armazene e manipule todos os elementos de classe
// "descricao-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

// # 5. Modifique o texto das descrições nos cards para "Descrição
// # modificada pelo JavaScript".

const descCard = document.querySelectorAll(".descricao-card");

descCard.forEach((descCard) => {
  descCard.style.color = "white";
  descCard.innerText = "Descrição modificada pelo JavaScript ";
  descCard.style.padding = "20px 0px";
});

// 6. Capture, armazene e manipule todos os elementos de classe
// "botao-editar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

const botaoEditar = document.querySelectorAll(".botao-editar");

botaoEditar.forEach((botaoEditar) => {
  botaoEditar.style.background = "green";
  botaoEditar.style.padding = "8px 10px";
  botaoEditar.style.borderRadius = "8px";
  botaoEditar.style.border = "none";
  botaoEditar.style.color = "white";
  botaoEditar.onclick = function () {
    alert("Clicou em editar");
  };
});

// 7. Capture, armazene e manipule todos os elementos de classe
// "botao-apagar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

const botaoapagar = document.querySelectorAll(".botao-apagar");

botaoapagar.forEach((botaoapagar) => {
  botaoapagar.style.background = "red";
  botaoapagar.style.padding = "8px 10px";
  botaoapagar.style.borderRadius = "8px";
  botaoapagar.style.border = "none";
  botaoapagar.style.color = "white";
  botaoapagar.onclick = function funcao1() {
    var x;
    var r = confirm("Gotaria de apagar este card?");
    if (r == true) {
      alert("Você apagou este card");
    } else {
      alert("Cancelado");
    }
  };
});

// 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou emn
// Editar!".

// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
//  'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
//  certeza da exclusão do card. Se o usuário confirmar a exclusão deve
//  mostrar um alerta com a mensagem "Confirmado!", se não deve
//  mostrar a mensagem "Cancelou!".
