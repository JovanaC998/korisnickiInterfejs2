<template>
    <input
      :type="type"
      :id="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      class="form-control"
      :class="{'is-invalid': errors && errors.length}"
      :placeholder="placeholder"
    />
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      errors: {
        type: Array
      },
      placeholder: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  