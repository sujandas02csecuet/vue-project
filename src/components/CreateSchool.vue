<template>
  <div>
    <h3>Joy Sree Rama</h3>
    <div class="container">
      <form @submit.prevent="saveSchool">
        <fieldset class="form-group">
          <label>Code</label>
          <input type="text" class="form-control" v-model="school.code" />
        </fieldset>
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="school.name" />
        </fieldset>
        
        <fieldset class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="school.address" />
        </fieldset>

        <fieldset class="form-group">
          <label>Medium of Teaching</label>
          <input type="text" class="form-control" v-model="school.teachingMedium" />
        </fieldset>


        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import axios from  'axios';


export default {
  
  data() {
    return {
     school:{
      code:'',
      name:'',
      address:'',
      teachingMedium:''
     },
    };
  },
  methods: {
    saveSchool() {
      axios.post(`https://localhost:44384/api/School/AddSchool/`,this.school)
      .then((response)=>{
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin-top: 20px;

  display: inline-block;
  max-width: 250px;
}

button {
  margin: 10px 0;
  display: block;
}

#pAnswer {
  background-color: lightgreen;
  padding: 5px;
}
</style>
