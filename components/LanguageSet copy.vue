<template>
  <b-container class="language-set">
    <!-- Language Picker -->
    <b-col>
      <b-dropdown
        id="dropdown-offset"
        :text="content.languageSelection[language]"
        offset="25"
        dropup
        variant="outline-secondary"
      >
        <b-dropdown-item
          v-for="option in options"
          :key="option.item"
          :value="option.name"
          :to="{ path: navigationLink(option.item)}"
          replace
          class="mx-auto"
          @click="flagLink();flagAlt();changeLanguage(option.item)"
        >
          {{ option.name }}
        </b-dropdown-item>
      </b-dropdown>
    </b-col>
    <!-- Flag -->
    <b-col>
      <b-img
        :src="flagLink()"
        :alt="flagAlt()"
        class="flag-icon pt-3 mx-auto"
      />
    </b-col>
  </b-container>
</template>

<script>
export default {
  // Name and components
  name: 'LanguageSet',
  // Properties received from parent
  props: {
    content: Object,
    language: String,
    preferences: Object
  },
  data () {
    return {
      // Default language
      selected: this.language,
      // Language available
      options: [
        { item: 'en', name: 'English', abbreviation: 'EN' },
        { item: 'pt', name: 'Português', abbreviation: 'PT' }
      ]
    }
  },
  mounted () {
    // Load language at mount
    this.loadLanguage()
  },
  methods: {
    // Load language, if fail load default language
    loadLanguage () {
      try {
        const loadedLanguage = this.getPreferences[0].language
        return loadedLanguage
      } catch (e) {
        return 'en'
      }
    },
    // Change language and update preferences
    changeLanguage (language) {
      this.selected = language
      this.preferences[0].language = language
    },
    // Update path
    navigationLink (importLanguage) {
      const path = importLanguage
      return ('/' + path)
    },
    // Dinamic change src path
    flagLink () {
      const updatedLanguage = this.selected
      return require('@/assets/' + updatedLanguage + '.svg')
    },
    // Dinamic change of alt attribute
    flagAlt () {
      const updatedLanguage = this.selected
      return this.content.flagName[updatedLanguage]
    }
  }
}
</script>

<style scoped>

    .flag-icon {
      display: none;
    }

/*--------------------------------------------------------------
# Media queries
--------------------------------------------------------------*/
  /*
  # X-Small devices (portrait phones, less than 576px)
  # No media query for `xs` since this is the default in Bootstrap
  */
  /* Large devices (desktops, 992px and up)*/
  @media only screen and (min-width: 992px) {
    .flag-icon {
      display: block;
      width: 2rem;
    }
  }

  /* X-Large devices (large desktops, 1200px and up)*/
  @media only screen and (min-width: 1200px) {
    .flag-icon { width: 2.25rem;}
  }

  /*  XX-Large devices (larger desktops, 1400px and up)*/
  @media only screen and (min-width: 1400px) {
    .flag-icon { width: 2.5rem;}
  }

  /*  XXX-Large devices (larger desktops, 2560px and up)*/
  @media (min-width: 2560px) {
    .flag-icon { width: 3rem;}
  }

</style>
