<template>

</template>

<script>
// Import
// @ is an alias to /src
import { mapGetters, mapState, mapMutations } from 'vuex'
// Export
export default {
  // Name and components
  name: 'StrControl',
  // To use in future versions
  // fetch(context) is called by the server-side
  // and before instantiating the component
  fetch ({ store }) {
    store.commit('increment')
  },
  data () {
    return {
      preferences: [
        {
          // In development
          option: 'future_versions'
        }
      ]
    }
  },
  // Watch store
  computed: {
    ...mapState({
      counter: 'counter'
    }),
    ...mapGetters({
      getPreferences: 'preferences/get'
    })
  },
  mounted () {
    this.preferences[0].language = this.language
    // Store Preferences
    try {
      this.setPreferences(this.preferences)
    } catch (e) {
      console.log('Preferences not saved!')
    }
  },
  methods: {
    ...mapMutations({
      setPreferences: 'preferences/set'
    }),
    increment () {
      this.$store.commit('increment')
    }
  },
}
</script>
