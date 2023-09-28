// script.js
const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
    items.forEach(item => {
        // Tính khoảng cách từ mục đến đầu container
        const distance = item.getBoundingClientRect().top;
        if (distance < window.innerHeight * 0.5 && distance > -window.innerHeight * 0.5) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
});
