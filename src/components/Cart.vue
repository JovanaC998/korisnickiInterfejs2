<template>
    <div class="container">
      <div class="border-start border-5 border-primary ps-5 mb-5">
        <h1 class="display-5 text-uppercase mb-0">Cart</h1>
      </div>
      <form @submit.prevent="submitCart">
        <table class="timetable_sub" id="cart" style="font-variant:normal;">
          <thead>
            <tr>
              <td colspan="3">Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr v-if="products.length === 0">
              <td colspan="5" style="text-align:center;">You have no products added in your Shopping Cart</td>
            </tr>
            <tr v-for="product in products" :key="product.id">
              <td class="img">
                <a :href="`index.php?page=details&id=${product.id}`">
                  <img :src="product.slika" width="50" height="50" :alt="product.naziv">
                </a>
              </td>
              <td>
                <a :href="`index.php?page=details&id=${product.id}`">{{ product.naziv }}</a>
                <br>
              </td>
              <td>
                <a :href="`index.php?page=cart&remove=${product.id}`" class="remove">Remove</a>
              </td>
              <td class="price">&dollar;{{ product.cena }}</td>
              <td class="quantity">
                <p :name="`quantity-${product.id}`">{{ productsInCart[product.id] }}</p>
              </td>
              <td class="price">&dollar;{{ product.cena * productsInCart[product.id] }}</td>
            </tr>
          </tbody>
        </table>
        <div class="timetable_sub" colspan="5" style="text-align:right;">
          <span class="text">Subtotal</span>
          <span class="price">&dollar;{{ subtotal }}</span>
        </div>
        <div class="buttons">
          <button type="button" @click="clearCart" class="btn m-1" style="background-color: #7AB730;">
            <a style="color:white;" href="index.php?page=cart&clearCart=1" class="remove">Clear Cart</a>
          </button>
          <input type="button" id="order" value="Order" name="order" class="btn" style="background-color: #7AB730; color:white;">
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CartComponent',
    data() {
      return {
        products: [], // Your products array
        productsInCart: {}, // Your products in cart object
        subtotal: 0 // Your subtotal value
      };
    },
    methods: {
      clearCart() {
        // Logic to clear the cart
      },
      submitCart() {
        // Logic to submit the cart
      }
    }
  };
  </script>
  