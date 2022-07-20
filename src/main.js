import advice_search from "./utils/getData.js";

const API = "https://api.adviceslip.com/advice";
const icon_advice = document.getElementById("icon_advice");

async function addAdviceCard(){
    const data = await advice_search(API);
    const titleId = document.getElementById("id_advice");
    const parrafo = document.querySelector("#card_body p");

    titleId.textContent = data.slip.id;
    parrafo.textContent = data.slip.advice
}

icon_advice.addEventListener("click", addAdviceCard);


