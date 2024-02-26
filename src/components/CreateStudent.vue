<template>
    <div>
      <h3>Student</h3>
      <div class="container">
        <form @submit="validateAndSubmit">
          <div v-if="errors.length">
            <div
              class="alert alert-danger"
              v-bind:key="index"
              v-for="(error, index) in errors"
            >
              {{ error }}
            </div>
          </div>
          <fieldset class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="Name" />
          </fieldset>
          <fieldset class="form-group">
            <label>Present Address</label>
            <input type="text" class="form-control" v-model="PresentAddress" />
          </fieldset>

          <fieldset class="form-group">
            <label>Roll Number</label>
            <input type="text" class="form-control" v-model="RollNumber" />
          </fieldset>

          <fieldset class="form-group">
            <label>Contact</label>
            <input type="text" class="form-control" v-model="ContactNo" />
          </fieldset>

<br/>
          <button class="btn btn-success" type="submit">Save</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import StudentDataService from "../StudentDataService";
  
  export default {
    name: "Student",
    data() {
      return {
        Name: "",
        PresentAddress: "",
        RollNumber: "",
        ContactNo:"",
    
        errors: [],
      };
    },

    methods: {

      validateAndSubmit(e) {
        e.preventDefault();
    
         
            StudentDataService.createStudent({
              Name: this.Name,
              PresentAddress: this.PresentAddress,
              RollNumber: this.RollNumber,
              ContactNo:this.ContactNo
           
            
            }).then(() => {
              this.$router.push("/Student");
              alert("Joy Sree Rama");
            }, err => this.errors.push(err.response.data.errors));
      },
    },
  
  };
  </script>