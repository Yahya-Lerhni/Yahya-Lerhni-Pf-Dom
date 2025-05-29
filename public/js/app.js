// modal sign up
let buttonModal = document.querySelector("#btn-modal")
let modal = document.querySelector(".sign-up")
let closeModal = document.querySelector("#btn-close")
buttonModal.addEventListener('click', () => {
    modal.style.display = "flex"
})
closeModal.addEventListener('click', () => {
    modal.style.display = "none"
})
// modal video

let playVideo = document.querySelector("#btn-video");
let mydivmodal = document.querySelector("#video-modal");
let divPlayVideo = document.querySelector("#play-video")
let closevid = document.querySelector(".video-close");

playVideo.addEventListener("click", () => {
    mydivmodal.style.display = "block";
});

closevid.addEventListener("click", () => {
    mydivmodal.style.display = "none";
});

divPlayVideo.addEventListener("click", () => {
    mydivmodal.style.display = "block";
});
// menu
let mystar = document.querySelector("#star")
let mybreak = document.querySelector("#break")
let mylunch = document.querySelector("#lunch")
let mydinner = document.querySelector("#dinner")
let mysec4Title = document.querySelector(".h1-js")

function changeTitle(text) {
    mysec4Title.textContent = text;
    mysec4Title.style.borderBottom = "2px solid #ce121"
}

mystar.addEventListener('click', () => changeTitle("STARTERS"))
mybreak.addEventListener('click', () => changeTitle("BREKFAST"))
mylunch.addEventListener('click', () => changeTitle("LUNCH"))
mydinner.addEventListener('click', () => changeTitle("DINNER"))

let links = document.querySelectorAll(".sec4-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
// caroussel sec5
let sec5C1 = document.querySelector(".sec5-c1")
let mydot1 = document.querySelector(".dot-c1")
let sec5C2 = document.querySelector(".sec5-c2")
let mydot2 = document.querySelector(".dot-c2")
let sec5C3 = document.querySelector(".sec5-c3")
let mydot3 = document.querySelector(".dot-c3")
let sec5C4 = document.querySelector(".sec5-c4")
let mydot4 = document.querySelector(".dot-c4")
let testimonials = document.querySelectorAll(".testimonial");
let dots = document.querySelectorAll(".dot");
mydot1.addEventListener('click', () => {
    sec5C1.style.display = "flex"
    sec5C2.style.display = "none"
    sec5C3.style.display = "none"
    sec5C4.style.display = "none"
})
mydot2.addEventListener('click', () => {
    sec5C1.style.display = "none"
    sec5C2.style.display = "flex"
    sec5C3.style.display = "none"
    sec5C4.style.display = "none"
})
mydot3.addEventListener('click', () => {
    sec5C1.style.display = "none"
    sec5C2.style.display = "none"
    sec5C3.style.display = "flex"
    sec5C4.style.display = "none"
})
mydot4.addEventListener('click', () => {
    sec5C1.style.display = "none"
    sec5C2.style.display = "none"
    sec5C3.style.display = "none"
    sec5C4.style.display = "flex"
})


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    testimonials.forEach(t => {
      t.style.display = "none";
      t.classList.remove("active");
    });

    
    dots.forEach(d => d.classList.remove("active"));

    
    testimonials[index].style.display = "flex";

    
    setTimeout(() => {
      testimonials[index].classList.add("active");
    }, 50);

    dot.classList.add("active");
  });
});
// sec6 carousel 

