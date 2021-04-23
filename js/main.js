//ao carregar a página iniciar funcao
window.onload = function () {
    //cria constante e seleciona todos os elementos "button"
    buttons = document.querySelectorAll("#panel button");
    //percorre cada button
    for (let button of buttons) {
        //inicia funcao quando button receber um click passando o dado personalizado como parametro
        button.onclick = () => openTab(button.dataset.tabname);
    }

    //tab padrao
    openTab("dois");
}

function openTab(tabName) {
    //cria constante e seleciona o elemento com a classe "tabActive"
    const lastTabActive = document.querySelector(".tabActive");
    //testa se existe alguma classe na section
    if (lastTabActive !== null) {
        //remove a classe
        lastTabActive.className = "";
    }

    //cria constante e seleciona o elemento com a classe "buttonActive"
    const lastButtonActive = document.querySelector(".buttonActive");
    //testa se existe alguma classe no button
    if (lastButtonActive !== null) {
        //remove a classe
        lastButtonActive.className = "";
    }

    //define codigo CSS para section e button
    const query1 = ".tabs > section[data-tabname='" + tabName + "']";
    const query2 = "#panel button[data-tabname ='" + tabName + "']";

    //insere a nova classe de section e button
    document.querySelector(query1).className = "tabActive";
    document.querySelector(query2).className = "buttonActive";
}