const loginForm = document.querySelector(".login");
console.log(loginForm)
// loginForm = null ??? 
loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
    event.preventDefault();
    const loginFormData = new FormData(event.target);
    const username = loginFormData.get("username")
    const password = loginFormData.get("password")
    console.log(username)
    console.log(password)

    const loginBody = { user: { username:username, password:password } }

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginBody)
    })
    event.target.reset();
}