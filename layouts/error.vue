<template>
  <b-container fluid class="error">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <NuxtLink to="/">
      Return to Home Page
    </NuxtLink>
  </b-container>
</template>

<script>
export default {
  // Name and components
  name: 'Error',
  props: ['error'],
  layout (context) {
    return 'simple'
  }
}
</script>
