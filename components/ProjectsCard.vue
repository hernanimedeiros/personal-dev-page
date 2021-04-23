<template>
  <!-- Projects -->
  <b-container fluid class="projects-card">
    <b-row>
      <b-col
        v-for="project in projects"
        :key="project.id"
        lg="4"
        fluid
        class="p-0"
      >
        <b-card
          v-if="project.type===type & project.level==='highlighted'"
          :key="project.id"
          bg-variant="transparent"
          text-variant="white"
          header-bg-variant="light"
        >
          <template #header>
            <b-img-lazy
              v-bind="mainProps"
              :src="require(`~/assets/${project.image}`)"
              :alt="project.name"
            />
          </template>
          <b-card-text>
            <b-link
              :href="project.link"
              target="_blank"
            >
              <h3 class="h6">
                {{ project.title }}
              </h3>
              <p>
                {{ project.description }}
              </p>
            </b-link>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// Export
export default {
  // Name and components
  name: 'ProjectCard',
  // Properties received from parent
  props: {
    type: String,
    projects: Object
  },
  data () {
    return {
      // Load content
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb'
      }
    }
  }
}
</script>

<style scoped>

  .card-header {
    padding:0px;
  }

  a:hover {
    color: #beb4d1;
  }

</style>
