<template>
  <b-navbar
    class="dinamic-nav-mobile bg-black fixed-bottom"
  >
    <b-nav-item class="nav-link nav-mobile-40">
      <LanguageSet
        v-once
        :content="content"
        :language="language"
      />
    </b-nav-item>
    <!-- Home -->
    <b-nav-item
      :to="{ path: navigationLink(language, content.navigationIndex[language]) }"
      replace
      class="nav-link nav-mobile-20"
    >
      <b-icon icon="house-fill" />
    </b-nav-item>
    <!-- Pojects -->
    <b-nav-item
      :to="{ path: navigationLink(language, content.navigationProject[language]) }"
      replace
      class="nav-link nav-mobile-20"
    >
      <b-icon icon="terminal" />
    </b-nav-item>
    <!-- Blog -->
    <b-nav-item
      :to="{ path: '/blog' }"
      replace
      class="nav-link nav-mobile-20"
    >
      <b-icon icon="journal-text" />
    </b-nav-item>
  </b-navbar>
</template>

<script>
// Import
// @ is an alias to /src
import LanguageSet from '@/components/LanguageSet.vue'
// Export
export default {
  // Name and components
  name: 'DinamicNav',
  components: {
    LanguageSet
  },
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  methods: {
    // Dinamic change nav path
    navigationLink (currentLanguage, path) {
      return ('/' + currentLanguage + '/' + path)
    }
  }
}
</script>

<style scoped>
  a {
    color: whitesmoke;
    font-size: 1.125rem;
    padding:0;
  }

  .b-icon {
    color: whitesmoke;
    font-weight: 200;
  }

  .nav-mobile-20 {
    width:20%;
  }

  .nav-mobile-40 {
    width:40%;
    padding-left:0
  }

   .navbar {
      padding:0px;
    }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Slim devices (slim phones, 400px and up)*/
  @media only screen and (min-width: 400px) {
      a { font-size: 1.5rem; }
      .nav-mobile-40 { padding-left:auto; }
  }

  /* Small devices (landscape phones, 576px and up)*/
  @media only screen and (min-width: 576px) {

  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    a { font-size: 1.75rem }
    .b-icon { margin: 0.5rem; }
  }

</style>
