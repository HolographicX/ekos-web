import { createApp } from 'vue'
import App from './App.vue'

import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'
import store from '@/plugins/vuex'

import VueNativeSock from 'vue-native-websocket-vue3'
import 'vuetify/styles'


const app = createApp(App)

app.use(VueNativeSock, 'ws://' + window.location.hostname + ':3000/interface', {
  reconnection: true,
  store: store,
  format: 'json',
})

app.use(vuetify)
app.use(store)
app.use(router)

app.mount('#app')
