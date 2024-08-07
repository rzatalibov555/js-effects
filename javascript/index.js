const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
  const chatbox = document.getElementById('chatbox');
  const toggleChat = document.getElementById('toggleChat');
  const closeChat = document.getElementById('closeChat');
  const sendMessage = document.getElementById('sendMessage');
  const chatInput = document.getElementById('chatInput');
  const messages = document.getElementById('messages');

  toggleChat.addEventListener('click', () => {
      chatbox.style.display = 'flex';
      toggleChat.style.display = 'none';
  });

  closeChat.addEventListener('click', () => {
      chatbox.style.display = 'none';
      toggleChat.style.display = 'block';
  });

  sendMessage.addEventListener('click', () => {
      const message = chatInput.value.trim();
      if (message) {
          const messageElement = document.createElement('div');
          messageElement.textContent = message;
          messageElement.classList.add('message');
          messages.appendChild(messageElement);
          chatInput.value = '';
          messages.scrollTop = messages.scrollHeight;
      }
  });

  chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          sendMessage.click();
      }
  });
});


// loginfunction





function start(event) {
  event.preventDefault();

  let name = document.getElementById('name').value.trim();
  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value.trim();
  let age = document.getElementById('age').value.trim();

  let isValid = true;

  document.getElementById('nameError').innerHTML = "";
  document.getElementById('usernameError').innerHTML = "";
  document.getElementById('passwordError').innerHTML = "";
  document.getElementById('ageError').innerHTML = "";

  if (!name) {
      document.getElementById('nameError').innerHTML = "Name is required.";
      isValid = false;
  }
  
  if (!username) {
      document.getElementById('usernameError').innerHTML = "Username is required.";
      isValid = false;
  }
  if (!password) {
      document.getElementById('passwordError').innerHTML = "Password is required.";
      isValid = false;
  }
  if (!age) {
      document.getElementById('ageError').innerHTML = "Age is required.";
      isValid = false;
  }else if(isNaN(age)){
      document.getElementById('ageError').innerHTML = "Age must be a number.";
      isValid = false;
  }
  

  if (isValid) {
      alert("you are registerd /n now you can login")
  }
}

document.onkeydown = (e) => {
  if (e.key === "Enter" && document.getElementById('gender').value !== "") {
      start(e);
  }
};

function login(){
  let username = document.getElementById("username1").value
  let password = document.getElementById("password1").value
  
  let username_db = "Fizza"
  let password_db = "1234"

  if(username_db == username && password_db == password){
      location.replace("homepage.htm")
  }else{
      alert('Wrong username or password')
  }
}