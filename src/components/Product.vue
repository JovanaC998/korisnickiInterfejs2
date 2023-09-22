<template>
    <div>
     <!-- Products End -->
     <!-- All Product Start -->
     <div>
        <div id="products">
           <div class="border-start border-5 border-primary ps-5 mt-5 mb-5">
              <h6 class="text-primary text-uppercase">Products</h6>
              <h1 class="display-5 text-uppercase mb-0">All Products</h1>
           </div>
           <div id="categoriesFlex">
              <div>
                 <div class="mb-5 ">
                    <div class="input-field">
                       <h6 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Search</h6>
                       <input type="text" id="search" placeholder="e.g. Cat Snack" @keyup="handleKeyUp">
                    </div>
                 </div>
              </div>
              <div id="allProducts">
                <div v-for="product in products" :key="product.id" class="productItemFlex product-item position-relative bg-light d-flex flex-column text-center flexProduct" :data-id="product.id">

                  <img :src="`https://aripetshop.000webhostapp.com/${product.slika}`" :alt="product.alt">
                    <h6 class="titleProduct">{{product.naziv}}</h6>
                    <h5 class="text-primary mb-0">$ {{product.cena}}</h5>
                    <button class='btn btn-primary py-2 px-3' @click="addToCart(product)">Add to Cart</button>

                </div>
              </div>
           </div>
        </div>
     </div>
     <div id="paginacija">
     </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"ProductComponent",
    data(){
        return{
            products:[],
            cart: []
        }
    },
    mounted(){
        var that = this;
        axios.get(process.env.VUE_APP_URL + "models/ispisProizvoda.php")
        .then((products)=>{
            console.log(products)
            that.products = products.data;
    })
        .catch(error=>{
            console.log(error);
        })
    },
    methods: {
    handleKeyUp(event) {
    var searchTerm = event.target.value;
    var that = this;
    axios.get(process.env.VUE_APP_URL+"models/ispisProizvoda.php?search="+searchTerm)
      .then(response => {       
        that.products = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  addToCart(product) {
    this.cart.push(product);
    console.log('Proizvod dodat u korpu:', product);
  },
}

}
</script>