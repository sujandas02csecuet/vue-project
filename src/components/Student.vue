<template>

<div class="container">
    <h3>All Students</h3>
    <div v-if="message" class="alert alert-success">{{this.message}}</div>

<div>
    <button class="btn btn-success" v-on:click="addStudent()">Add Student</button>

<template>
    <router-view></router-view>
</template>
</div>

<br/>

<table class="table table-bordered">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Present Address</th>
            <th>Roll Number</th>
            <th>Contact No</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="student in students" v-bind:key="student.id">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.presentAddress}}</td>
        <td>{{student.rollNumber}}</td>
        <td>{{student.contactNo}}</td>
        <td><button class="btn btn-warning v-on:click=UpdateStudent(student.Id)">Update</button></td>
        <td><button class="btn btn-danger  v-on:click=DeleteStudentByRoll(student.rollNumber)">Delete</button></td>
        </tr>
    </tbody>
</table>
</div>
</template>
<script>

import StudentDataService from '../StudentDataService';

export default{

    name:"Students",
    data(){
     return{
        students:[],
        message:"",
     };
    },
    methods:{
        refreshStudents(){
            StudentDataService.retrieveAllStudents().then((res)=>{

                this.students=res.data;
            });
        },
        DeleteStudentByRoll(rollNumber){
            StudentDataService.deleteStudentByRoll(rollNumber).then(()=>{

                this.message="Joy Sree Rama, Student Deleted";
                this.refreshStudents();
            });
        }
    },
    created(){
        this.refreshStudents();
    },

};
</script>
<style></style>