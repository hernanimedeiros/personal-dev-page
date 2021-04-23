<template>
  <b-container fluid class="my-3 ">
    <b-dropdown
      id="dropdown-offset"
      offset="25"
      :text="courseSelection"
      variant="outline-dark"
    >
      <b-dropdown-item
        v-for="option in options"
        :key="option.id"
        :value="option.label"
        @click="changeCategorie(option.label)"
      >
        {{ option.label }}
      </b-dropdown-item>
    </b-dropdown>
    <b-container class="education-block">
      <ul class="mt-3 pl-0 ml-0">
        <template v-for="course in courses">
          <b-link
            v-if="course.year===courseSelection && course.certificate==='true'"
            :key="course.id"
            :href="course.link"
            target="_blank"
            class="pl-0 ml-0"
          >
            <li>
              <p class="text-left">
                <strong>{{ course.title }}</strong> ({{ course.site }}, {{ course.duration }}h)
              </p>
            </li>
          </b-link>
        </template>
      </ul>
    </b-container>
  </b-container>
</template>

<script>
// Import
// @ is an alias to /src
import CourseWithCertification from '@/components/courses.json'
import YearsSelection from '@/components/year_selection.json'
export default {
  // Name and components
  name: 'HeroTimeline',
  // Properties received from parent
  props: {
    content: Object,
    language: String
  },
  data () {
    return {
      // Load content
      courses: CourseWithCertification.courses.reverse(),
      options: YearsSelection.labels,
      courseSelection: 'Top'
    }
  },
  methods: {
    // Change option
    changeCategorie (option) {
      this.courseSelection = option
    }
  }
}
</script>

<style scoped>

    a:hover{
        color: darkolivegreen;
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
        .education-block { padding-left:20%; }
    }

</style>
