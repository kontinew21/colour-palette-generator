function displayPalette(response){
    let answer = response.data.answer;
    let colours = answer.split("\n");

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

function generateCPalette(event){
    event.preventDefault();
    
    let themes = document.querySelector("#theme");
    let prompt = `What is a four-colour palette that perfectly represents ${themes.value}`;
    let context = "Please only include the four hex codes with a hastag in the front of each";
    let apiKey = "434at24abcb5077obabee921e64ef383";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let colourElement = document.querySelector(".colour_container");
    colourElement.classList.remove("hidden");

    let smallElement = document.querySelector("small");
    smallElement.style.paddingBottom = "10px";


    console.log(apiURL);
    axios.get(apiURL).then(displayPalette);
}

let cpaletteFormElement = document.querySelector("#cpalette-generator-form");
cpaletteFormElement.addEventListener("submit", generateCPalette);

let show = function() {
    jSuites.loading.show();
    setTimeout(function() {
        jSuites.loading.hide();
    }, 2000);
}
showbtn.onclick = () => show();

let clipboard = new ClipboardJS('.copy-btn');