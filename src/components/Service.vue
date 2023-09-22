<template>
     <!-- Services Start -->
     <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Services</h6>
                <h1 class="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
            </div>
            <div class="row g-5" >
                <div class="col-md-6" v-for="i, index in service" :key="index">
                    <div class="service-item bg-light d-flex p-4">
                      <i :class="'flaticon-' + i.icon + ' display-1 text-primary me-4'"></i>
                      <div>
                            <h5 class="text-uppercase mb-3">{{i.title}}</h5>
                            <p>{{i.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Services End -->
</template>
<script>

export default {
    name: 'ServiceComponent',
    props:{
    service:{
            type : Array,
            required : true
        }
    }
}
</script>
