
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
document.querySelectorAll('.show-modal').forEach(item=>item.addEventListener("click", function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}));
document.querySelector('.close-modal').addEventListener("click", function() {
 modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
document.querySelector('.overlay').addEventListener("click", function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    
});