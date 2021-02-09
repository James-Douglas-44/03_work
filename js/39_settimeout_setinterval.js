// // setTimeout() function
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Jenny');

// const timerId2 = setTimeout(logger, 2000);

// function logger() {
//     console.log('Milena');
// }

// logger();

// // setInterval
// const btn = document.querySelector('.btn');
// let timerId3;
// let i = 0;

// btn.addEventListener('click', () => {
//     const timerId3 = setInterval(logger1, 2000);
// });

// function logger1() {
//     if (i === 3) {
//         clearInterval(timerId3);
//     }
//     console.log('Sha');
//     i++;
// }

const btn = document.querySelector('.btn');
let timerId, i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);