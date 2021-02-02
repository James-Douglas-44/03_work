const btns = document.querySelectorAll('button');
// Finding out the number of classes of an element
console.log(btns[0].classList.length);
// Getting class marked by certain index
console.log(btns[0].classList.item(0));
// Adding certain classes to elements
console.log(btns[2].classList.add('red'));
// Removing certain classes from elements
console.log(btns[0].classList.remove('blue'));

// Checking availability of class in the element
// contains() method
if (btns[2].classList.contains('red')) {
    console.log('red');
}

btns[0].addEventListener('click', () => {
    if (!btns[3].classList.contains('violet')) {
        btns[3].classList.add('violet');
    } else {
        btns[3].classList.remove('violet');
    }
});

// Delegation
const wrapper = document.querySelector('.btn-block');
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
});
