# DIY-Chat-Rooms
This project is a DIY Chat Room that can allow users to join different rooms and chat with other users in those rooms in real time.

![Demo](media/ChatRooms.gif)



## Installation
1. Open the project in VS code
2. Open a terminal and run the command below
3. npm run devStart
4. Go to http://localhost:3000/ 
5. Each tab is a new user. Duplicate the tabs multiple times to mimic multiple users being in the chat room.

![Screenshot](images/ChatApp.JPG)



## Technology Stack
This project was built with Javascript. It uses the [socket.io library](https://socket.io/).



## Developer's Thoughts
A friend told me about socket.io and how it is used for an easy, bidirectional connection between servers and clients. I learnt the concept of a client-server connection back when it was taught in school but I was always rather hazy about how it all worked. This project uses socket.io to establish a connection between users (clients) in the same chat room. Messages that are sent from one user will propagate to the chats of other users in the same room using socket.io's socket, which listens on events being sent to the server. 

After making this DIY chat room project, I am clearer on the client-socket connection concepts and how to code out an example of it using the socket.io library. It is also my first exposure to the socket.io technology and it is certainly a very cool tool to use. I might use it for my school projects in the future.

I followed the tutorial in this [link](https://www.youtube.com/watch?v=UymGJnv-WsE&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=49&ab_channel=WebDevSimplified) to guide me. I will come back to this project soon to add some styling and CSS so it looks like a more modernized chat platform! I am also thinking of adding a delete rooms function. 