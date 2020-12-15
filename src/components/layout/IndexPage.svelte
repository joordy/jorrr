<script>
  import {
    TextAboutElement,
    ContactElement,
    HomeElement,
    ProjectElement,
    SocialElement,
  } from '@/components/organisms/home/allHomeOrganisms.js'

  export let projects
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  * {
    color: $ui-soft-white !important;
  }
  main {
    background-color: $ui-dark-blue;
  }
</style>

<main>
  <section class="mainWrapper">
    <HomeElement />
    <TextAboutElement />
    <ProjectElement {projects} />
    <ContactElement />
    <SocialElement />
  </section>
</main>
