import openSocket from 'socket.io-client';
import {WebSocketServiceUrl} from "./services";

const socket = openSocket(WebSocketServiceUrl);

export const subscribeToTimer = (cb) => {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
};

export const subscribeToRobberies = (cb) => {
    socket.on('robberies', robberies => (cb(null, robberies)));
    socket.emit('subscribeToRobberies', 1000);
};