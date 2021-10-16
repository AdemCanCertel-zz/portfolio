import components from "./config/components"
target: 'static'

let description =
  "Hi there, my name is AdemCan Certel 17 years old high school student in Turkey from 2017 I am doing the site with web technologies. Doing web projects through JavaScript."

export default {
  buildModules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode'
],
  head: {
    title: 'AdemCan Certel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#949494' },
      {
        name: 'og:site_name',
        hid: 'og:site_name',
        content: 'ademcan.xyz',
      },
      {
        name: 'description',
        hid: 'description',
        content: description,
      },
      {
        name: 'og:description',
        hid: 'og:description',
        content: description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
    ],
  },
  loading: { color: '#949494' },
  components: true,
  build: {},
}