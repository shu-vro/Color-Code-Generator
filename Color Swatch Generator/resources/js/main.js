let container = document.querySelector(".wrapper");
let input = document.querySelectorAll(".code");
let loadButton = document.getElementById("loadMore");
let Alert = document.getElementById('alert');

function randomColor() {
    let chars = "1234567890abcdef";
    let color = "";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNumber, randomNumber + 1);
    }
    color = "#" + color;
    return color;
}

function Swatch() {
    let color = randomColor();

    let tile = document.createElement("div");
    tile.classList.add("swatch");
    tile.style.background = color;

    let output = document.createElement("input");
    output.type = "text";
    output.classList.add("code");
    output.readOnly = true;
    output.value = color;
    output.style.background = color;
    output.addEventListener('click', () => {
        let copyCode = output;
        copyCode.select();
        document.execCommand('copy');
        Alert.classList.toggle('active');
        Alert.style.background = output.value;
        setTimeout(() => {
            Alert.classList.toggle('active').remove();
        }, 1000);
    })

    container.appendChild(tile);
    tile.appendChild(output);
}

function generateSwatch() {
    for (let i = 0; i < 50; i++) {
        Swatch();
    }
}
generateSwatch();

loadButton.addEventListener('click', () => {
    generateSwatch();
    window.scrollBy(0, window.innerHeight);
});
// 1366