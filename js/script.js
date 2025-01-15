function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const text = "Bem vindos a Escola Educ´ Arte";  // Text to be typed out
const typingSpeed = 150;  // Speed of typing in milliseconds

let i = 0;
const typedText = document.getElementById("typed-text");

function typeWriter() {
    if (i < text.length) {
        typedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(() => {
            typedText.style.borderRight = 'none';  // Remove cursor after typing finishes
        }, 500);
    }
}

// Start typing effect
window.onload = () => {
    typeWriter();
};
