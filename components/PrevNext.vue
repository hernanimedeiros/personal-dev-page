<template>
  <div class="flex justify-between pt-5">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold button-left"
    >
      <b-button variant="outline-dark">
        {{ prev.title }}
      </b-button>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold button-right"
    >
      <b-button variant="outline-dark">
        {{ next.title }}
      </b-button>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
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
  @media (min-width: 992px) {
    .button-left {padding-right:1rem;}
    .button-right {padding-left:1rem;}
  }
</style>
