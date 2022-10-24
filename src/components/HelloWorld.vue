<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <p>Learnig vue at camp404</p>
    <input type="text" placeholder="input your username..." v-model="namamu" />
    <p>{{ namamu }}</p>
    <button @click="greet(namamu)">say hi</button>
    <button @click="send(namamu)">send to manajemen buku</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      namamu: "Dimas",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    greet(namamu) {
      alert("Hello " + namamu);
    },
    send(namamu) {
      this.$emit("fromchild", namamu);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
