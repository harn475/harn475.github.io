// JavaScript for handling button click
document.getElementById('clickMeButton').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = "You clicked the button! Welcome!";
    messageElement.style.color = "green";
  });
  