<template>
<div class="container">
    <h3>All Employees</h3>
    <div v-if="message" class="alert alert-success">{{this.message}}</div>
<div>
<button class="btn btn-success" v-on:click="addEmployee()">Add Employee</button>
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
            <th>Email</th>
            <th>Present Address</th>
            <th>Phone Number</th>
            <th>National ID</th>
            <th>Employee Type</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="employee in employees" v-bind:key="employee.id">
        <td>{{employee.id}}</td>
        <td>{{employee.name}}</td>
        <td>{{employee.email}}</td>
        <td>{{employee.presentAddress}}</td>
        <td>{{employee.phoneNumber}}</td>
        <td>{{employee.nationalIdNo}}</td>
        <td>{{employee.employeeType}}</td>
        </tr>
    </tbody>
</table>
</div>
</template>
<script>
import EmployeeDataService from '@/EmployeeDataService.js';
import SchoolDataService from "@/SchoolDataService.js";

export default{
name:"Employees",
data(){
    return{
        employees:[],
        message:"",
    };
},
methods:{
    refreshEmployees(){
        EmployeeDataService.retrieveAllEmployees().then((res)=>{

            this.employees=res.data;
        });
    },
    created(){
        this.refreshEmployees();
    }
}

}
</script>
<style></style>