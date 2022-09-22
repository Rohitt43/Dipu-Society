import Vue from 'vue'
import Home from "./components/Home.vue"
import AboutUs from "./components/AboutUs.vue"
import Gallery from "./components/Gallery.vue"
import ContactUs from "./components/ContactUs.vue"
Vue.use(VueRouter)

import VueRouter from "vue-router";




const router = new VueRouter({
    mode:'history',

    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs,
           
        },

        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery,
           
        },

        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs,
        },
    ]
  });

  export default router;