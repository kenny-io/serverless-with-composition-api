<template>
  <div class="hello">
    <h1>Register to attend!</h1>
    <p>
      One time registeration for the upcoming Jamstack conference in space! <br> <br>
      Todo: Show registeration form below
    </p>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'Registration',

  setup(){

    const formData = reactive({
      name: "",
      email: "",
      track: ""
    })

    const plan = ref(2)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
