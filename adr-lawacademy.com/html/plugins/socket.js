import { io } from 'socket.io-client'
import Vue from 'vue'

export default ({ app, $config: { socketioURL } }, inject) => {
  console.log(socketioURL)
  // eslint-disable-next-line new-cap
  const socket = new io(socketioURL, {
    transports: ['websocket']
  })
  socket.connect()
  socket.on('connect', (data) => {
    console.log('Connect To Socket')
    console.log(socket.id) // an alphanumeric id...
  })
  inject('socket', Vue.observable({ main: socket }))
}
