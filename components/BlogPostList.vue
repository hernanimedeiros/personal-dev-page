<template>
  <b-container fluid class="blog-post-list p-0">
    <!-- Post list -->
    <b-card-group
      deck
      class="py-5"
    >
      <!-- Post array -->
      <b-col
        v-for="article of articles"
        :key="article.slug"
        lg="4"
        fluid
        class="p-1"
      >
        <!-- Post -->
        <b-card header-bg-variant="light">
          <!-- Image -->
          <template #header>
            <b-img-lazy
              v-bind="mainProps"
              :src="require(`~/assets/${article.img}`)"
              :alt="article.alt"
            />
          </template>
          <!-- Post info -->
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
        </b-card>
      </b-col>
    </b-card-group>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'BlogPostList',
  // Properties received from parent
  props: {
    articles: Object,
    content: Object,
    language: String
  },
  data () {
    return {
      // Load content
      mainProps: {
        center: true,
        fluidGrow: true,
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
