import register from "../api/profile/register.mjs";

export default function setRegisterListener() {
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);
      const profileDetails = Object.fromEntries(formData.entries());
      register(profileDetails);
    });
  }
}
