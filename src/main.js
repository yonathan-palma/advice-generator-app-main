import advice_search from "./utils/getData.js";

const API = "https://api.adviceslip.com/advice";

const addAdviceCard = async () =>{
    const data = await advice_search(API);
    console.log(data);
}