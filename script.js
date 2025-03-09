const text = "Izdadul Aziz"; 
let index = 0;
let isDeleting = false;

function typeEffect() {
    let typingElement = document.getElementById("typing");

    if (!isDeleting) {
        
        typingElement.innerHTML = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            
            setTimeout(() => {
                isDeleting = true;
            }, 1000);
        }
    } else {
        
        typingElement.innerHTML = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            
            isDeleting = false;
        }
    }

   
    let speed = isDeleting ? 100 : 150; 
    setTimeout(typeEffect, speed);
}

window.onload = typeEffect;