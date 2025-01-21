const container = document.getElementById('container');
const sizeBtn = document.getElementById('size');

sizeBtn.addEventListener("click", () => {
    let num = 0;
    num = prompt("Enter a size");

    while ( num <= 0 || !Number.isInteger(Number(num)) || num > 100) {
        num = prompt("Enter a valid whole number greater than 0");
    }

    num = Number(num);
    container.innerHTML = '';
    addDiv(num);
});

function addDiv(n) {
    for (let i = 0; i < n; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "outerDiv";
        container.appendChild(newDiv);
    }
    addInnerDiv(n);
}

function addInnerDiv(n) {
    const innerDivs = document.querySelectorAll('.outerDiv');

    innerDivs.forEach(div => {
        for (let i = 0; i < n; i++) {
            let newInnerDiv = document.createElement('div');
            newInnerDiv.className = "innerDiv tile";
            div.appendChild(newInnerDiv);
        }
    });

    const items = document.querySelectorAll('.innerDiv');
    let itemWidth = (80 / n);
    
    if (n > 45) {
        itemWidth = (50 / n);
    } else if (n > 25) {
        itemWidth = (70 / n);
    }

    items.forEach(div => {
        div.style.setProperty('width', `${itemWidth}vw`);
        div.style.setProperty('height', `${itemWidth}vh`);

        div.addEventListener('mouseover', () => {
            div.classList.add('tile-active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addDiv(16);
});
