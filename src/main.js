import advice_search from "./utils/getData.js";
import './styles/main.css';

const API = process.env.API;
const icon_advice = document.getElementById("icon_advice");
const parrafo = document.querySelector("#card_body p");
const titleId = document.getElementById("id_advice");

async function addAdviceCard(){
    parrafo.innerHTML = "<h2>LOADING.</h2>";

    const data = await advice_search(API);

    titleId.textContent = data.slip.id;
    parrafo.textContent = data.slip.advice;
    parrafo.style.animation = "2s anim-lineUp ease-out forwards";
}

icon_advice.addEventListener("click", addAdviceCard);
parrafo.addEventListener("animationend", ()=>{
    parrafo.style.animation = "none";
});


