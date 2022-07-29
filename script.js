const clock = document.querySelector("#clock-display");

const update = setInterval(() => {
    var date = new Date();
    
    clock.innerHTML = `
        <p>
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
        </p>
    `;
}, 1000/15);
