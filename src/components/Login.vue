<template>
<div> <div class="border-start border-5 border-primary ps-5 mb-5 mt-5">
  <h1 class="display-5 text-uppercase mb-0">Login</h1>
</div>
<Form class="row d-flex justify-content-center" @submit="onSubmit">
    <div class="form-group w-75 p-3">
      <label class="form-label" for="email">Email</label>
      <CustomInput
        name="email"
        :value="formdata.email"
        @update:value="val => formdata.email = val"
        :errors="validateEmail(formdata.email)"
        placeholder="Enter your email"
      />
    </div>

    <div class="form-group w-75 p-3">
      <label class="form-label" for="name">Password</label>
      <CustomInput
        name="pass"
        :value="formdata.password"
        @update:value="val => formdata.password = val"
        :errors="validateName(formdata.password)"
        type="password"
        placeholder="Enter your password"
      />
      <ErrorMessage name="pass" as="div" v-slot="{ message }">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>

    <div class="text-center">
      <button class="btn btn-primary text-center">
        <span v-if="type">Sign in</span>
        <span v-else>Sign up</span>
      </button>
    </div>

    <div class="change_type" @click="type = !type">
      <span v-if="type">I want to sign up</span>
      <span v-else>I want to sign in</span>
    </div>
  </Form>

</div>

</template>

<script>
  import { Form, ErrorMessage } from 'vee-validate'
  import CustomInput from './CustomInput.vue'; 

  export default {
      name: "LoginComponent",
      data () {
            return {
                type:true,
                formdata:{
                    email: '',
                    password: ''
                }
            }
        },
      components:{
        CustomInput,
          Form,
          ErrorMessage
      },
      methods:{
          isRequired(value){
              if(!value){
                  return 'The field is required'
              }
              return true;
          },
          validateName(value){
              if(value && value.trim()){
                  return true
              }
              return  'The password is required'
          },
          validateEmail(value){
              if(!value){
                  return 'This email is required';
              }
              if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                  return 'Bad email'
              }
              return true;
          },
          onSubmit () {
        event.preventDefault(); 
      
                if(this.type){
                        this.$store.dispatch('user/signin',this.formdata)
                }else{
                    this.$store.dispatch('user/signup',this.formdata)

                }
                console.log(this.formdata)
            },
        }
        
          
    }



</script>
<style>
.change_type{
    margin-left : 26%;
}
</style>