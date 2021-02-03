let logo = document.querySelector("#logo");
let label = document.querySelector(".navlable");
let body = document.querySelector(".container-body");
let footer = document.querySelector("#contact");
let routes = document.querySelector(".routes");

let show = "true";

const disable=()=>{
     
    if (show ==="true"){
      
        console.log("yo yo working here");
        body.style.display = "none";
        // logo.style.visibility = "hidden";
        logo.style.display = "none";
        routes.style.display = "flex";
        routes.style.flexDirection = "column";
        footer.style.display = "none";
        label.innerHTML="&#10006;"
        show = "false";

    }else{
        console.log("yo yo nah"); 
        body.style.display = "flex";
        // logo.style.visibility = "visible";
        logo.style.display = "block";
        footer.style.display = "block";
        routes.style.display = "none";
        label.innerHTML="&#9776;"
        show = "true" ;
    }
   
}