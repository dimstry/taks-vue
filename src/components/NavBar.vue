<template>
  <nav class="navbar navbar-expand bg dark">
    <div class="container">
      <ul class="nav">
        <!-- img -->
        <li class="nav-item">
          <img src="../assets/logo.png" alt="logo" width="50" />
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Katalog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/manajemen-buku" class="nav-link">
            Manajemen buku
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
