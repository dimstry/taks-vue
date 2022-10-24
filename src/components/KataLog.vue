<template>
  <div class="container">
    <table class="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Judul</th>
          <th scope="col">Pengarang</th>
          <th scope="col">Harga</th>
          <th scope="col">Stok</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in booksList" :key="book.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ book.judul }}</td>
          <td>{{ book.pengarang }}</td>
          <td>{{ book.harga }}</td>
          <td>{{ book.stok }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["booksList"],
};
</script>

<style scoped></style>
