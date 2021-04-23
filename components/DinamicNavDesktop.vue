<template>
  <b-nav class="dinamic-nav-desktop fluid fixed-top" align="center">
    <!-- Home -->
    <b-nav-item
      :to="{ path: navigationLink(language, content.navigationIndex[language]) }"
      replace
      class="mx-auto my-auto nav-link"
    >
      <b-icon icon="house-fill" class="mx-auto" />
    </b-nav-item>
    <!-- Pojects -->
    <b-nav-item
      :to="{ path: navigationLink(language, content.navigationProject[language]) }"
      replace
      class="mx-auto my-auto nav-link"
    >
      <b-icon icon="terminal" />
    </b-nav-item>
    <!-- Blog -->
    <b-nav-item
      :to="{ path: '/blog' }"
      replace
      class="mx-auto my-auto nav-link"
    >
      <b-icon icon="journal-text" />
    </b-nav-item>
    <b-nav-item class="mx-auto my-auto nav-link">
      <LanguageSet
        v-once
        :content="content"
        :language="language"
      />
    </b-nav-item>
    <hr>
    <!-- Linkedin -->
    <nav-item class="mx-auto my-auto nav-link">
      <a
        href="https://www.linkedin.com/in/hernanimedeiros/"
        target="_blank"
      >
        <b-icon icon="linkedin" />
      </a>
    </nav-item>
    <!-- Facebook -->
    <nav-item class="mx-auto my-auto nav-link">
      <a
        href="https://www.facebook.com/hernanifelixmedeiros/"
        target="_blank"
        class="mx-auto my-auto nav-link"
      >
        <b-icon icon="facebook" />
      </a>
    </nav-item>
    <!-- Instagram -->
    <nav-item class="mx-auto my-auto nav-link">
      <a
        href="https://twitter.com/hernanigoat"
        target="_blank"
        class="mx-auto my-auto nav-link"
      >
        <b-icon icon="twitter" />
      </a>
    </nav-item>
    <!-- Github -->
    <nav-item class="mx-auto my-auto nav-link">
      <a
        href="https://github.com/hernanimedeiros"
        target="_blank"
        class="mx-auto my-auto nav-link"
      >
        <b-icon icon="github" />
      </a>
    </nav-item>
  </b-nav>
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
    color: lightgrey;
    font-size: 2rem;
  }

  a:hover {
    color: whitesmoke;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 2px solid lightgrey;
    width:80%;
  }

  .b-icon {
    margin: 4px;
    color: lightgrey;
    font-weight: 200;
    transition-delay: 0.1s;
    transition-timing-function: ease-in-out;
    transition: color 0.5s;
  }

  .b-icon:hover {
    color: #8357e5;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
    a {font-size:1.25rem;}
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
    a {font-size:1.5rem;}
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    a {font-size:3rem;}
  }

</style>
