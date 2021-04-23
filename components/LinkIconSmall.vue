<template>
  <b-container class="link-icon-small">
    <!-- Icon to activate modal -->
    <span>
      <b-icon
        icon="globe2"
        @click="$bvModal.show('bv-modal-link-list')"
      />
    </span>
    <!-- Modal to change language -->
    <b-modal
      id="bv-modal-link-list"
      scrollable
      hide-footer
      hide-header-close
      size="lg"
      body-bg-variant="dark"
    >
      <template #modal-title>
        Links
      </template>
      <b-container bg-dark v-for="i in 20" :key="i">
        <b-button
            class="button-void w-75 my-3"
            to="/en"
            replace
        >
            Enter
        </b-button>
        <b-button
            class="button-void w-75 my-3"
            to="/en"
            replace
        >
            Enter
        </b-button>
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
</template>

<script>
export default {
// Name and components
  name: 'LinkIconSmall'
}
</script>
