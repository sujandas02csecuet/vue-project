<template>
  <div>
    <h3>Joy Sree Rama</h3>
    <div class="container">
      <form @submit.prevent="registerAnswer">
        <fieldset class="form-group">
          <label>Code</label>
          <input type="text" class="form-control" v-model="code" />
        </fieldset>
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="name" />
        </fieldset>
        
        <fieldset class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="address" />
        </fieldset>

        <fieldset class="form-group">
          <label>Medium of Teaching</label>
          <input type="text" class="form-control" v-model="teachingMedium" />
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
      lastName: null,
      email: null,
      inpValSubmitted: "Not submitted yet",
    };
  },
  methods: {
    registerAnswer() {
      if (this.firstName) {
        this.inpValSubmitted = this.txtInp;
      }
    },
  },
};
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
