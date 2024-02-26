<template>
  <div class="container">
    <h3>All Schools</h3>


    <div v-if="message" class="alert alert-success">{{ this.message }}</div>


    <div>

      <button class="btn btn-success" v-on:click="addSchool()">Add</button>

      <template>
        <router-view></router-view>
      </template>



    </div>



    <br />
    <table class="table  table-bordered">
      <thead>
        <tr>

          <th>ID</th>
          <th>Name</th>
          <th>Code</th>
          <th>Address</th>
          <th>Teaching Medium</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="school in schools" v-bind:key="school.id">

          <td>{{ school.id }}</td>
          <td>{{ school.name }}</td>
          <td>{{ school.code }}</td>

          <td>{{ school.schoolAddress }}</td>
          <td>{{ school.mediumOfTeaching }}</td>

          <td>
            <button class="btn btn-warning" v-on:click="updateUser(school.id)">
              Update
            </button>
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteSchoolByCode(school.code)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>
<script>

import SchoolDataService from "@/SchoolDataService.js";

export default {
  name: "Users",
  data() {
    return {
      schools: [],
      message: "",
    };
  },
  methods: {

    
    refreshSchools() {
      SchoolDataService.retrieveAllSchools().then((res) => {
        this.schools = res.data;
        
      });
    },
    addSchool() {
      this.$router.push("/CreateSchool");
    },
    updateUser(id) {
      this.$router.push(`/user/${id}`);
    },
    ShowAlert() {

      this.alert("Hello Vue Simple Alert.");
    },
    deleteSchoolByCode(code) {
      SchoolDataService.deleteSchoolByCode(code).then(() => {
        this.message = "Joy Sree Rama";
        this.refreshSchools();
      });
    },
  },
  created() {
    this.refreshSchools();
  },
};


</script>
<style scoped></style> 