const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')
const roomContainer = document.getElementById('room-container')


if (messageForm != null) {
    const name = prompt('What is your name?')
    appendMessage('You joined')
    socket.emit('new-user', roomName, name)

    messageForm.addEventListener('submit', e => {
        e.preventDefault()
        const message = messageInput.value
        appendMessage(`You: ${message}`)
        socket.emit('send-chat-message', roomName, message)
        messageInput.value = ''
    })
}

socket.on('room-created', room => {
    // <div><%= room %></div>
    // <a href ="/<%= room %>">Join</a>
    const roomElement = document.createElement('div')
    roomElement.innerText = room
    const roomLink = document.createElement('a')
    roomLink.href = `/${room}`
    roomLink.innerText = 'Join'
    roomContainer.append(roomElement)
    roomContainer.append(roomLink)
})

socket.on('user-connected', name => {
    console.log(name)
    appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}