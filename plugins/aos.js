import AOS from "aos";
import "aos/dist/aos.css";

const globalAOS = AOS.init({
  // note: your options here
   startEvent: 'load'
})

// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
   AOS.refresh()
})

export default ({ app }) => {
  app.AOS = globalAOS
  app.AOS = new AOS.init({ 
    disable: "phone",
    disable: window.innerWidth < 640,
    // offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true
  }); // or any other options you need
};