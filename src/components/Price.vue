<template>
    <div>
    <!-- Pricing Plan Start -->
    <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Pricing Plan</h6>
                <h1 class="display-5 text-uppercase mb-0">Complete Pricing For Pet Services</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-4" v-for="i, index in price" :key="index">
                    <div class="bg-light text-center pt-5 mt-lg-5">
                        <h2 class="text-uppercase">{{i.title}}</h2>
                        <h6 class="text-body mb-5">{{i.subtitle}}</h6>
                        <div class="text-center bg-primary p-4 mb-2">
                            <h1 class="display-4 text-white mb-0">
                                <small class="align-top"
                                    style="font-size: 22px; line-height: 45px;">$</small>{{i.price}}<small
                                    class="align-bottom" style="font-size: 16px; line-height: 40px;">/
                                    Mo</small>
                            </h1>
                        </div>
                        <div class="text-center p-4">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span>Pet grooming</span>
                            <i v-if="i.services.PetFeeding" class="bi bi-check2 fs-4 text-primary"></i>
                            <i v-else class="bi bi-x fs-4 text-danger"></i>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span>Pet grooming</span>
                            <i v-if="i.services.PetGrooming" class="bi bi-check2 fs-4 text-primary"></i>
                            <i v-else class="bi bi-x fs-4 text-danger"></i>
                          </div>
                          
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span>Pet boarding</span>
                            <i v-if="i.services.PetBoarding" class="bi bi-check2 fs-4 text-primary"></i>
                            <i v-else class="bi bi-x fs-4 text-danger"></i>
                          </div>
                          
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span>Pet training</span>
                            <i v-if="i.services.PetTraining" class="bi bi-check2 fs-4 text-primary"></i>
                            <i v-else class="bi bi-x fs-4 text-danger"></i>
                          </div>
                          
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span>Pet treatment</span>
                            <i v-if="i.services.PetTreatment" class="bi bi-check2 fs-4 text-primary"></i>
                            <i v-else class="bi bi-x fs-4 text-danger"></i>
                          </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Pricing Plan End -->
      <!-- Offer Start -->
      <div class="container-fluid bg-offer my-5 py-5">
        <div class="container py-5">
            <div class="row gx-5 justify-content-start">
                <div class="col-lg-7">
                    <div class="border-start border-5 border-dark ps-5 mb-5">
                        <h6 class="text-dark text-uppercase">ARE YOU LOOKING FOR A RELIABLE AND AFFORDABLE PET SERVICE?</h6>
                        <h1 class="display-5 text-uppercase text-white mb-0">Look no further than our pet services!</h1>
                    </div>
                    <p class="text-white mb-4">Our team of experienced and dedicated pet care professionals is committed to providing the highest level of care for your pet.</p>
                    <a href="contact.html" class="btn btn-outline-light py-md-3 px-md-5">Contact us</a>
                  </div>
            </div>
        </div>
    </div>
    <!-- Offer End -->
</div>
</template>
<script>
export default {
   name : 'PriceComponent',
   props:{
        price:{
            type : Array,
            required : true
        }
      }
}
</script>