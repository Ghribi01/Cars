var home=document.querySelector('.home');
var cars=document.querySelector('.cars');
var about=document.querySelector('.about');
var parts=document.querySelector('.parts');
home.addEventListener('click',function(){
    home.classList.add('active');
    cars.classList.remove('active');
    about.classList.remove('active');
    parts.classList.remove('active');
})
cars.addEventListener('click',function(){
    cars.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    parts.classList.remove('active');
})
about.addEventListener('click',function(){
    about.classList.add('active');
    home.classList.remove('active');
    cars.classList.remove('active');
    parts.classList.remove('active');
})
parts.addEventListener('click',function(){
    cars.classList.remove('active');
    home.classList.remove('active');
    about.classList.remove('active');
    parts.classList.add('active');
})
// Affichage de menu
var menu=document.querySelector('.menu');
var menubar=document.querySelector('.menubar');
menu.addEventListener('click',function(){
    if(menubar.style.display === 'none'){
        menubar.style.display='flex';
    }else{
        menubar.style.display='none';
    }
})
//Slid function
var container=document.querySelectorAll('.product-container');
var nextbtn=document.querySelectorAll('.nextbtn');
var prebtn=document.querySelectorAll('.prebtn');
container.forEach((item,i)=>{
    let dim=item.getBoundingClientRect();
    let contwi=dim.width;
    nextbtn[i].addEventListener("click",function(){
        item.scrollLeft += contwi;
    })
    prebtn[i].addEventListener('click',function(){
        item.scrollLeft -= contwi;
    })
})
// responsive menu
var barbtn=document.querySelector('.fa-bars');
var respmenu=document.querySelector('.respmenu');
barbtn.addEventListener('click',function(){
    if(respmenu.classList.contains('active2')){
        respmenu.classList.remove('active2');
    }else{
        respmenu.classList.add('active2');
    }
})
var links=document.querySelectorAll('navlink').forEach(n=>n.addEventListener('click',function(){
    respmenu.classList.remove('active2');
}))