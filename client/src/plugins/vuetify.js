import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'; // Vuetify 3 uses CSS variables

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify