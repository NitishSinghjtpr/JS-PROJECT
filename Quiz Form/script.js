const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data =new FormData(form);

    for(let[name,value] of data.entries()){
        
    }

})