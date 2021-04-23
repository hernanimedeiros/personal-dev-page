<template>
  <!-- About the Hero -->
  <b-container id="HeroPortfolio" fluid class="hero-portfolio pt-5">
    <!-- Introduction and Boxes -->
    <b-container fluid class="content-layout">
      <!-- Introduction -->
      <h2 class="text-center text-whitesmoke">
        {{ content.heroPortfolioTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <p class="text-justify text-white text-description">
        {{ content.heroPortfolioDescription[language] }}
      </p>
      <!-- Box -->
      <b-col lg="12" class="p-3">
        <b-card
          bg-variant="light"
          class="text-left text-black-opti"
        >
          <p>
            <!-- Solo Projects -->
            <b-button
              class="button-void-black mt-3"
              :to="{ path: navigationLinkInternal(language, content.navigationProjectSolo[language]) }"
              replace
            >
              <b-icon
                icon="play-circle"
              />
              {{ content.heroPortfolioItemA[language] }}
            </b-button>
          </p>
          <p>
            <!-- Agency -->
            <b-button
              class="button-void-black mt-3"
              href="https://webtop.pt"
              target="_blank"
            >
              <b-icon
                icon="graph-up"
              />
              {{ content.heroPortfolioItemB[language] }}
            </b-button>
          </p>
          <p>
            <!-- Team Projects -->
            <b-button
              class="button-void-black mt-3"
              :to="{ path: navigationLinkInternal(language, content.navigationProjectTeam[language]) }"
              replace
            >
              <b-icon
                icon="link"
              />
              {{ content.heroPortfolioItemC[language] }}
            </b-button>
          </p>
          <p>
            <!-- Labs -->
            <b-button
              class="button-void-black mt-3"
              href="https://github.com/hernanimedeiros"
              target="_blank"
            >
              <b-icon
                icon="github"
              />
              {{ content.heroPortfolioItemD[language] }}
            </b-button>
          </p>
        </b-card>
      </b-col>
    </b-container>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'HeroPortfolio',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  methods: {
    // Dinamic change nav path
    navigationLinkInternal (currentLanguage, path) {
      return ('/' + currentLanguage + '/' + path)
    }
  }
}
</script>

<style scoped>

  .button-void-black {
    font-size:1.125rem;
    width:90%;
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
    .button-void-black {font-size:1.25rem;width:75%;}
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .text-description {padding-left:5rem;padding-right:5rem}
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
    .button-void-black {font-size:1.5rem;}
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .button-void-black {font-size:3rem}
  }

</style>
