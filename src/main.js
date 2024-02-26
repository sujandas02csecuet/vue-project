import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'

import Employee from './components/Employee.vue'
import School from './components/School.vue'
import Student from './components/Student.vue'
import CreateSchool from './components/CreateSchool.vue';
import CreateStudent from './components/CreateStudent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [



        { path: "/Employee", component: Employee },
        { path: '/School', component: School },
        { path: "/Student", component: Student },

       { path: "/CreateSchool", component: CreateSchool },
       {path:"/CreateStudent",component:CreateStudent}
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')
