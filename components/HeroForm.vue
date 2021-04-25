<template>
  <b-container class="hero-form">
    <b-container class="py-3">
      <b-button
        variant="info"
        @click="showNetlifyForm"
      >
        <b-icon icon="envelope" aria-hidden="true" />
      </b-button>
      <b-button
        variant="danger"
        @click="showGoogleForm"
      >
        <b-icon icon="google" aria-hidden="true" />
      </b-button>
    </b-container>
    <!-- Google Form-->
    <b-container v-show="googleForm">
      <!-- Google Form Portuguese version -->
      <div v-if="language === 'pt'">
        {{ content.formGoogleShortcut[language] }}
        <b-link
          href="https://forms.gle/PGms2QxKJrZSfQrU8"
          target="_blank"
          class="py-3"
        >
          {{ content.formGoogleShortcutLink[language] }}
        </b-link>
        <b-embed
          src="https://forms.gle/PGms2QxKJrZSfQrU8"
          aspect="1by1"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </b-embed>
      </div>
      <!-- Google Form English version -->
      <div v-else-if="language === 'en'">
        {{ content.formGoogleShortcut[language] }}
        <b-link
          href="https://forms.gle/ZCM3Jo33NzTExeoN9"
          target="_blank"
          class="py-3"
        >
          {{ content.formGoogleShortcutLink[language] }}
        </b-link>
        <b-embed
          src="https://forms.gle/ZCM3Jo33NzTExeoN9"
          aspect="1by1"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </b-embed>
      </div>
    </b-container>
    <!-- Netlify Form-->
    <b-container v-show="netlifyForm">
      <b-form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        @reset="onReset"
      >
        <!-- Name -->
        <b-form-group
          id="form-group-name"
          :description="content.formInputNameDescription[language]"
          :valid-feedback="content.formInputNameValid[language]"
          :invalid-feedback="formInputNameInvalid"
          :state="formInputNameState"
        >
          <b-form-input
            id="form-input-name"
            v-model="form.name"
            type="text"
            :placeholder="content.formInputNamePlaceholder[language]"
            required
          />
        </b-form-group>
        <!-- Email -->
        <b-form-group
          id="form-group-email"
          :description="content.formInputEmailDescription[language]"
          :valid-feedback="content.formInputEmailValid[language]"
          :invalid-feedback="formInputEmailInvalid"
          :state="formInputEmailState"
        >
          <b-form-input
            id="form-input-email"
            v-model="form.email"
            type="email"
            :placeholder="content.formInputEmailPlaceholder[language]"
            required
          />
        </b-form-group>
        <!-- Message -->
        <b-form-group
          id="form-group-message"
          :description="content.formInputMessageDescription[language]"
          :valid-feedback="content.formInputMessageValid[language]"
          :invalid-feedback="formInputMessageInvalid"
          :state="formInputMessageState"
        >
          <b-form-textarea
            id="form-input-message"
            v-model="form.message"
            type="text"
            :placeholder="content.formInputMessagePlaceholder[language]"
            rows="5"
          />
        </b-form-group>
        <b-form-group
          id="input-group-check"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox
            id="checkbox-accept"
            v-model="form.checked"
            name="checkbox-accept"
            value="accepted"
            unchecked-value="not_accepted"
            :aria-describedby="ariaDescribedby"
            required
            @change="completedToast"
          >
            <small>
              {{ content.formUserAgreement[language] }}
              <b-link
                v-if="language === 'pt'"
                href="./pt/politica-privacidade"
                target="_blank"
              >
                <strong>
                  {{ content.formUserAgreementLink[language] }}
                </strong>
              </b-link>
              <b-link
                v-else-if="language === 'en'"
                href="./en/privacy-policy"
                target="_blank"
              >
                <strong>
                  {{ content.formUserAgreementLink[language] }}
                </strong>
              </b-link>
            </small>
          </b-form-checkbox>
        </b-form-group>
        <b-button
          v-show="form.checked"
          type="submit"
          variant="info"
        >
          {{ content.formSubmit[language] }}
        </b-button>
        <b-button
          type="reset"
          variant="dark"
        >
          {{ content.formReset[language] }}
        </b-button>
      </b-form>
    </b-container>
  </b-container>
</template>

<script>
export default {
  // Name and components
  name: 'HeroForm',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        message: '',
        checked: 'not_accepted'
      },
      netlifyForm: false,
      googleForm: false
    }
  },
  computed: {
    // Validation
    formInputEmailState () {
      return this.form.email.length > 6
    },
    formInputNameState () {
      return this.form.name.length > 2
    },
    formInputMessageState () {
      return this.form.message.length > 3
    },
    formInputEmailInvalid () {
      if (this.form.email.length > 0) {
        return this.content.formInputEmailInvalidVoid[this.language]
      }
      return this.content.formInputEmailInvalid[this.language]
    },
    formInputNameInvalid () {
      if (this.form.name.length > 0) {
        return this.content.formInputNameInvalidVoid[this.language]
      }
      return this.content.formInputNameInvalid[this.language]
    },
    formInputMessageInvalid () {
      if (this.form.message.length > 0) {
        return this.content.formInputMessageInvalidVoid[this.language]
      }
      return this.content.formInputMessageInvalid[this.language]
    }
  },
  methods: {
    showNetlifyForm () {
      this.netlifyForm = true
      this.googleForm = false
    },
    showGoogleForm () {
      this.netlifyForm = false
      this.googleForm = true
    },
    // Toasts
    completedToast () {
      if (this.form.checked === 'accepted') {
        this.$bvToast.toast(this.content.completedMessageB[this.language], {
          title: this.content.completedMessageA[this.language],
          variant: 'success',
          solid: true
        })
      }
    },
    incompletedToast () {
      this.$bvToast.toast(this.content.incompletedMessageB[this.language], {
        title: this.content.incompletedMessageA[this.language],
        variant: 'warning',
        solid: true
      })
    },
    // Reset
    onReset (event) {
      this.form.email = ''
      this.form.name = ''
      this.form.message = ''
      this.form.checked = 'not_accepted'
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
      this.incompletedToast()
    }
  }
}
</script>
