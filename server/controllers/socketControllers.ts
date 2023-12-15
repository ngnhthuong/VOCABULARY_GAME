// import {
//   OnConnect,
//   SocketController,
//   ConnectedSocket,
//   OnDisconnect,
//   MessageBody,
//   OnMessage,
//   SocketIO,
// } from "socket-controllers";
// import { Server, Socket } from "socket.io";

// @SocketController()
// export class SocketControllers {
//   @OnConnect()
//   public onConnection(
//     @ConnectedSocket() socket: Socket,
//     @SocketIO() io: Server
//   ) {
//     console.log("New client connected", socket.id);
//   }

//   @OnDisconnect()
//   public onDisconnect(@ConnectedSocket() socket: Socket) {
//     console.log("Client disconnected");
//   }

//   @OnMessage("chat")
//   public onChatMessage(
//     @ConnectedSocket() socket: Socket,
//     @MessageBody() message: string
//   ) {
//     console.log("Received chat message:", message);
//   }
// }
