const info_btn = document.getElementById("info");
const histoire_btn = document.getElementById("histoire");
const galerie_btn = document.getElementById("galerie");
const info = document.getElementById("info-content");
const histoire = document.getElementById("histoire-content");
const galerie = document.getElementById("galerie-content");


info_btn.onclick= function() {
    info.style.display = "grid";
    info_btn.classList.add("active");
    histoire.style.display = "none";
    galerie.style.display = "none";
    if(histoire_btn.classList.contains("active")){
        histoire_btn.classList.remove("active");
    } else if(galerie_btn.classList.contains("active")){
        galerie_btn.classList.remove("active");
    }
}

histoire_btn.onclick= function() {
    info.style.display = "none";
    histoire.style.display = "grid";
    histoire_btn.classList.add("active");
    galerie.style.display = "none";
    if(info_btn.classList.contains("active")){
        info_btn.classList.remove("active");
    } else if(galerie_btn.classList.contains("active")){
        galerie_btn.classList.remove("active");
    }
}

galerie_btn.onclick= function() {
    info.style.display = "none";
    histoire.style.display = "none";
    galerie.style.display = "grid";
    galerie_btn.classList.add("active");
    if(info_btn.classList.contains("active")){
        info_btn.classList.remove("active");
    } else if(histoire_btn.classList.contains("active")){
        histoire_btn.classList.remove("active");
    }
}