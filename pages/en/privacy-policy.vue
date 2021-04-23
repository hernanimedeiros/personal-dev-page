<template>
  <b-container fluid class="privacy-policy">
    <DinamicNavMobile
      :content="content"
      :language="language"
      :preferences="preferences"
      class="nav-mobile"
    />
    <b-row>
      <!-- Navbar -->
      <b-col
        lg="1"
        class="p-0 mx-0 sidebar"
      >
        <DinamicNavDesktop
          :content="content"
          :language="language"
          :preferences="preferences"
          class="p-0 mx-auto sidebar-inner"
        />
      </b-col>
      <!-- Content -->
      <b-col
        lg="11"
        class="p-0 main-section"
      >
        <b-container>
          <h1 class="pt-5">
            {{ privacy.privacyPolicyTitle[language] }}
          </h1>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyWho[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyWhoResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyWhoResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyWhy[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyWhyResponse1[language] }}
          </p>
          <ul>
            <li class="text-left">
              {{ privacy.privacyPolicyWhyResponse2[language] }}
            </li>
            <li class="text-left">
              {{ privacy.privacyPolicyWhyResponse3[language] }}
            </li>
          </ul>
          <p class="text-justify">
            {{ privacy.privacyPolicyWhyResponse4[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyWhyResponse5[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyWhyResponse6[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyCover[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyCoverResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCoverResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyPersonalData[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyPersonalDataResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyPersonalDataResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyTreatment[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyTreatmentResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyTreatmentPerson[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyTreatmentPersonResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyTreatmentPersonResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyTreatmentTutor[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyTreatmentTutorResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyTreatmentTutorResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataType[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTypeResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTypeResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTypeResponse3[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTypeResponse4[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTypeResponse5[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTypeResponse6[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyGetData[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyGetDataResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyGetDataResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyGetDataResponse3[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyGetDataResponse4[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyClient[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyClientResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataDestiny[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataDestinyResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataDestinyResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataDestinyResponse3[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataTime[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTimeResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTimeResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataRights[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataRightsResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataUpdate[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataUpdateResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataOpposition[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataOppositionResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataOppositionResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataComplaint[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataComplaintResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataSecurity[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataSecurityResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataSecurityResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataSecurityResponse3[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataSecurityResponse4[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataSecurityResponse5[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataCollab[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataCollabResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataCollabResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataCollabResponse3[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataTransfer[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTransferResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataTransferResponse2[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataChange[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataChangeResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyDataCookieUse[language] }}
          </h2>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataCookieUseResponse1[language] }}
          </p>
          <h2 class="pt-3">
            {{ privacy.privacyPolicyCookiesAbout[language] }}
          </h2>
          <h3 class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse1[language] }}
          </h3>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse2[language] }}
          </p>
          <h3 class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse3[language] }}
          </h3>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse4[language] }}
          </p>
          <h3 class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse5[language] }}
          </h3>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse6[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse7[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesAboutResponse8[language] }}
          </p>
          <h3 class="text-justify">
            {{ privacy.privacyPolicyCookiesDestination[language] }}
          </h3>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesDestinationResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesDestinationResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesDestinationResponse3[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesDestinationResponse4[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesDestinationResponse5[language] }}
          </p>
          <h3 class="text-justify">
            {{ privacy.privacyPolicyCookiesManagement[language] }}
          </h3>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesManagementResponse1[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesManagementResponse2[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyCookiesManagementResponse3[language] }}
          </p>
          <p class="text-justify">
            {{ privacy.privacyPolicyDataCookieUseResponse2[language] }}
          </p>
          <ul class="pb-5">
            <li class="text-left">
              <b-link
                class="text-justify"
                href="privacy.privacyPolicyDataCookieUseResponse4[language]"
                targe="_blank"
              >
                {{ privacy.privacyPolicyDataCookieUseResponse3[language] }}
              </b-link>
            </li>
            <li class="text-left">
              <b-link
                class="text-justify"
                href="privacy.privacyPolicyDataCookieUseResponse6[language]"
                targe="_blank"
              >
                {{ privacy.privacyPolicyDataCookieUseResponse5[language] }}
              </b-link>
            </li>
            <li class="text-left">
              <b-link
                class="text-justify"
                href="privacy.privacyPolicyDataCookieUseResponse8[language]"
                targe="_blank"
              >
                {{ privacy.privacyPolicyDataCookieUseResponse7[language] }}
              </b-link>
            </li>
          </ul>
        </b-container>
        <!-- Footer -->
        <DinamicFooter
          :content="content"
          :language="language"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import ContentJson from '@/components/content.json'
import MetaJson from '@/components/meta.json'
import PrivacyJson from '@/components/privacy.json'
import DinamicNavDesktop from '@/components/DinamicNavDesktop.vue'
import DinamicFooter from '@/components/DinamicFooter.vue'
// Export
export default {
  // Name and components
  name: 'PrivacyPolicy',
  components: {
    DinamicNavDesktop,
    DinamicFooter
  },
  data () {
    return {
      // Load content
      content: ContentJson,
      meta: MetaJson,
      privacy: PrivacyJson,
      // Language based on path
      language: 'en'
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.language
      },
      title: this.meta.metaPrivacyTitle[this.language],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.metaPrivacyDescription[this.language]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.metaPrivacyKeyword[this.language]
        }
      ]
    }
  }
}
</script>
