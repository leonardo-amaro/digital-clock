function doubleNum(num) {
    return num < 10 ? "0" + num : num
};

const clock = document.querySelector("#clock-display");

const update = setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    clock.innerHTML = `
        <p>
            ${doubleNum(hours)}:${doubleNum(minutes)}:${doubleNum(seconds)}
        </p>
    `;
}, 1000/15);
