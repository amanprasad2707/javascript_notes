const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
console.log(buttons)
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case 'grey':
                body.style.background = e.target.id;
                break;
            case 'white':
                body.style.background = e.target.id;
                break;
            case 'blue':
                body.style.background = e.target.id;
                break;
            case 'yellow':
                body.style.background = e.target.id;
                break;
        }
    })
})