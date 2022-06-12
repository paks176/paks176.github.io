const blogBlock = document.querySelector('.blog__block');
const blogContainerChildren = document.querySelector('.blog__container').children;
const buttonLeft = document.querySelector('.blog__buttons-left');
const buttonRight = document.querySelector('.blog__buttons-right');
let maxScroll = 0;
let currentScroll = 0;

function getCardsWidth() {
    let sum = 0;
    for (i = 0; i < blogContainerChildren.length; i++) {
       sum = sum + blogContainerChildren[i].offsetWidth
    }
    return sum
}

function getCurrentScroll(maxScroll) {
    if (blogBlock.scrollLeft < 100) {
        return 0;
    }
    if ((maxScroll - blogBlock.scrollLeft) < 150) {
        return maxScroll;
    }
    return Math.round(blogBlock.scrollLeft)
};

const cardsWidthSum = getCardsWidth();

function checkPosition() {
    
    maxScroll = blogBlock.scrollWidth - blogBlock.clientWidth;
    currentScroll = getCurrentScroll(maxScroll);

    if (currentScroll < maxScroll && currentScroll > 0) {
        buttonLeft.classList.remove('hidden')
        buttonLeft.classList.add('visible')
        buttonRight.classList.remove('hidden')
        buttonRight.classList.add('visible')
        return
    };
    if (window.innerWidth > cardsWidthSum) {
        buttonRight.classList.remove('visible')
        buttonRight.classList.add('hidden')
        buttonLeft.classList.remove('visible')
        buttonLeft.classList.add('hidden')
        return
    };
    if (currentScroll === 0) {
        buttonLeft.classList.remove('visible')
        buttonLeft.classList.add('hidden')
        buttonRight.classList.remove('hidden')
        buttonRight.classList.add('visible')
        return
    };
    if (currentScroll >= maxScroll) {
        buttonRight.classList.remove('visible')
        buttonRight.classList.add('hidden')
        buttonLeft.classList.remove('hidden')
        buttonLeft.classList.add('visible')
        return
     };
}

buttonLeft.addEventListener('click', (event) => {
    blogBlock.scrollLeft = blogBlock.scrollLeft - 315;
    checkPosition();
});

buttonRight.addEventListener('click', (event) => {
    blogBlock.scrollLeft = blogBlock.scrollLeft + 315;
    checkPosition();
});

window.addEventListener('DOMContentLoaded', checkPosition)
window.addEventListener('resize', checkPosition);

// Обработка событий удержания клика/касания

// let timerID;
// let counter = 0;
// let pressHoldEvent = new CustomEvent("pressHold");
// let pressHoldDuration = getMaxScroll();

// function pressingDown(event) {
//     requestAnimationFrame(timer);
//     event.preventDefault();
//     console.log("Pressing!");
// }
  
// function notPressingDown(event) {
//     cancelAnimationFrame(timerID);
//     counter = 0;
//     console.log("Not pressing!");
// }

// function presser() {
//     console.log("Timer tick!");
  
//     if (counter < pressHoldDuration) {
//       timerID = requestAnimationFrame(presser);
//       counter++;
//     } else {
//       console.log("Press threshold reached!");
//       buttonRight.dispatchEvent(pressHoldEvent);
//     }
//   }

// buttonRight.addEventListener("mousedown", pressingDown, false);
// buttonRight.addEventListener("mouseup", notPressingDown, false);
// // item.addEventListener("mouseleave", notPressingDown, false);

// buttonRight.addEventListener("touchstart", pressingDown, false);
// buttonRight.addEventListener("touchend", notPressingDown, false);
// buttonRight.addEventListener("pressHold", doSomething, false);