const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  const loginFormData = new FormData(event.target);
  const username = loginFormData.get("username");
  const password = loginFormData.get("password");

  const loginBody = { username: username, password: password };

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginBody),
  })
    .then((response) => {
      if (response.status === 401) {
        console.log(response);
        throw new Error("Login fails");
      } else {
        return response.json();
      }
    })
    .then((result) => {
      // console.log(result.token);
      localStorage.setItem("token", result.token);
      window.location.href = "/";
      // console.log(result.token)
    })
    .catch((error) => {
      console.error(error);
    });
  event.target.reset();
}
