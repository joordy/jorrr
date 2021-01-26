<script>
  import TextAboutElement from '@/components/organisms/home/TextAboutElement.svelte'
  import ContactElement from '@/components/organisms/home/ContactElement.svelte'
  import HomeElement from '@/components/organisms/home/HomeElement.svelte'
  import ProjectElement from '@/components/organisms/home/ProjectElement.svelte'
  import SocialElement from '@/components/organisms/home/SocialElement.svelte'

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
