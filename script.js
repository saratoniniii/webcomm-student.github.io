function showSidebar(){
document.querySelector('.sidebar').style.display = 'flex';
} 

function hideSidebar(){
document.querySelector('.sidebar').style.display = 'none';
}


const toggles = document.querySelectorAll('.button-section');
toggles.forEach((toggle) => {
toggle.addEventListener("click", ()=>{
toggle.parentNode.classList.toggle("active"); 
})

})