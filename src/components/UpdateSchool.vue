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
            <label>Id</label>
            <input type="text" readonly class="form-control" v-model="Id" />
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
        errors: [],
      };
    },
computed:{
id(){
  return this.$route.params.id;
}
},
    methods: {

      loadSchoolDetails(){
        SchoolDataService.retrieveSchool(51).then((res) => {
        this.Id = res.data.id;
        this.Code = res.data.code;
        this.Name = res.data.name;
        this.SchoolAddress=res.data.schoolAddress;
        this.MediumOfTeaching=res.data.mediumOfTeaching;
      });
      },

      validateAndSubmit(e) {
        e.preventDefault();
    
         
            SchoolDataService.createSchool({
              Code: this.Code,
              Name: this.Name,
              SchoolAddress: this.SchoolAddress,
             MediumOfTeaching:this.MediumOfTeaching,
             Flag:this.Flag
            
            }).then(() => {
              this.$router.push("/School");
              alert("Joy Sree Rama");
            }, err => this.errors.push(err.response.data.errors));
      },
    },
    created() {
    this.loadSchoolDetails();
  },
  };
  </script>