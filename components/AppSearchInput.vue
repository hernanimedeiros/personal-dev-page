<template>
  <div>
    <!-- Input to search -->
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      :placeholder="content.appSearch[language]"
    >
    <b-container>
      <ul v-if="articles.length">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </b-container>
  </div>
</template>
<script>
export default {
  // Name and components
  name: 'AppSearchInput',
  // Parameters received by parent
  props: {
    content: Object,
    language: String
  },
  data () {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<style scoped>

  a:hover{
    color:#beb4d1;
  }

  ul{
    list-style: none;
  }

</style>
