const inputTxt = document.querySelector("#input-txt");

inputTxt.addEventListener("invalid", (event)=>{
    console.log("greska");

    event.target.setCustomValidity("GRESKA!")

    let p = document.querySelector("p");
    p.style = "display:block";
})