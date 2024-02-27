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
            <label>Id</label>
            <input type="text" readonly  class="form-control" v-model="Id"  />
          </fieldset>
         
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
            <label>PhoneNumber</label>
            <input type="text" class="form-control" v-model="PhoneNumber" />
          </fieldset>


          <fieldset class="form-group">
            <label>National Id No</label>
            <input type="text" class="form-control" v-model="NationalIdNo" />
          </fieldset>


          <fieldset class="form-group">
            <label>Employee Type</label>
            <input type="text" class="form-control" v-model="EmployeeType" />
          </fieldset>

<br/>
          <button class="btn btn-success" type="submit">Update</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import EmployeeDataService from "../EmployeeDataService";
  
  export default {
    name: "UpdateEmployee",
    data() {
      return {
        Id: "",
        Name: "",
        Email: "",
        PresentAddress:"",
        PhoneNumber:"",
        NationalIdNo:"",
        EmployeeType:"",
        errors: [],
      };
    },
    computed:{
       id(){
            return this.$route.params.id;
           },
           },
    methods: {

        loadEmployeeDetails(){
        EmployeeDataService.retrieveEmployee(this.id).then((res) => {
      
        this.Id = res.data[0].id;
        this.Name = res.data[0].name;

        this.Email=res.data[0].email;

        this.PresentAddress=res.data[0].presentAddress;

        this.PhoneNumber=res.data[0].phoneNumber;
        this.NationalIdNo=res.data[0].nationalIdNo;
        this.EmployeeType=res.data[0].employeeType;

      });
      },
    },
    created() {
    this.loadEmployeeDetails();
  },
  };
  </script>