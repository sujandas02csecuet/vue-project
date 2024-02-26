<template>
  <div>
    <h3>Joy Sree Rama</h3>
    <div class="container">
      <form @submit="validateAndSubmit">
        <fieldset class="form-group">
          <label>Code</label>
          <input type="text" class="form-control" v-model="school.Code" />
        </fieldset>
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="school.Name" />
        </fieldset>
        
        <fieldset class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="school.SchoolAddress" />
        </fieldset>

        <fieldset class="form-group">
          <label>Medium of Teaching</label>
          <input type="text" class="form-control" v-model="school.MediumOfTeaching" />
        </fieldset>


        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import SchoolDataService from '../SchoolDataService'

export default{
  data(){
    return{
      school:{
        Id:"",
        Flag:"",
        Code:"",
        Name:"",
        SchoolAddress:"",
        MediumOfTeaching:"",
      },
      errors: [],
    }
  },

  methods:{
    async validateAndSubmit(e){
      e.preventDefault();
      this.errors = [];
      const postData = {
          Id: this.school.Id,
          Flag: this.school.Flag,
          Code:this.school.Code,
          Name:this.school.Name,
          SchoolAddress:this.school.SchoolAddress,
          MediumOfTeaching:this.school.MediumOfTeaching
          
        };

      try{


       const formData=new FormData();
       formData.append("Code",this.Code);
       
       axios.post("https://localhost:44384/api/School/AddSchoolNew/",formData).then((response)=>{
        console.log(response.data);
       })

     
      }
      catch(error){
        console.log('Error making POST request:', error.message);
      }
    }
  }
}
  

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
