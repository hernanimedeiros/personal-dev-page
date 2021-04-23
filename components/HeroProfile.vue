<template>
  <!-- Hero section for profiles -->
  <b-container fluid class="hero-profile bg-home-profile pt-5">
    <b-row class="py-5">
      <b-col xl="2">
        <HeroAvatar />
      </b-col>
      <b-col xl="10">
        <h1 class="big-title mt-3 h2">
          {{ content.homeTitle[language] }}
        </h1>
        <h2 class="big-sub-title mt-3 h3">
          {{ content.homeSubTitle[language] }}
        </h2>
        <p class="mt-3 text-shadow sub-title">
          {{ content.homeDescription[language] }}
        </p>
      </b-col>
      <span class="mx-auto">
        <SocialIconSmall class="mt-3 imported-icon" />
        <b-container>
          <b-link
            v-if="language==='en'"
            :key="language"
            :to="{ path: '/blog' }"
            replace
            class="mx-auto"
          >
            <b-button class="button-void-black p-3 mt-3">
              {{ content.homeButton[language] }}
            </b-button>
          </b-link>
          <b-link
            v-else
            :key="language"
            :to="{ path: navigationTo(language, content.navigationProject[language]) }"
            replace
            class="mx-auto"
          >
            <b-button class="button-void-black p-3 mt-3">
              {{ content.homeButton[language] }}
            </b-button>
          </b-link>
        </b-container>
      </span>
    </b-row>
    <p class="button-to-bottom pb-3">
      <b-link
        :to="{ path: '#HeroAboutAnchor'}"
        append
        class="big-title mx-auto"
      >
        <b-icon
          icon="arrow-down-square"
        />
      </b-link>
    </p>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import HeroAvatar from '@/components/HeroAvatar.vue'
import SocialIconSmall from '@/components/SocialIconSmall.vue'
// Export
export default {
  // Name and components
  name: 'HeroProfile',
  components: {
    HeroAvatar,
    SocialIconSmall
  },
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  methods: {
    // Dinamic change nav path
    navigationTo (currentLanguage, path) {
      return ('/' + currentLanguage + '/' + path)
    }
  }
}
</script>

<style scoped >

/*--------------------------------------------------------------
# Background
--------------------------------------------------------------*/
  .bg-home-profile {
    /* The image used */
    background-image: url("../assets/hernani-medeiros-desert.jpg");
    background-color: #272829;
    /* Height */
    min-height: 100vh;
    /* Create the parallax scrolling effect */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

/*--------------------------------------------------------------
# Super titles
--------------------------------------------------------------*/
  .big-title, .sub-title, .imported-icon {
    color:whitesmoke;
  }

  .big-sub-title {
    color:#8357e5;
  }

  .button-void-black {
    color:whitesmoke;
    border-color:whitesmoke;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  @media (min-width: 400px) {
    .avatar-size { width:10rem;height:10rem; }
  }
  /* Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) {
  }

  /* Medium devices (tablets, 768px and up)*/
  @media (min-width: 768px) {
    .avatar-size { width:12rem;height:12rem; }
    .big-title { font-size:2rem; }
    .big-sub-title { font-size:2rem; }
    .button-to-bottom { margin-top:5%; }
  }

  /* Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) {
    .avatar-size{ width:13rem;height:13rem; }
    .big-title { font-size:2.5rem; }
    .big-sub-title { font-size:2rem; }
    .button-to-bottom { margin-top:7.5%; }
    .imported-icon p { text-align:left; }
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {
    .avatar-size{ width:14rem;height:14rem; }
    .bg-home-profile { background-image: url("../assets/mulher-vendo-codigo-minificado.jpeg"); }
    .big-title{ font-size:3rem;text-align: left; }
    .big-sub-title{ font-size:2rem; }
    .sub-title { font-size:1.5rem; }
    .button-to-bottom { margin-top:10%; }
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media (min-width: 1400px) {
    .avatar-size{ width:12rem;height:12rem; }
    .big-title{ font-size:3.5rem;text-align: left; }
    .big-sub-title{ font-size:2.5rem;text-align: left; }
    .sub-title{ font-size:1.75rem;text-align: left; }
    .button-to-bottom { margin-top:5%; }
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .avatar-size{ width:18rem;height:18rem; }
    .big-title{ font-size:5rem;text-align: left; }
    .big-sub-title{ font-size:4rem;text-align: left; }
    .sub-title{ font-size:2rem;text-align: left; }
    .button-to-bottom { margin-top:20%; }
  }

</style>
