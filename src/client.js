import io from 'socket.io-client';

const socket = io.connect(
  process.env.PREACT_APP_API_URL,
  {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: 100,
    reconnectionDelay: 60000,
});

export default socket;
