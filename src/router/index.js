import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';

const router = createRouter({
    history: createWebHistory(), 
      routes: [
        
        {
            path: '/',
            name: 'Home',
            component: Home

        }
        
    ],
  scrollBehavior(to, from, savedPosition) {
    // Return the desired position when navigating back and forward
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll to the top by default
      return { left: 0, top: 0 };
    }
  },
  
});

export default router