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
    @include lightMode {
      color: #1a1824 !important;
    }
  }
  main {
    background-color: $ui-dark-blue;
    @include lightMode {
      background-color: #f6f6f6;
    }
    .mainWrapper {
      @include size-s {
        width: 50vw !important;
      }
      @include size-l {
        width: 1000px !important;
      }
    }
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
