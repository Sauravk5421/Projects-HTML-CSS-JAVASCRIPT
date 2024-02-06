const button = document.getElementsByClassName('btn');
let s1 ='Under Weight';
let s2 = 'Normal Range';
let s3 = 'Overweight';
// console.log(button);
button[0].addEventListener('click', (b)=>{
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);

    const result = document.getElementById('results');

    if(height =='' || height<0 || isNaN(height)){
        result.innerHTML = "Please enter a valid number";
    } else  if(weight =='' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid number";
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi<=18.6){
            result.innerHTML = `Your BMIn is ${bmi} which is ${s1}`;
            result.style.backgroundColor = "rgb(231, 243, 67)";
            
        } else if(bmi>18.6 && bmi<=24.9){
            result.innerHTML = `Your BMIn is ${bmi} which is ${s2}`;
            result.style.backgroundColor = "rgb(46, 129, 46)";
        } else {
            result.innerHTML = `Your BMIn is ${bmi} which is ${s3}`;
            result.style.backgroundColor = "rgb(189, 59, 27)";

        }
    }
})