<template>
  <b-container fluid class="blog-post-list p-0">
    <!-- Post picker -->
    <b-dropdown
      id="dropdown-offset"
      offset="25"
      :text="categorieSelection"
      variant="dark"
      class="pt-3"
    >
      <b-dropdown-item
        v-for="categorie in categories"
        :key="categorie.id"
        :value="categorie.label"
        @click="changeCategorie(categorie.label)"
      >
        {{ categorie.label }}
      </b-dropdown-item>
    </b-dropdown>
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
        no-body
        class="pt-3 overflow-hidden"
      >
        <!-- Post -->
        <b-card
          v-if="article.categorie===categorieSelection"
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
// Import
// @ is an alias to /src
import Categories from '@/components/categories.json'
// Export
export default {
  // Name and components
  name: 'BlogPostListCategorie',
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
        fluid: true,
        blank: true,
        blankColor: '#bbb'
      },
      categories: Categories.labels,
      categorieSelection: 'Personal'
    }
  },
  // Methods
  methods: {
    // Date for humans
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    // Change categorie
    changeCategorie (option) {
      this.categorieSelection = option
    }
  }
}
</script>

<style scoped>

  .card-body{ padding:0px; }

</style>
