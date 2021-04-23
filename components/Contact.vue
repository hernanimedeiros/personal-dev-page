<template>
  <!-- About the Hero -->
  <b-container fluid class="contact content-layout bg-transparent">
    <!-- Contact Tab Group -->
    <b-container>
      <b-card
        bg-variant="light"
        class="text-center text-black-opti"
      >
        <b-tabs
          active-nav-item-class="bg-dark text-white"
          content-class="mt-3"
          justified
          align="center"
          class="mt-3"
        >
          <!-- Tab A -->
          <b-tab active>
            <template #title>
              {{ content.contactTitleOptionA[language] }}
            </template>
            <ContactIconSmall />
          </b-tab>
          <!-- Tab B -->
          <b-tab lazy>
            <template #title>
              {{ content.contactTitleOptionB[language] }}
            </template>
            <SocialIconSmall />
          </b-tab>
          <!-- Tab C -->
          <b-tab>
            <template #title>
              {{ content.contactTitleOptionC[language] }}
            </template>
            <HeroForm
              :language="language"
              :content="content"
            />
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import ContactIconSmall from '@/components/ContactIconSmall.vue'
import HeroForm from '@/components/HeroForm.vue'
// Export
export default {
  // Name and components
  name: 'Contact',
  components: {
    ContactIconSmall,
    HeroForm
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
  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .text-description {padding-left:5rem;padding-right:5rem}
  }

</style>
