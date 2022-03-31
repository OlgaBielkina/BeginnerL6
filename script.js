const buttonElements = document.querySelectorAll('.addToCartBtn');

for( let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', function() {
        const cartAmountEl = document.querySelector('.cartAmount');
        if(cartAmountEl) {
            const amount = parseInt(cartAmountEl.textContent, 10) || 0;
            cartAmountEl.innerHTML = amount + 1
        } else {
            console.log('element does not exist')
        }
    });
}


const colorElements = document.querySelectorAll('.color');

colorElements.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        const colorEl = event.target;
        const color = colorEl.dataset.color;
        const image = document.querySelector('.image');
        colorElements.forEach((el) => {
            el.classList.remove('active')
        })

        colorEl.classList.add('active')

        if(image) {
            image.setAttribute('src', './assets/' + color + '_socks.jpeg')
        }
    })
})