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
            <label>Id</label>
            <input type="text" readonly  class="form-control" v-model="Id"  />
          </fieldset>
         
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
            <label>Contact No</label>
            <input type="text" class="form-control" v-model="ContactNo" />
          </fieldset>

<br/>
          <button class="btn btn-success" type="submit">Update</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import StudentDataService from "../StudentDataService";
  
  export default {
    name: "UpdateStudent",
    data() {
      return {
        Id: "",
        Name: "",
        PresentAddress: "",
        RollNumber:"",
        ContactNo:"",
       
        errors: [],
      };
    },
    computed:{
       id(){
            return this.$route.params.id;
           },
           },
    methods: {

      loadStudentDetails(){
        StudentDataService.retrieveStudent(this.id).then((res) => {
      
        this.Id=res.data[0].id;
        this.Name = res.data[0].name;
        this.PresentAddress=res.data[0].presentAddress;
        this.RollNumber=res.data[0].rollNumber;
        this.ContactNo=res.data[0].contactNo;
      

      });
      },
    },
    created() {
    this.loadStudentDetails();
  },
  };
  </script>