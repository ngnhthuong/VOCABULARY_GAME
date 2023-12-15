// import { Sever } from "socket.io";
// export default (httpServer) => {
//   const io = new Sever(httpServer, {
//     cors: {
//       origin: "*",
//     },
//   });
//   io.on("connection", (socket) => {
//     //check xem user co online hay khong
//     {
//       console.log("New client connected");
//     }
//   });
//   //   set policy cho cors
//   useSocketServer(io, {
//     controllers: [__dirname + "/controllers/*.ts"],
//   });
//   // lay ra controller cua controllers / socket / *.js
//   return io;
// };
