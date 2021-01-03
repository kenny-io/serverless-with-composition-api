<template>
  <div>
    <h1>Let's JAM in Space!</h1>
    <p>
      Register for the upcoming Jamstack conference in space! <br>
        <strong>Free </strong>for one and <strong>$5 </strong> for 2+ tickets
    </p>
    <p>TODO: Edit src/components/Register to show registration form</p>
    <!-- Set up registration form here -->
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup(){
    const formData = reactive({
      // update to match your form fields
      name: "",
      email: "",
      track: ""
    })
    return{
      formData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  font-family: 'Source Code Pro', monospace;
}
</style>
