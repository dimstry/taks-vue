<template>
  <div class="container mt-3">
    <h1 class="text-center">Manajemen Buku</h1>
    <div id="formTambah" v-if="formMode == 'create'">
      <h3 class="text-center">Form Tambah Buku</h3>
      <form class="form row" @submit.prevent="submitAdd">
        <div class="col-3">
          <input
            type="text"
            class="form-control mx-2"
            placeholder="Judul"
            v-model="newBook.judul"
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control mx-2"
            placeholder="Pengarang"
            v-model="newBook.pengarang"
          />
        </div>
        <div class="col-3">
          <input
            type="number"
            class="form-control mx-2"
            placeholder="Harga"
            v-model="newBook.harga"
          />
        </div>
        <div class="col-2">
          <input
            type="number"
            class="form-control mx-2"
            placeholder="Stok"
            v-model="newBook.stok"
          />
        </div>
        <div class="col-1">
          <button
            type="submit"
            class="btn btn-primary mx-2"
            @click="formMode = 'create'"
          >
            Tambah
          </button>
        </div>
      </form>
    </div>
    <div id="formUbah" v-if="formMode == 'edit'">
      <h3 class="text-center">Form Edit</h3>
      <form class="form row" @submit.prevent="submitChange">
        <div class="col-3">
          <input
            type="text"
            class="form-control mx-2"
            placeholder="Judul"
            v-model="updateBook.judul"
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control mx-2"
            placeholder="Pengarang"
            v-model="updateBook.pengarang"
          />
        </div>
        <div class="col-3">
          <input
            type="number"
            class="form-control mx-2"
            placeholder="Harga"
            v-model="updateBook.harga"
          />
          />
        </div>
        <div class="col-2">
          <input
            type="number"
            class="form-control mx-2"
            placeholder="Stok"
            v-model="updateBook.stok"
          />
          />
        </div>
        <div class="col-1">
          <button type="submit" class="btn btn-warning mx-2">Ubah</button>
        </div>
      </form>
    </div>
    <div id="daftarBuku">
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Judul</th>
            <th scope="col">Pengarang</th>
            <th scope="col">Harga</th>
            <th scope="col">Stok</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in booksList" :key="book.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ book.judul }}</td>
            <td>{{ book.pengarang }}</td>
            <td>{{ book.harga }}</td>
            <td>{{ book.stok }}</td>
            <td class="d-flex gap-2 justify-content-center">
              <button class="btn btn-primary" @click="showEdit(book, index)">
                Ubah
              </button>
              <button class="btn btn-danger" @click="hapusBuku(book, index)">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["booksList"],
  data() {
    return {
      formMode: "",
      bookIndex: "",
      updateBook: {
        _id: "",
        judul: "",
        pengarang: "",
        harga: "",
        stok: "",
      },
      newBook: {
        judul: "",
        pengarang: "",
        harga: "",
        stok: "",
      },
    };
  },
  methods: {
    submitAdd() {
      const bookCretaed = {
        judul: this.newBook.judul,
        pengarang: this.newBook.pengarang,
        harga: this.newBook.harga,
        stok: this.newBook.stok,
      };
      this.$emit("store", bookCretaed);
      this.newBook.judul = "";
      this.newBook.pengarang = "";
      this.newBook.harga = "";
      this.newBook.stok = "";
    },
    showEdit(book, index) {
      this.formMode = "edit";
      this.bookIndex = index;
      this.updateBook._id = book._id;
      this.updateBook.judul = book.judul;
      this.updateBook.pengarang = book.pengarang;
      this.updateBook.harga = book.harga;
      this.updateBook.stok = book.stok;
    },
    submitChange() {
      const bookChaged = this.updateBook;
      this.$emit("update", bookChaged, this.bookIndex);
      this.formMode = "";
    },
    hapusBuku(book, index) {
      this.$emit("delete", book, index);
    },
  },
};
</script>

<style></style>
