const toggle =document.getElementById('toggle');
const close =document.getElementById('close');
const open =document.getElementById('open');
const modal =document.getElementById('modal');
const navbar =document.getElementById('navbar');

toggle.addEventListener('click',()=>{
    console.log("click",document.body.classList)
navbar.classList.toggle("nav-show")    
// .style.transform=translateX
});
// Show modal
Open.addEventListener('click', ()=> modal.classList.add('show-modal'));
// Hide modal
Close.addEventListener('click',()=>modal.classList.remove('show-modal'));
//Hide modal to outside click
window.addEventListener('click', e =>e.target == modal ?
    modal.classList.remove('show-modal') :false);