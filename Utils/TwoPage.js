const dropdownBtn = document.querySelector('.dropdown_photo');
const dropdownMenu = document.querySelector('.dropdown__menu');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownMenu.classList.remove('active');
  }
});
