
const advice_search = async (API)=>{
    try {
        let getAdvice = await fetch(API);
        let respose = await getAdvice.json();
        return respose;
    } catch (error) {
        console.log('Fetch Error', error);s
    }
    
}
export default advice_search;