function getReceipt() {
    var text1 = "<h2>You Ordered:</h2>";
    var runningTotal = 0;
    var selectedSize = "";
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    }

    var sizePrices = {
        "Personal Pizza": 6,
        "Small Pizza": 8,
        "Medium Pizza": 10,
        "Large Pizza": 14,
        "Extra Large Pizza": 16
    };
    runningTotal = sizePrices[selectedSize] || 0;
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            text1 += toppingArray[j].value + "<br>";
        }
    }

    runningTotal += Math.max(0, selectedTopping.length - 1);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "<h2>Total: <strong>$" + runningTotal.toFixed(2) + "</strong></h2>";
}

var slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function plusSlides(direction) {
    showSlides(slideIndex += direction);
}

function currentSlide(slideNumber) {
    showSlides(slideIndex = slideNumber);
}

function showSlides(slideNumber) {
    var slides = document.getElementsByClassName("mySlides");

    if (slideNumber > slides.length) {
        slideIndex = 1;
    }
    if (slideNumber < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("keydown", function (event) {
    var modal = document.getElementById("myModal");
    if (modal.style.display !== "block") {
        return;
    }
    if (event.key === "Escape") {
        closeModal();
    } else if (event.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key === "ArrowRight") {
        plusSlides(1);
    }
});