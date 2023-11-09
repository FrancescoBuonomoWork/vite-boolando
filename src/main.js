import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest } from "@fortawesome/free-brands-svg-icons"
library.add(faCartShopping, faCircleXmark, faUser, faHeart, faFacebook, faTwitter, faInstagram, faYoutube, faPinterest);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
