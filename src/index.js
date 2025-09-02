function generateCPalette(event){
    event.preventDefault();

    let colours = ["#842D73", "#EE316B", "#FFB137", "#FBDFB6"];

    let colourOneElement = document.querySelector(".one");
    colourOneElement.innerHTML = "";
    colourOneElement.style.backgroundColor = colours[0];
    document.querySelector("#label-one").innerHTML = colours[0];

    let colourTwoElement = document.querySelector(".two");
    colourTwoElement.innerHTML = "";
    colourTwoElement.style.backgroundColor = colours[1];
    document.querySelector("#label-two").innerHTML = colours[1];

    let colourThreeElement = document.querySelector(".three");
    colourThreeElement.innerHTML = "";
    colourThreeElement.style.backgroundColor = colours[2];
    document.querySelector("#label-three").innerHTML = colours[2];

    let colourFourElement = document.querySelector(".four");
    colourFourElement.innerHTML = "";
    colourFourElement.style.backgroundColor = colours[3];
    document.querySelector("#label-four").innerHTML = colours[3];
}

let cpaletteFormElement = document.querySelector("#cpalette-generator-form");
cpaletteFormElement.addEventListener("submit", generateCPalette);

let clipboard = new ClipboardJS('.copy-btn');