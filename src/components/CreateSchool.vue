<template>

    <div>
    <h3>Create New School</h3>
    <div class="container">
      <form @submit.prevent="registerAnswer">
    
        <fieldset class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" v-model="firstName" />
        </fieldset>
        <fieldset class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" v-model="lastName" />
        </fieldset>
        <fieldset class="form-group">
          <label>Email Id</label>
          <input type="text" class="form-control" v-model="email" />
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>


</template>
  
<script>


export default {
    data() {
        return {
            firstName: null,
            lastName:null,
            email:null,
            inpValSubmitted: 'Not submitted yet'
        };
    },
    methods: {
        registerAnswer() {
            if (this.firstName) {
                this.inpValSubmitted = this.txtInp;
            }
        }
    }
}
</script>
  
<style scoped>
div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    
    display: inline-block;
    max-width: 250px;
}

button {
    margin: 10px 0;
    display: block;
}

#pAnswer {
    background-color: lightgreen;
    padding: 5px;
}
</style>     


