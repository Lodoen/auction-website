export default function feedback(message, status) {
  const feedback = document.createElement("div");
  feedback.setAttribute("class", `alert alert-${status}`);
  feedback.setAttribute("role", "alert");
  feedback.innerText = message;
  return feedback;
}
