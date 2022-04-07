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
});

const MAX_LENGHT_ERROR = 'MAX_LENGHT_ERROR'
const MIN_LENGHT_ERROR = 'MIN_LENGHT_ERROR'
const REQUIRED_ERROR = 'REQUIRED_ERROR'

const validateInput = (str='') => {
    if(str.length === 0) {
        return REQUIRED_ERROR
    }

    if(str.length < 5) {
        return MIN_LENGHT_ERROR
    }

    if(str.length > 15) {
        return MAX_LENGHT_ERROR
    }
}

const commentElement = document.querySelector('.commentInput');

if(commentElement) {
    commentElement.addEventListener('change', (event) => {
        const text = event.target.value;

        const error = validateInput(text);
        const errorElement = document.querySelector('.error');
        if (error) {
            let errorText = ''
            switch(error) {
                case REQUIRED_ERROR:
                    errorText = 'comment is required';
                    break;
                case MIN_LENGHT_ERROR:
                case MAX_LENGHT_ERROR:
                    errorText = 'comment should be between 5 and 10 characters'
                    break;
                default:
                    errorText = 'comment is invalid'
            }
            
            errorElement.innerHTML = errorText
            event.target.classList.add('inputError')
        } else {
            const commentsContainer = document.querySelector('.comments');

            if(commentsContainer) {
                const p = document.createElement('p');
                p.classList.add('comment');
                p.innerHTML = text;

                commentsContainer.appendChild(p);
                event.target.value = ''
                errorElement.innerHTML = ''
                event.target.classList.remove('inputError')
            }
        }
    });
}