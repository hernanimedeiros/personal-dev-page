<template>
  <b-container fluid class="blog-header px-0 bg-black">
    <!-- Navbar -->
    <DinamicNavBlog
      :content="content"
      :language="language"
    />
    <!-- Header and search button -->
    <b-container fluid class="bg-blog mx-auto py-3">
      <p class="big-title my-auto text-white pt-5">
        {{ content.blogTitle[language] }}
      </p>
      <!-- Collapse  trigger -->
      <b-icon
        v-b-toggle.collapse-2
        icon="search"
        variant="light"
      />
    </b-container>
    <!-- Element to collapse -->
    <b-collapse id="collapse-2">
      <BlogSearch
        :language="language"
        :content="content"
      />
    </b-collapse>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import BlogSearch from '@/components/BlogSearch.vue'
import DinamicNavBlog from '@/components/DinamicNavBlog.vue'
export default {
// Name and components
  name: 'BlogHeader',
  components: {
    BlogSearch,
    DinamicNavBlog
  },
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

.bg-blog {
  /* The image used */
  background-image: url("../assets/codigo-minificado.jpg");
  background-color: #272829;
  /* Height */
  min-height: 33vh;
  /* Create the parallax scrolling effect */
  background-position: center;
  background-size: cover;
}

</style>
