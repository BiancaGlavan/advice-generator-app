const advice = document.querySelector('.advice');
const result = document.querySelector('.result');
let url = 'https://api.adviceslip.com/advice';

let isLoading = false;

const getQuote = () => {

    if(!isLoading) {
        isLoading = true;
        fetch(url)
        .then(data => data.json())
        .then((res) => {
            advice.innerHTML = `Advice #${res.slip.id}`;
            result.innerHTML = `"${res.slip.advice}"`;
            console.log('Checkout this JSON! ', res);
            isLoading = false;
        }).catch(err => {
            isLoading = false;
            throw err;
        });
    }

}