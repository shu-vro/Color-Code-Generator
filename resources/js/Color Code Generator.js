const cover = document.querySelector('.cover');
const start_menu = document.querySelector('.start_menu');
const color_code_chooser = document.getElementById('color_code_chooser');
const box = document.querySelector('.box');
const main = document.querySelector('.main');
var alertBox = document.getElementById('alertBox');
var ChooseColor;


document.addEventListener('keydown', function (e) {
    if (e.keyCode == 8) {
        setTimeout(() => {
            cover.classList.toggle('selectMode');
        }, 500);
        nav.classList.toggle('checked');
    }
    if (e.keyCode == 67) {
        copyColor();
    }
})

// Navigation Bar
const nav = document.querySelector('.navigation');



nav.addEventListener('click', function () {
    setTimeout(() => {
        cover.classList.toggle('selectMode');
    }, 500);
    nav.classList.toggle('checked');
});

window.addEventListener('change', function () {
    var button = document.createElement('button');
    button.classList.add('getColor');
    box.appendChild(button);
    rippleEffect();


    if (color_code_chooser.value == 'HEX') {
        button.textContent = 'Get HEX Code';
        button.setAttribute(
            'onclick', 'hex()'
        );
        console.log('HEX code started Successfully');
    } 
    
    else if (color_code_chooser.value == 'HEXa') {
        button.textContent = 'Get HEXa Code';
        button.setAttribute(
            'onclick', 'hexa()'
        );
        console.log('HEXa code started Successfully');
    } 
    
    else if (color_code_chooser.value == 'RGB') {
        button.textContent = 'Get RGB Code';
        button.setAttribute(
            'onclick', 'rgb()'
        );
        console.log('RGB code started Successfully');
    } 
    
    else if (color_code_chooser.value == 'RGBA') {
        button.textContent = 'Get RGBA Code';
        button.setAttribute(
            'onclick', 'rgba()'
        );
        console.log('RGBA code started Successfully');
    } 
    
    else if (color_code_chooser.value == 'HSL') {
        button.textContent = 'Get HSL Code';
        button.setAttribute(
            'onclick', 'hsl()'
        );
        console.log('HSL code started Successfully');
    } 
    
    else if (color_code_chooser.value == 'HSLA') {
        button.textContent = 'Get HSLA Code';
        button.setAttribute(
            'onclick', 'hsla()'
        );
        console.log('HSLA code started Successfully');
    } 
    
    else {
        console.log('Nothing Started');
    }
});

// Hex code generator.
function hex() {
    var color = '';
    var chars = '0123456789abcdef';

    for (let i = 0; i < 6; i++) {
        var ranNum = (Math.floor(Math.random() * chars.length));
        color += chars.substring(ranNum, ranNum+1);
    }
    document.getElementById('output').value = '#' + color;
    alertBox.innerHTML = 'Your Color Code Is <br>' +'#'+ color;
    alertBox.style.background = '#' + color;
    main.style.background = '#' + color;
}


// Hexa code generator.
function hexa() {
    var color = '';
    var chars = '0123456789ABCDEF';

    for (let i = 0; i < 8; i++) {
        var ranNum = (Math.floor(Math.random() * chars.length));
        color += chars.substring(ranNum, ranNum+1);
    }
    document.getElementById('output').value = '#' + color;
    alertBox.innerHTML = 'Your Color Code Is <br>' +'#'+ color;
    alertBox.style.background = '#' + color;
    main.style.background = '#' + color;
}


// Rgb code generator.
function rgb() {
    function ranColor() {
        return (Math.floor(Math.random() * 255));
    }
    ChooseColor = 'rgb('+ranColor()+', '+ranColor()+', '+ranColor()+')';
    document.getElementById('output').value = ChooseColor;
    alertBox.style.background = ChooseColor;
    main.style.background = ChooseColor;
    alertBox.innerHTML = 'Your Color Code Is <br>' + ChooseColor;
}


// Rgba code generator.
function rgba() {
    function ranColor() {
        return (Math.floor(Math.random() * 255));
    }
    var alpha = (Math.random() * 1).toFixed(3);
    ChooseColor = 'rgba('+ranColor()+', '+ranColor()+', '+ranColor()+','+ alpha+')';
    document.getElementById('output').value = ChooseColor;
    alertBox.style.background = ChooseColor;
    main.style.background = ChooseColor;
    alertBox.innerHTML = 'Your Color Code Is <br>' + ChooseColor;
}



// Hsl color generator
function hsl() {
    function ranHueSat() {
        return (Math.floor(Math.random() * 100)) + '%';
    }

    var hue = Math.floor(Math.random() * 360);
    ChooseColor = 'hsl('+hue+', '+ranHueSat()+', '+ranHueSat()+')';
    document.getElementById('output').value = ChooseColor;
    alertBox.style.background = ChooseColor;
    main.style.background = ChooseColor;
    alertBox.innerHTML = 'Your Color Code Is <br>' + ChooseColor;
}
function hsla() {
    function ranHueSat() {
        return (Math.floor(Math.random() * 100)) + '%';
    }

    var alpha = (Math.random() * 1).toFixed(3);
    var hue = Math.floor(Math.random() * 360);
    ChooseColor = 'hsl('+hue+', '+ranHueSat()+', '+ranHueSat()+', '+alpha+')';
    document.getElementById('output').value = ChooseColor;
    alertBox.style.background = ChooseColor;
    main.style.background = ChooseColor;
    alertBox.innerHTML = 'Your Color Code Is <br>' + ChooseColor;
}


// Function for coping The color Code.
function copyColor() {
    var copyColorText = document.getElementById('output');
    copyColorText.select();
    document.execCommand('copy');
    alertBox.classList.toggle('alertNow');
    setTimeout(() => {
        alertBox.classList.toggle('alertNow').remove();
    }, 2000);
}


// Stylings
function rippleEffect() {
    var TargetButton = document.querySelectorAll('button');

    TargetButton.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let ripples = document.createElement('span');
            ripples.classList.add('ripples');
            ripples.style.left = e.offsetX + 'px';
            ripples.style.top = e.offsetY + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        })
    });
}