const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e)=>{
        // console.log(e);
        // console.log(e.target);
        if(e.target.id==='red'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id==='green'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
        } else {
            body.style.backgroundColor = 'white';
        }
    })
} )