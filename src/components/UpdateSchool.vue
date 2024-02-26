<template>
    <div>
      <h3>School</h3>
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
            <label>Code</label>
            <input type="text" readonly  class="form-control" v-model="Id"  />
          </fieldset>
         
          <fieldset class="form-group">
            <label>Code</label>
            <input type="text" class="form-control" v-model="Code" />
          </fieldset>
          <fieldset class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="Name" />
          </fieldset>

          <fieldset class="form-group">
            <label>School Address</label>
            <input type="text" class="form-control" v-model="SchoolAddress" />
          </fieldset>

          <fieldset class="form-group">
            <label>Medium Of Teaching</label>
            <input type="text" class="form-control" v-model="MediumOfTeaching" />
          </fieldset>

<br/>
          <button class="btn btn-success" type="submit">Save</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import SchoolDataService from "../SchoolDataService";
  
  export default {
    name: "UpdateSchool",
    data() {
      return {
        Code: "",
        Name: "",
        SchoolAddress: "",
        MediumOfTeaching:"",
        Flag:"",
        Id:"",
        errors: [],
      };
    },
    computed:{
       id(){
            return this.$route.params.id;
           },
           },
    methods: {

      loadSchoolDetails(){
        SchoolDataService.retrieveSchool(this.id).then((res) => {
      
        this.Code = res.data[0].code;
        this.Name = res.data[0].name;
        this.SchoolAddress=res.data[0].schoolAddress;
        this.MediumOfTeaching=res.data[0].mediumOfTeaching;
        this.Id=res.data[0].id;

      });
      },
    },
    created() {
    this.loadSchoolDetails();
  },
  };
  </script>