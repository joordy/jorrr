<script>
  // import Navigation from '@/components/organisms/index/Navigation.svelte'
  //   <!-- <Navigation  /> -->

  import Socials from '@/components/organisms/index/Socials.svelte'
  import HomeHeader from '@/components/organisms/index/HomeHeader.svelte'
  import AboutMe from '@/components/organisms/index/AboutMe.svelte'
  import MyProjects from '@/components/organisms/index/MyProjects.svelte'
  import ContactMe from '@/components/organisms/index/ContactMe.svelte'

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
    <Socials />
    <HomeHeader />
    <AboutMe />
    <MyProjects {projects} />
    <ContactMe />
  </section>
</main>
