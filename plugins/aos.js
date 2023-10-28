import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.use(AOS.init())


export default ({ app }) => {
  app.AOS = new AOS.init({ 
    disable: "phone",
    disable: window.innerWidth < 640,
    // offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true
  }); // or any other options you need
};