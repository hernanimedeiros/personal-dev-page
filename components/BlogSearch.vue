<template>
  <b-container fluid class="bg-search py-5 w-100 shadow-0">
    <b-card class="shadow text-white bg-overlay content-layout my-3 mx-auto">
      <b-card-body>
        <b-card-text class="h5">
          <b-icon icon="emoji-sunglasses" variant="white" class="icon-inter" />
          {{ content.searchPost[language] }}
        </b-card-text>
      </b-card-body>
      <b-card-text>
        <AppSearchInput
          :language="language"
          :content="content"
        />
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  // Name and components
  name: 'BlogSearch',
  // Parameters received by parent
  props: {
    content: Object,
    language: String
  }
}
</script>

<style scoped >

.bg-overlay {
  background: linear-gradient(45deg, rgba(2, 0, 36, 0.712) 0%, rgba(2, 0, 36, 0.78) 0%);
}

.bg-search {
  /* The image used */
  background-image: url("../assets/people-coffee-computer.jpg");
  background-color: #272829;
  /* Height */
  min-height: 45vh;
  /* Create the parallax scrolling effect */
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
}

</style>
