<template>
  <div>
    <h1 class="text-center">Hello word From Manajemen Buku</h1>
    <p class="text-center">Hello, {{ fromParent }}</p>
  </div>
</template>

<script>
export default {
  props: ["fromParent"],
};
</script>

<style></style>
