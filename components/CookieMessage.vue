<template>
  <b-container fluid class="cookie-message px-0">
    <!-- Bottom alert -->
    <b-alert
      :show="dismissCountDown"
      class="fixed-top m-0 rounded-0"
      style="z-index: 2000;"
      variant="primary"
      dismissible
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <b-progress
        variant="info"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      />
      <!-- Countdown -->
      <small>
        {{ content.dismissAlertA[language] }}
        {{ dismissCountDown }}
        {{ content.dismissAlertB[language] }}
      </small>
      <!-- Message -->
      <p>
        {{ content.cookiesMessage[language] }}
        <b-link
          v-if="language === 'pt'"
          href="./pt/politica-privacidade"
          target="_blank"
        >
          <ins>
            {{ content.formUserAgreementLink[language] }}.
          </ins>
        </b-link>
        <b-link
          v-else-if="language === 'en'"
          href="./en/privacy-policy"
          target="_blank"
        >
          <ins>
            {{ content.formUserAgreementLink[language] }}.
          </ins>
        </b-link>
      </p>
    </b-alert>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'CookieMessage',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  data () {
    return {
      // Load content
      dismissSecs: 20,
      dismissCountDown: 0
    }
  },
  mounted () {
    this.dismissCountDown = this.dismissSecs
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style scoped >
.cookie-message {
  opacity: 0.60;
}

.cookie-message:hover {
  opacity: 1;
}

</style>
