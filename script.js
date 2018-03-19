function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('menu').classList.toggle("change");
    if (document.getElementById('menu').style.display=="block") {
        // document.getElementById('menu').style.display="none";

        document.getElementById('menu').style.display = 'none';

    }else {

        // document.getElementById('menu').style.display="block";

        document.getElementById('menu').style.display = 'block';

    }

}
