const toTop = document.querySelector('.top');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset >350){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }
});
