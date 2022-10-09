const socket = io('http://localhost:3000')

const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')

const username = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', username)

socket.on('user-connected', username => {
    console.log(username)
    appendMessage(`${username} connected`)
})

socket.on('user-disconnected', username => {
    console.log(username)
    appendMessage(`${username} disconnected`)
})

socket.on('chat-message', data => {
    appendMessage(`${data.username}: ${data.message}`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}