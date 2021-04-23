<template>
  <!-- Projects -->
  <b-container fluid class="memories p-0 bg-black">
    <!-- Memories -->
    <b-carousel
      id="carousel-fade"
      fade
      indicators
      controls
      background="#000000"
      img-width="1280"
      img-height="720"
      style="text-shadow: 1px 1px 2px #333;"
      :interval="3000"
      class="overflow-hidden"
    >
      <b-carousel-slide
        v-for="memorie in memories"
        :key="memorie.id"
      >
        <b-card class="shadow text-white bg-overlay my-3 mx-auto">
          <b-card-body>
            <b-card-text class="h5">
              <b-link
                :href="memorie.link"
                target="_blank"
              >
                <h4 class="h5">
                  {{ memorie.title }}
                </h4>
                <small> {{ memorie.description }} </small>
              </b-link>
            </b-card-text>
          </b-card-body>
        </b-card>
        <template #img>
          <b-img-lazy
            v-bind="mainProps"
            :src="require(`~/assets/${memorie.img}`)"
            :alt="memorie.alt"
            class="d-block img-fluid w-100"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import MemoriesJson from '@/components/memories.json'
// Export
export default {
  // Name and components
  name: 'Memories',
  data () {
    return {
      // Load content
      memories: MemoriesJson.items,
      mainProps: {
        center: true,
        fluid: true,
        blank: true,
        blankColor: '#bbb'
      }
    }
  }
}
</script>

<style scoped>

  a:hover {
    color: #beb4d1;
  }

  .bg-overlay {
    background: linear-gradient(45deg, rgba(2, 0, 36, 0.63) 0%, rgba(2, 0, 36, 0.616) 0%);
  }

</style>
