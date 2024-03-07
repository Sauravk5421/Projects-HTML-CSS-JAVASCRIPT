

const fromSelect = document.querySelector('#fromSelect');
for(codes in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = codes;
    newOption.value = codes;
    if (codes == 'USD') {
        newOption.selected = true;
    } 
    fromSelect.append(newOption);
}

const toSelect = document.querySelector('#toSelect');
for(codes in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = codes;
    newOption.value = codes;
    if (codes == 'INR') {
        newOption.selected = true;
    } 
    toSelect.append(newOption);
}

const flgsrc = document.getElementById('flgsrc1');
fromSelect.addEventListener('change',(event1)=>{
    let val1 = countryList[event1.target.value];
    flgsrc.src = `https://flagsapi.com/${val1}/flat/64.png`
})

const flgsrc2 = document.getElementById('flgsrc2');
toSelect.addEventListener('change',(event2)=>{
    let val2 = countryList[event2.target.value];
    flgsrc2.src = `https://flagsapi.com/${val2}/flat/64.png`
})


const btnSubmit = document.getElementById('btn');
let amt = document.getElementById('inputVal');
let msg = document.getElementById('msg');


btnSubmit.addEventListener('click',async (e)=>{
    e.preventDefault();
    let amountVal = amt.value;
    if(amountVal< 0 || amountVal==0){
        amountVal = 1;
        amt.value = "1";
    }

    const DATA_URL = `https://v6.exchangerate-api.com/v6/db9dd06ef07d2112693c914d/latest/${fromSelect.value}`;

    let response = await fetch(DATA_URL);
    let data = await response.json();
    let rate = data.conversion_rates[toSelect.value];

    let finalAmount = (amt.value * rate).toFixed(2);
    msg.innerText = `${amt.value} ${fromSelect.value} = ${finalAmount} ${toSelect.value}`
})




