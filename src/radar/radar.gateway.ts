import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RadarGateway {
  @WebSocketServer()
  server: Server;

  emitMessage(data: string) {
    this.server.emit('message', data);
  }
}
