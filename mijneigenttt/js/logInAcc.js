const loginForm = document.querySelector(".login-form");
const loginButton = document.querySelector(".login-form-submit");
const loginErrorMsg = document.querySelector(".login-error-msg");

loginButton.addEventListener("click", mo)

function mo(e) {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Lenny" && password === "Bos") {
            window.location.href = "/firstPagee/start.html";
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}