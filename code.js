onEvent("botaoPesquisa", "click", function( ) {
  setScreen("telaPesquisa1");
});
var DadosTemaAnv = {};
onEvent("botaoProximo", "click", function( ) {
  DadosTemaAnv.nome = getText("textoInsercaoNome");
  DadosTemaAnv.idade = getNumber("textoInsercaoIdade");
  setScreen("telaPesquisa2");
});
onEvent("botaoDD", "click", function( ) {
  DadosTemaAnv.tema = "Debaixo D'água";
  setProperty("botaoDD", "background-color", "green");
  setProperty("botaoP", "background-color", "#fef6e7");
  setProperty("botaoS", "background-color", "#fef6e7");
  setImageURL("imagemT", "assets/mermaid.png");
});
onEvent("botaoP", "click", function( ) {
  DadosTemaAnv.tema = "Piratas";
  setProperty("botaoP", "background-color", "green");
  setProperty("botaoDD", "background-color", "#fef6e7");
  setProperty("botaoS", "background-color", "#fef6e7");
  setImageURL("imagemT", "assets/pirate.png");
});
onEvent("botaoS", "click", function( ) {
  DadosTemaAnv.tema = "Super-herói";
  setProperty("botaoS", "background-color", "green");
  setProperty("botaoDD", "background-color", "#fef6e7");
  setProperty("botaoP", "background-color", "#fef6e7");
  setImageURL("imagemT", "assets/superheroe.png");
});
onEvent("botaoEnviar", "click", function( ) {
  setScreen("telaResultado");
  console.log(DadosTemaAnv);
  createRecord("Pesquisa", DadosTemaAnv);
  setText("etiquetaN", "Nome:"+DadosTemaAnv.nome);
  setText("etiquetaI", "Idade:"+DadosTemaAnv.idade);
});
