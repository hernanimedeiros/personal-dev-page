<template>
  <b-container fluid class="blog-post-list-highlighted p-0">
    <!-- Post list -->
    <b-card-group
      deck
      class="py-5"
    >
      <!-- Post Array -->
      <b-col
        v-for="article of articles"
        :key="article.slug"
        cols="12"
        fluid
        class="pt-3 overflow-hidden"
      >
        <!-- Post -->
        <b-card
          v-if="article.level==='Highlighted'"
          :key="article.slug"
          header-bg-variant="light"
        >
          <!-- Post layout -->
          <b-row no-gutters>
            <!-- Image on the left -->
            <b-col lg="4">
              <b-img-lazy
                v-bind="mainProps"
                :src="require(`~/assets/${article.img}`)"
                :alt="article.alt"
              />
            </b-col>
            <!-- Text on the right -->
            <b-col lg="8">
              <b-card-body class="pt-5">
                <b-card-text class="p-2">
                  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <h2 class="h5">
                      {{ article.title }}
                    </h2>
                  </NuxtLink>
                  <p>
                    {{ article.description }}
                  </p>
                  <small># {{ article.categorie }}</small>
                </b-card-text>
                <b-card-text class="small text-muted">
                  {{ content.blogLastUpdate[language] }}
                  {{ formatDate(article.updatedAt) }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-card-group>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'BlogPostListHighlighted',
  // Properties received from parent
  props: {
    articles: Array,
    content: Object,
    language: String
  },
  data () {
    return {
      // Load content
      mainProps: {
        center: true,
        fluid: true,
        blank: true,
        blankColor: '#bbb'
      }
    }
  },
  // Methods
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>

  .card-body { padding:0px; }

</style>
