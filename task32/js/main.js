/*$(document).ready(function () {
    $('.acordion__title').on('click', function () {
        let active = $(this).hasClass('active')

        $('.acordion__title').removeClass('active');
        $('.acordion__content').slideUp();

        if (!active) {
            $(this).addClass('active');
            $(this).next().slideDown();
        }

        return true
    })
})*/
/*
$(document).ready(function () {
    $('.menu__link').on('click', scrollAnchor);

    function scrollAnchor() {
        let link = $(this).attr('href');
        let scrollTop = $(link).offset().top;
        console.log(scrollTop)

        $('html').animate({
            scrollTop: scrollTop
        }, 1500)
    }
})*/

/*Home work start*/

$(document).ready(function () {

    $('.tabs a').click(function () {
        $('.panel').hide();
        $('.tabs a.active').removeClass('active');
        $(this).addClass('active');

        var panel = $(this).attr('href');
        $(panel).fadeIn(1000);

        return false;
    });

    $('.tabs li:first a').click();

});

//Calculator

const output = document.querySelector('output')

const div = document.createElement('div')
div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)

'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')
    .map(symbol => {
        div.insertAdjacentHTML('beforeend', `<button value="${symbol}" class="button">${symbol}</button>`)
    })

let btnAction = '/*-+='
if (btnAction == '/') {

}
console.log(btnAction)

div.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {

        calc(e.target.value)
    }
})

document.addEventListener('keydown', e => {
    if ((e.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(e.key)
})

function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            if (output.textContent !== '') {
                output.textContent = Math.trunc(math.evaluate(output.textContent))
            }
        } catch {
            let oldValue = output.textContent
            let newValue = 'Помилка'

            output.textContent = newValue
            const timer = setTimeout(() => {
                output.textContent = oldValue
                clearTimeout(timer)
            }, 1500)
        }
    } else if (value === 'C') {
        output.textContent = ''
    } else if (value.match(/CE|Backspace/)) {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
    } else {
        output.textContent += value
    }
}




