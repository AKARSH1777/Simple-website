// PixelNest Studio - small interactions

// Contact section: greet the visitor when the button is clicked
function greetVisitor() {
  var nameBox = document.getElementById("visitor-name");
  var reply = document.getElementById("reply");
  var name = nameBox.value.trim();

  if (name === "") {
    reply.textContent = "Please type your name first.";
    return;
  }

  // textContent (not innerHTML): whatever the visitor types is shown as plain
  // text, so a script tag typed into the box can never run (basic XSS safety)
  reply.textContent = "Thanks, " + name + "! We will get back to you soon.";
}

document.getElementById("send-btn").addEventListener("click", greetVisitor);

// Footer: always show the current year
document.getElementById("year").textContent = new Date().getFullYear();
