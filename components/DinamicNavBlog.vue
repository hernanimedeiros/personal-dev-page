<template>
  <!-- Naar for blog -->
  <b-navbar
    fluid
    class="dinamic-nav-blog bg-black fixed-bottom"
  >
    <!-- Linkedin -->
    <nav-item class="nav-link nav-mobile-20 mx-auto my-auto">
      <a
        href="https://www.linkedin.com/in/hernanimedeiros/"
        target="_blank"
      >
        <b-icon icon="linkedin" />
      </a>
    </nav-item>
    <!-- Twitter -->
    <nav-item class="nav-link nav-mobile-20 mx-auto my-auto">
      <a
        href="https://twitter.com/hernanigoat"
        target="_blank"
      >
        <b-icon icon="twitter" />
      </a>
    </nav-item>
    <!-- Blog -->
    <b-nav-item
      :to="{ path: '/blog' }"
      replace
      class="nav-link nav-mobile-20"
    >
      <b-icon icon="journal-text" />
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
  </b-navbar>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'DinamicNavBlog',
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
    font-size: 1rem;
    padding:0px;
  }

  .b-icon {
    color: whitesmoke;
    font-weight: 200;
  }

  .nav-mobile-20 {
    width:20%;
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
      a { font-size: 1.25rem; }
  }

  /* Small devices (landscape phones, 576px and up)*/
  @media only screen and (min-width: 576px) {

  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    a { font-size: 1.5rem }
    .b-icon { margin: 0.5rem; }
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    li.nav-item { padding:0px; }
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media (min-width: 1400px) {
    a { font-size: 1.75rem }
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    a { font-size: 2rem }
  }

</style>
