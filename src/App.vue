<template>
  <NavBar />
  <router-view
    :booksList="booksData"
    @store="storeData"
    @update="updateData"
    @delete="hapusBuku"
  />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      booksData: [
        {
          id: 1,
          judul: "Harry Potter and the Philosopher's Stone",
          pengarang: "J.K. Rowling",
          harga: 100000,
          stok: 10,
        },
        {
          id: 2,
          judul: "Harry Potter and the Chamber of Secrets",
          pengarang: "J.K. Rowling",
          harga: 90000,
          stok: 5,
        },
      ],
    };
  },
  methods: {
    storeData(bookbookCretaed) {
      console.log(bookbookCretaed);
      alert("Buku berhasil ditambahkan");
    },
    updateData(bookbookChaged, index) {
      console.log(bookbookChaged);
      console.log(index);
      alert("Buku berhasil diubah");
    },
    hapusBuku(book, index) {
      console.log(book);
      console.log(index);
      alert("Buku berhasil dihapus");
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
