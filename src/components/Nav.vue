<template>
<div>
    <div class="container-fluid border-bottom d-none d-lg-block">
        <div class="row gx-0">
           <div class="col-lg-4 text-center py-2">
              <div class="d-inline-flex align-items-center">
                 <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                 <div class="text-start">
                    <h6 class="text-uppercase mb-1">Our Office</h6>
                    <span>123 Street, New York, USA</span>
                 </div>
              </div>
           </div>
           <div class="col-lg-4 text-center border-start border-end py-2">
              <div class="d-inline-flex align-items-center">
                 <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                 <div class="text-start">
                    <h6 class="text-uppercase mb-1">Email Us</h6>
                    <span>infopetshop@gmail.com</span>
                 </div>
              </div>
           </div>
           <div class="col-lg-4 text-center py-2">
              <div class="d-inline-flex align-items-center">
                 <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                 <div class="text-start">
                    <h6 class="text-uppercase mb-1">Call Us</h6>
                    <span>+012 345 6789</span>
                 </div>
              </div>
           </div>
        </div>
     </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" class="navbar-brand ms-lg-5">
            <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop Ari</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
         <li class="nav-item nav-link" v-for="i, index in navItems" :key="index"><router-link :to="i.path">{{i.text}}</router-link></li>
         <li v-if="isAuth" class="nav-item nav-link" >
            <div :style="{'display':'inline'}"
             @click="signout"
            >Sign out</div>
         </li>


      </div>
    </nav>
</div>
</template>
  
  <script>
  export default {
   computed:{
            isAuth(){
                return this.$store.getters['user/isAuth'];
            }
        },
    name: 'NavComponent',
    props: ["navItems"],
    methods:{
            signout(){
                this.$store.dispatch('user/signout');
            }
        }
  }
  </script>
