
const advice_search = async (API)=>{
    let getAdvice = await fetch(API);
    let respose = await getAdvice.json();
    console.log(respose);
}
export default advice_search;