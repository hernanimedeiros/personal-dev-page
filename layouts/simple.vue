<template>
  <b-container fluid class="simple-black d-flex justify-content-center">
    <section class="text-center my-auto">
      <Nuxt />
    </section>
  </b-container>
</template>

<script>
export default {
  name: 'SimpleLayout'
}
</script>

<style scoped>
  a {
    color: green;
    text-decoration: none;
  }

  a:hover{
    color:greenyellow;
    text-decoration: none;
  }

  .simple-black {
    background: black;
    color: whitesmoke;
    height:100vh;
    width:100vw;
  }
</style>
