<template>
  <div v-if="!isUserRegistered">
    <h1>Let's JAM in Space!</h1>
    <p>
      Register for the upcoming Jamstack conference in space! <br>
        <strong>Free </strong>for one and <strong>$5 </strong> for 2+ tickets
    </p>

    <form class="form">
      <label id="id" for="name" > Name </label>
      <input class="fields" v-model="name" placeholder="Enter your name" />
     
      <label for="email" > Email </label>
      <input class="fields" v-model="email" placeholder="Enter your email"  />
      
 
      <label for="track"> Select track </label>
      <select class="fields" id="track" v-model="track">
        <option disabled value="">Please select track</option>
        <option v-for="option in options" :key="option" :value="option"> {{ option }} </option>
      </select>

      <div v-if="track == 'Mobile'">
        <label for="mobile"> Select mobile track </label>
      <select  class="fields" id="track" v-model="mobileTrack">
        <option disabled value="">Please select mobile track</option>
        <option v-for="mobileTrack in mobileTrackOptions" :key="mobileTrack" :value="mobileTrack"> {{ mobileTrack }} </option>
      </select>
      </div>

      <label for="tickets">Get tickets </label>
      <select class="fields" id="tickets" v-model="tickets">
        <option disabled value=0>How many tickets do you want?</option>
        <option v-for="ticket in ticketOptions" :key="ticket" :value="ticket"> {{ ticket }} </option>
      </select>

      <button @click="registerUser" class="btn" type="submit">Register</button>
    </form>
  </div>
  <div v-else>
    <h2>
      Thanks for registering, check your email for further instructions
    </h2>
    <button class="btn" type="submit">Click here to login</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue'
export default {

  setup(){
    // reactive
    const formData = reactive({
      name: "",
      email: "",
      track: "",
      mobileTrack: "",
      tickets: 0,
      price: 0
      
    })

    // ref
    const options =  ref(["Web", "Mobile", "AI"])
    const  mobileTrackOptions = ref(["iOS", "Android", "Hybrid"])
    const ticketOptions = ref([1,2,3,4,5])
    const isUserRegistered = ref(false)

    // method
    const registerUser = e => {
      e.preventDefault()
      fetch("/.netlify/functions/register", {
        method:"POST",
        body:JSON.stringify(formData)
      })
      .then((response) =>response.json())
      .then(body =>{
        console.log(body);
        isUserRegistered.value = true
      })

    }

  // Silly example to demonstrate how watchers work with reactive objects
      // watch(() => formData.tracks, (cv, ov) =>{
      //   if(cv === "Mobile") {
      //     formData.isMobile = true
      //   }
      // })

    watch(() =>formData.tickets, (currentValue) =>{
      if(currentValue > 1) {
        console.log(currentValue);
        formData.price = 5
      }
    })

    return{
      ...toRefs(formData),
      options,
      mobileTrackOptions,
      ticketOptions,
      isUserRegistered,
      registerUser
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
  display: inline-block;
  background-color: #f7f7f7 ;
  padding: 1rem 3rem 3rem ;
  margin-top: 1rem;
  text-align: left;
}

.fields{
  padding: .5rem;
  display: block;
  width: 20vw;
  margin: .5rem;
  border: 1px solid #41b883;
  font-family: 'Source Code Pro', monospace;
}
.btn{
  background-color: rgb(57, 175, 63) ;
  color: #f7f7f7;
   font-family: 'Source Code Pro', monospace;
  padding: .5rem;
  width: 20vw;
  margin: .5rem;
  border: 1px solid #41b883;
  border-radius: 1rem;
}
label{
  margin: .5rem;
}
/* .options{
  padding: 2rem;
  height: 3rem;
} */
.fields::-webkit-input-placeholder {
font-family: 'Source Code Pro', monospace;
}
p{
  font-family: 'Source Code Pro', monospace;
}
</style>
