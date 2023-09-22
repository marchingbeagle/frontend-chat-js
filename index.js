const sendMessageButton = document.getElementById("sendMessage");

function addToForm(event) {
  event.preventDefault();
  const messageList = document.getElementById("message-list");

  const inputText = document.getElementById("message");
  const newMessageWrapper = document.createElement("div");
  const newMessageSenderWrapper = document.createElement("div");
  const newMessageSender = document.createElement("strong");
  const newMessageText = document.createElement("div");

  newMessageText.classList.add("msg-chat");
  newMessageSenderWrapper.classList.add("msg-user");
  newMessageWrapper.classList.add("message-item", "msg-user", "voce");

  newMessageSender.innerHTML = "Você";
  newMessageText.innerHTML = inputText.value;

  newMessageSenderWrapper.appendChild(newMessageSender);
  newMessageWrapper.appendChild(newMessageSenderWrapper);
  newMessageWrapper.appendChild(newMessageText);
  messageList.appendChild(newMessageWrapper);

  inputText.value = "";
}

sendMessageButton.addEventListener("click", addToForm);
