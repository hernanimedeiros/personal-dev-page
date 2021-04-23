<template>
  <!-- About the Hero -->
  <b-container id="HeroPath" fluid class="hero-path py-5">
    <b-container class="content-layout">
      <!-- Introduction -->
      <h2 class="text-center text-whitesmoke">
        {{ content.heroPathTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <p class="text-center text-white text-description">
        {{ content.heroPathDescription[language] }}
      </p>
      <!--  -->
      <b-card
        bg-variant="light"
        class="text-center text-dark-opti"
      >
        <!-- Tab Group -->
        <b-tabs
          active-nav-item-class="bg-dark text-white"
          content-class="mt-3"
          justified
          align="center"
          class="mt-3"
        >
          <!-- Tab A -->
          <b-tab id="HeroEducation" active>
            <template #title>
              {{ content.heroPathItemTitleA[language] }}
            </template>
            <p class="text-justify text-description pt-3">
              {{ content.heroPathIntroductionA[language] }}
            </p>
            <HeroEducation
              :language="language"
              :content="content"
            />
            <p
              class="text-center text-description"
            >
              {{ content.heroPathLastA[language] }}
            </p>
          </b-tab>
          <!-- Tab B -->
          <b-tab id="HeroTimeline" lazy>
            <template #title>
              {{ content.heroPathItemTitleB[language] }}
            </template>
            <p class="text-center text-description pt-3">
              {{ content.heroPathIntroductionB[language] }}
            </p>
            <HeroTimeline
              :language="language"
              :content="content"
            />
            <p class="text-center text-description">
              {{ content.heroPathLastB[language] }}
            </p>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import HeroEducation from '@/components/HeroEducation.vue'
import HeroTimeline from '@/components/HeroTimeline.vue'
// Export
export default {
  // Name and components
  name: 'HeroPath',
  components: {
    HeroEducation,
    HeroTimeline
  },
  // Properties received from parent
  props: {
    content: Object,
    language: String
  }
}
</script>

<style scoped>

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
  }

  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .text-description {padding-left:5rem;padding-right:5rem}
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
  }

</style>
