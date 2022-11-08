import { io } from "socket.io-client";
const socket = io.connect("http://10.0.10.19:4000", {
    transports: ['websocket'],
    forceNew: true,
    upgrade: false
});
export default socket;