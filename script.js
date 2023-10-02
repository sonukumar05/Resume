const toggleButtons =document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const projectDetails = button.nextElementSibling;
        projectDetails.classList.toggle('show-details');
    });
});