<template>
  <!-- About the Hero -->
  <b-container id="HeroLinks" fluid class="hero-about py-5">
    <!-- Introduction and Boxes -->
    <b-container fluid class="content-layout">
      <!-- Introduction -->
      <h2 class="text-center text-whitesmoke">
        {{ content.heroLinkTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <p class="text-justify text-white text-description text-center">
        {{ content.heroLinkDescription[language] }}
      </p>
      <!-- Links -->
      <b-container class="">
        <!-- My Links -->
        <b-link
          class="pt-3"
          @click="$bvModal.show('bv-modal-link-list')"
        >
          <b-alert
            show
            variant="light"
          >
            <h4 class="alert-heading">
              {{ content.heroLinkTitleA[language] }}
            </h4>
            <p>
              {{ content.heroLinkDescriptionA[language] }}
            </p>
          </b-alert>
        </b-link>
        <b-link
          :to="{ path: '/blog' }"
          replace
          class="pt-3"
        >
          <b-alert
            show
            variant="primary"
          >
            <h4 class="alert-heading">
              {{ content.heroLinkTitleB[language] }}
            </h4>
            <p>
              {{ content.heroLinkDescriptionB[language] }}
            </p>
          </b-alert>
        </b-link>
      </b-container>
      <!-- Modal with links -->
      <b-modal
        id="bv-modal-link-list"
        scrollable
        hide-footer
        hide-header-close
        no-close-on-backdrop
        size="lg"
        body-bg-variant="dark"
      >
        <template #modal-title class="h3 text-center">
          Links
        </template>
        <b-container>
          <!-- Meu site -->
          <a
            href="https://hernanimedeiros.pt"
            target="_blank"
          >
            <b-button
              class="button-void w-75 my-3"
            >
              Hernani Medeiros (Marketing)
            </b-button>
          </a>
          <!-- Meu site -->
          <a
            href="https://hernanimedeiros.pt/blog"
            target="_blank"
          >
            <b-button
              class="button-void w-75 my-3"
            >
              Hernani Medeiros (Blog)
            </b-button>
          </a>
          <!-- A minha agência -->
          <a
            href="https://webtop.pt"
            target="_blank"
          >
            <b-button
              class="button-void w-75 my-3"
            >
              WebTopPT (Digital Agency)
            </b-button>
          </a>
          <!-- A minha agência -->
          <a
            href="https://webdevelopment.pt"
            target="_blank"
          >
            <b-button
              class="button-void w-75 my-3"
            >
              WebDevelopmentPT (News portal)
            </b-button>
          </a>
          <b-button
            class="mt-3"
            block
            @click="$bvModal.hide('bv-modal-link-list')"
          >
            Exit
          </b-button>
        </b-container>
      </b-modal>
    </b-container>
  </b-container>
</template>
<script>
// Export
export default {
  // Name and components
  name: 'HeroLinks',
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
