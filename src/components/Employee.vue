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
</table>

</div>


</template>
<script></script>
<style></style>