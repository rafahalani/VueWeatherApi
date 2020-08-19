<template>
  <div>
    <b-container class="mt-5" >
      <b-card border-variant="info" bg-variant="light" > 
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group label=" Name:">
        <b-form-input
          v-model="form.name"
          required
          placeholder="Enter city name"
        ></b-form-input>
      </b-form-group>
     


    <b-form-group>
      
      <b-button class="mr-2"  size="lg" type="submit" variant="info"> Submit</b-button>
      
      <b-button  size="lg" type="reset" variant="danger"> Reset </b-button>
    </b-form-group>
    
    </b-form>
  </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        name: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
 /*      var view = new Zaza.View("007583f22bab17ff8231fa3db23322b3")
      var zazaevent = JSON.stringify(this.form)
      view.upload(zazaevent,"barapp.json")


.then(response =>{
  console.log(response)
})

.catch(error =>{
  console.log(error)
}) */
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";


      // Trick to reset/clear native browser form validation state
     
    },
  },
};
</script>

<style></style>
