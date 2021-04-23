<template>
  <!-- About the Hero -->
  <b-container id="HeroAboutAnchor" fluid class="hero-about pt-5">
    <!-- Introduction and Boxes -->
    <b-container fluid class="content-layout">
      <!-- Introduction -->
      <h2 class="text-center text-whitesmoke">
        {{ content.heroAboutTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <p class="text-justify text-white text-description">
        {{ content.heroAboutDescription[language] }}
      </p>
      <!-- Boxes group-->
      <b-row>
        <!-- Box A -->
        <b-col lg="6" class="p-3">
          <b-card
            bg-variant="light"
            class="text-center text-black-opti"
          >
            <b-icon icon="people" />
            <h3 class="mt-3">
              <span class="text-purple-opti">#</span>
              {{ content.heroAboutItemTitleA[language] }}
            </h3>
            <b-card-text class="mt-1 text-center">
              {{ content.heroAboutItemDescriptionA[language] }}
            </b-card-text>
            <b-button
              class="button-void-black w-75 mt-1"
              :to="{ path: '#HeroPortfolio'}"
              append
            >
              {{ content.heroAboutItemButtonA[language] }}
            </b-button>
          </b-card>
        </b-col>
        <b-col lg="6" class="p-3">
          <!-- Box B -->
          <b-card
            bg-variant="light"
            class="text-center text-black-opti"
          >
            <b-icon icon="code" />
            <h3 class="mt-3">
              <span class="text-purple-opti">#</span>
              {{ content.heroAboutItemTitleB[language] }}
            </h3>
            <b-card-text class="mt-1 text-center">
              {{ content.heroAboutItemDescriptionB[language] }}
            </b-card-text>
            <b-button
              class="button-void-black w-75 mt-1"
              :to="{ path: '#HeroPortfolio'}"
              append
            >
              {{ content.heroAboutItemButtonB[language] }}
            </b-button>
          </b-card>
        </b-col>
      </b-row>
      <!-- Boxes group -->
      <b-row>
        <!-- Box C -->
        <b-col lg="6" class="p-3">
          <b-card
            bg-variant="light"
            class="text-center text-black-opti"
          >
            <b-icon icon="calendar2-check" />
            <h3 class="mt-3">
              <span class="text-purple-opti">#</span>
              {{ content.heroAboutItemTitleC[language] }}
            </h3>
            <b-card-text class="mt-1 text-center">
              {{ content.heroAboutItemDescriptionC[language] }}
            </b-card-text>
            <b-button
              class="button-void-black w-75 mt-1"
              :to="{ path: '#HeroPortfolio'}"
              append
            >
              {{ content.heroAboutItemButtonC[language] }}
            </b-button>
          </b-card>
        </b-col>
        <!-- Box D -->
        <b-col lg="6" class="p-3">
          <b-card
            bg-variant="light"
            class="text-center text-black-opti"
          >
            <a
              href="https://www.facebook.com/hernanifelixmedeiros/"
              target="_blank"
            >
              <b-icon icon="battery-charging" />
            </a>
            <h3 class="mt-3">
              <span class="text-purple-opti">#</span>
              {{ content.heroAboutItemTitleD[language] }}
            </h3>
            <b-card-text class="mt-1 text-center">
              {{ content.heroAboutItemDescriptionD[language] }}
            </b-card-text>
            <b-button
              class="button-void-black w-75 mt-1"
              :to="{ path: '#HeroPath'}"
              append
            >
              {{ content.heroAboutItemButtonD[language] }}
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- Last Box with Call to Action -->
    <b-container fluid class="content-layout p-3">
      <b-jumbotron bg-variant="light">
        <template #header>
          <h3>
            <span class="text-purple-opti">#</span>
            {{ content.heroAboutResumeTitle[language] }}
          </h3>
        </template>
        <template>
          <p class="ref-size font-italic font-bold">
            <strong class="h1 text-purple-opti">"</strong>
            {{ content.heroAboutResumeDescription[language] }}
            <strong class="h1 text-purple-opti">"</strong>
          </p>
        </template>
      </b-jumbotron>
      <h2 class="text-center text-whitesmoke pt-5">
        {{ content.contactTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <p class="text-justify text-white text-description text-center">
        {{ content.contactDescription[language] }}
      </p>
    </b-container>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'HeroAbout',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  }
}
</script>

<style scoped>

  .b-icon {
    font-size:3rem;
  }

  .ref-mark {
    font-size:1.125rem;
    font-variant-position: initial;
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
    .ref-size {font-size:1.25rem;}
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .text-description {padding-left:5rem;padding-right:5rem}
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
    .ref-size {font-size:1.5rem;}
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .ref-size {font-size:3rem;}
  }

</style>
