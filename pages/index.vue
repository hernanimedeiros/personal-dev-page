<template>
  <b-container fluid class="landing-point bg-index d-flex justify-content-center">
    <b-container class="text-center pt-5">
      <b-jumbotron class="bg-transparent pt-5 pb-3 mb-3" text-variant="white">
        <h1 class="big-title">
          Hernâni Medeiros
        </h1>
        <h2 class="big-sub-title" text-variant="white">
          Web Developer
        </h2>
        <SocialIconSmall />
        <p class="my-3 lead">
          Web Developer focus in client results. Currently working on Vue/Nuxt, Node JS, PHP and Wordpress
        </p>
        <b-row>
          <b-col md="6">
            <b-button
              class="button-void w-75 my-3"
              to="/en"
              replace
            >
              Enter
            </b-button>
          </b-col>
          <b-col md="6">
            <b-button
              class="button-void w-75 my-3"
              to="/pt"
              replace
            >
              Entrar
            </b-button>
          </b-col>
        </b-row>
      </b-jumbotron>
      <b-container class="pt-5">
        <StartMessage :variant="variant" />
      </b-container>
      <b-container class="text-whitesmoke pt-5 pb-3">
        This website uses cookies to facilitate navigation and to obtain statistical data. By continuing to use our website, you agree to its use an our
        <b-link
          href="./en/privacy-policy"
          target="_blank"
        >
          <ins>
            Privacy Policy.
          </ins>
        </b-link>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import ContentJson from '@/components/content.json'
import MetaJson from '@/components/meta.json'
import SocialIconSmall from '@/components/SocialIconSmall.vue'
import StartMessage from '@/components/StartMessage.vue'
// Export
export default {
  // Name and components
  name: 'LandingPoint',
  components: {
    SocialIconSmall,
    StartMessage

  },
  data () {
    return {
      // Load content
      content: ContentJson,
      meta: MetaJson,
      // Language
      language: 'en',
      // Alert variant
      variant: 'info'
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language
      },
      title: this.meta.metaWelcomeTitle[this.language],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.metaWelcomeDescription[this.language]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.metaWelcomeKeyword[this.language]
        }
      ]
    }
  }
}
</script>

<style scoped>

  .social-icon {
    color:whitesmoke;
  }

/*--------------------------------------------------------------
# Background
--------------------------------------------------------------*/
  .bg-index {
    /* The image used */
    background-image: url("../assets/hernani-medeiros-coffee.jpg");
    background-color: #272829;
    /* Height */
    min-height: 100vh;
    /* Create the parallax scrolling effect */
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
  }

/*--------------------------------------------------------------
# Super titles
--------------------------------------------------------------*/
  .big-title {
    color:whitesmoke;
  }

  .big-sub-title {
    color:#8357e5;
  }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Small devices (landscape phones, 576px and up)*/
  @media only screen and (min-width: 576px) {
  }

  /* Medium devices (tablets, 768px and up)*/
  @media only screen and (min-width: 768px) {
    .bg-index {background-image: url("../assets/laptop-hernani-medeiros.jpg");}
    .big-title{font-size:3rem}
    .big-sub-title{font-size:2rem}
    .button-void{font-size:3rem}
    .social-icon{font-size:2rem}
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .big-title{font-size:2.5rem}
    .big-sub-title{font-size:2rem}
    .button-void{font-size:2.5rem}
    .social-icon{font-size:2rem}
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
    .big-title{font-size:3rem}
    .big-sub-title{font-size:2rem}
    .button-void{font-size:3rem}
    .social-icon{font-size:2rem}
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
    .big-title{font-size:3.5rem}
    .big-sub-title{font-size:2.5rem}
    .button-void{font-size:3.5rem}
    .social-icon{font-size:2.5rem}
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .big-title{font-size:5rem}
    .big-sub-title{font-size:4rem}
    .button-void{font-size:5rem}
    .social-icon{font-size:4rem}
  }

</style>
