<template>
  <b-container fluid class="projects">
    <DinamicNavMobile
      :content="content"
      :language="language"
      :preferences="preferences"
      class="nav-mobile"
    />
    <b-row>
      <!-- Navbar -->
      <b-col
        lg="1"
        class="p-0 mx-0 sidebar"
      >
        <DinamicNavDesktop
          :content="content"
          :language="language"
          :preferences="preferences"
          class="p-0 mx-auto sidebar-inner"
        />
      </b-col>
      <!-- Content -->
      <b-col
        lg="11"
        class="p-0 main-section"
      >
        <ProjectsList
          :language="language"
          :content="content"
        />
        <!-- Footer -->
        <DinamicFooter
          :content="content"
          :language="language"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import ContentJson from '@/components/content.json'
import MetaJson from '@/components/meta.json'
import ProjectsList from '@/components/ProjectsList.vue'
import DinamicNavDesktop from '@/components/DinamicNavDesktop.vue'
import DinamicFooter from '@/components/DinamicFooter.vue'
// Export
export default {
  // Name and components
  name: 'Projects',
  components: {
    DinamicNavDesktop,
    DinamicFooter,
    ProjectsList
  },
  data () {
    return {
      // Load content
      content: ContentJson,
      meta: MetaJson,
      // Language based on path
      language: 'en'
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language
      },
      title: this.meta.metaProjectTitle[this.language],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.metaProjectDescription[this.language]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.metaProjectKeyword[this.language]
        }
      ]
    }
  }
}
</script>
