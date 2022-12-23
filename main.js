const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name : ")
    
    if (n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "My dearest love, my love for you is unconditional.  You are my rock, my confidante, and my protector.  Thank you for making every day so special.  I love you more than words can express.";
    }

    if (n. length > 0) {
        alert("I can't stop thinking about you.");
        alert("I'll keep loving you until the day I die...and even after that, if possible.");
        alert("You bring out the best in me.");
        alert("I  love you today. I will love you tomorrow. And I'll keep on loving you every day after that, too.");
        alert("Know that no matter where life takes us, you will always be the only one for me.");
        alert("I love you "+ n + "!");
        main.style.display = 'block';
        break;
    }
}