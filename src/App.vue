<template>
  <div id="app">
    <Head/>

    <body>
        <Nav :navItems="visibleNavItems"/>
        <router-view :service="service" :price="price"></router-view>
        <!-- Footer Start -->
    <Footer/>    
        <!-- Back to Top -->
        <a href="#" class="btn btn-primary py-3 fs-4 back-to-top"><i class="bi bi-arrow-up"></i></a>
    </body>
  </div>
</template>

<script>

import Head from './components/Head.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'



export default {
    computed: {
    visibleNavItems() {
      const defaultNavItems = [
        { path: '/home', text: 'Home' },
        { path: '/service', text: 'Service' },
        { path: '/price', text: 'Price' },
        { path: '/product', text: 'Product' },
      ];

      if (this.isAuth()) {
        defaultNavItems.push({ path: '/cart', text: 'Cart', meta: { auth: true } });
      }

      if (!this.isAuth()) {
        defaultNavItems.push({ path: '/login', text: 'Login' });
      }

      return defaultNavItems;
    },
  },
  name: 'App',
  components: {
    Head,Nav,Footer
  },
  data(){
    return{
    service:[
    {
        title:"Pet Boarding",
        text:"We provide a safe and comfortable environment for pets to stay while their owners are away. We are also offer additional services, such as grooming,veterinary care, and training.",
        icon:"house"
    },
    {
        title:"Pet Feeding",
        text:"We offer a range of pet feeding options and products, including a variety of pet food brands, treats. We are also offer range of feeding accessories, including bowls, automatic feeders, and water dispensers.",
        icon:"food"
    },
    {
        title:"Pet Grooming",
        text:"We offer pet grooming, which refers to the process of cleaning and maintaining the hygiene of pets, such as cats and dogs.It includes various activities like bathing, brushing, trimming, and clipping their hair or fur.",
        icon:"grooming"
    },
    {
        title:"Pet Training",
        text:"We offer pet training, which is the process of teaching a pet, such as a dog or cat, to learn and follow certain commands or behaviorsThere are different types of pet training, including obedience training, behavior training, and agility training. </span>",
        icon:"cat"
    }
  ],
  price:[
    {
        title:"BASIC",
        subtitle:"The Affordable Choice",
        price:"49",
        services:{
            "PetFeeding":true,
            "PetGrooming":true,
            "PetBoarding":false,
            "PetTraining":false,
            "PetTreatment":false
        }
    },
    {
        title:"STANDARD",
        subtitle:"The Best Choice",
        price:"99",
        services:{
            "PetFeeding":true,
            "PetGrooming":true,
            "PetBoarding":true,
            "PetTraining":false,
            "PetTreatment":false
        }
    },
    {
        title:"EXTENDED",
        subtitle:"All inclusive",
        price:"149",
        services:{
            "PetFeeding":true,
            "PetGrooming":true,
            "PetBoarding":true,
            "PetTraining":true,
            "PetTreatment":true
        }
    }
]
    }
   
  },
  methods: {
    shouldDisplayNavItem(item) {
      if (item.meta && item.meta.auth) {
        return this.isAuth();
      } else if (item.meta && item.meta.signin) {
        return !this.isAuth();
      }
      return true;
    },
    isAuth() {
      return this.$store.getters['user/isAuth'];
    },
  },
}
</script>

<!-- Template Stylesheet -->
<style>

@import '../css/style.css';
@import '../lib/owlcarousel//assets//owl.carousel.min.css';
@import '../css/bootstrap.min.css';
@import '../lib/flaticon//font//flaticon.css';

</style>
