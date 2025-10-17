// Login AND Register
let phoneForm = document.getElementById("phoneForm");
let codeForm = document.getElementById("codeForm");
let subPhoneForm = document.getElementById("subPhoneForm");
let editNumber = document.getElementById("editNumber");
let countDown;
let time;


// Timer Code
function startTimer() {
    time = 120;
    let timer = document.getElementById("timer");
    let textTime = document.getElementById("textTime");

    countDown = setInterval(() => {
        let m = Math.floor(time / 60);
        let s = time % 60;

        timer.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        time--;

        if (time < 0) {
            clearInterval(countDown);
            textTime.textContent = "ارسال مجدد کد";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countDown);
}

// Go To Code Form
subPhoneForm.addEventListener("click", function (e) {
    e.preventDefault();

    phoneForm.style.display = "none";
    codeForm.style.display = "block";
    startTimer();
});

// Go To Phone Form
editNumber.addEventListener("click", function (e) {
    e.preventDefault();

    phoneForm.style.display = "block";
    codeForm.style.display = "none";
    stopTimer()
});



// auto input jump
let inputs = document.querySelectorAll(".code-input");

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});