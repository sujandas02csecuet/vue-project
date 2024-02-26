<template>
    <div>
      <h3>Employee</h3>
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
            <label>Email</label>
            <input type="text" class="form-control" v-model="Email" />
          </fieldset>

          <fieldset class="form-group">
            <label>Present Address</label>
            <input type="text" class="form-control" v-model="PresentAddress" />
          </fieldset>

          <fieldset class="form-group">
            <label>Phone Number</label>
            <input type="text" class="form-control" v-model="PhoneNumber" />
          </fieldset>

          <fieldset class="form-group">
            <label>NationalIdNo</label>
            <input type="text" class="form-control" v-model="NationalIdNo" />
          </fieldset>

          <fieldset class="form-group">
            <label>EmployeeType</label>
            <input type="text" class="form-control" v-model="EmployeeType" />
          </fieldset>

          <br/>
          <button class="btn btn-success" type="submit">Save</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import EmployeeDataService from "../EmployeeDataService";
  
  export default {
   
    data() {
      return {
        Name: "",
        Email: "",
        PresentAddress: "",
        PhoneNumber:"",
        NationalIdNo:"",
        EmployeeType:"",
        errors: [],
      };
    },

    methods: {

      validateAndSubmit(e) {
        e.preventDefault();
    
         
            EmployeeDataService.createEmployee({
              Name: this.Name,
              Email: this.Email,
              PresentAddress: this.PresentAddress,
              PhoneNumber:this.PhoneNumber,
              NationalIdNo:this.NationalIdNo,
              EmployeeType:this.EmployeeType
            
            }).then(() => {
              this.$router.push("/Employee");
              alert("Joy Sree Rama");
            }, err => this.errors.push(err.response.data.errors));
      },
    },
  
  };
  </script>