//-----------------------------------------Pagina de confirmação--------------------------------------------------
const msgConfirm = document.querySelector('.confirm');
const form = document.querySelector('#form');

if(form){
    form.addEventListener('click',(event)=>{
        event.preventDefault();
        msgConfirm.style.display = 'block';
    
        setTimeout(()=>{
            form.submit();
        },1000);
    });
};

