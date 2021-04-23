<template>
  <!-- Projects -->
  <b-container fluid class="projects-list py-5 bg-purple-grey-linear">
    <!-- Introduction -->
    <b-container class="content-layout mt-5">
      <h1 class="text-center text-whitesmoke">
        {{ content.projectTitle[language] }}
      </h1>
      <hr class="mx-auto">
      <p class="text-center text-white text-description">
        {{ content.projectDescription[language] }}
      </p>
    </b-container>
    <!-- Solo Projects -->
    <b-container id="SoloProjects" class="content-layout mt-5">
      <h2 class="text-center text-whitesmoke">
        {{ content.projectSoloTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <ProjectsCard
        :projects="projects"
        type="Solo"
        class="mt-5"
      />
    </b-container>
    <!-- Team Projects -->
    <b-container id="TeamProjects" class="content-layout mt-5">
      <h2 class="text-center text-whitesmoke">
        {{ content.projectTeamTitle[language] }}
      </h2>
      <hr class="mx-auto">
      <ProjectsCard
        :projects="projects"
        type="Team"
        class="mt-5"
      />
    </b-container>
    <!-- Memories -->
    <b-container class="content-layout">
      <h2 class="text-center text-whitesmoke mt-5">
        <b-icon icon="suit-heart-fill" animation="throb" class="h2" />
        {{ content.projectMemorieTitle[language] }}
        <b-icon icon="suit-heart-fill" animation="throb" class="h2" />
      </h2>
      <hr class="mx-auto">
      <Memories
        class="mt-5"
      />
    </b-container>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import ProjectsJson from '@/components/projects.json'
import ProjectsCard from '@/components/ProjectsCard.vue'
// Export
export default {
  // Name and components
  name: 'ProjectsList',
  components: {
    ProjectsCard
  },
  // Properties received from parent
  props: {
    content: String,
    language: String
  },
  data () {
    return {
      // Load content
      projects: ProjectsJson.items
    }
  }
}
</script>
