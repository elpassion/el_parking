import io from 'socket.io-client';

const socket = io.connect(
  process.env.PREACT_APP_API_URL,
  {
    transports: ['websocket'],
    reconnection: false,
});

export default socket;
