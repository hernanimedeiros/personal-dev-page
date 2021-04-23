<template>
  <b-container fluid class="lab">
    <LabList />
    <Logo />
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import ContentJson from '@/components/content.json'
import MetaJson from '@/components/meta.json'
import LabList from '@/components/lab/LabList.vue'
import Logo from '@/components/lab/Logo.vue'
// Export
export default {
  // Name and components
  name: 'Lab',
  components: {
    LabList,
    Logo
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
      title: this.meta.metaLabTitle[this.language],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.metaLabDescription[this.language]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.metaLabKeyword[this.language]
        }
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/34ea097e0f.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
}
</script>
