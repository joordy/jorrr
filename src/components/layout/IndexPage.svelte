<script>
  import Navigation from '@/components/organisms/index/Navigation.svelte'
  import Socials from '@/components/organisms/index/Socials.svelte'
  import HomeHeader from '@/components/organisms/index/HomeHeader.svelte'
  import AboutMe from '@/components/organisms/index/AboutMe.svelte'
  import MyProjects from '@/components/organisms/index/MyProjects.svelte'
  import ContactMe from '@/components/organisms/index/ContactMe.svelte'

  export let projects
</script>

<style lang="scss">
  section {
    position: relative;
    width: calc(100vw - 2em);
    padding: 1em;
    margin: 0 auto;
    @media screen and (min-width: 600px) {
      padding: 0;
      width: 70vw;
    }
    // @media screen and (min-width: 1195px) {
    //   width: 70vw;
    // }
  }
</style>

<section>
  <Socials />
  <!-- <Navigation  /> -->
  <HomeHeader />
  <AboutMe />
  <MyProjects {projects} />
  <ContactMe />
</section>
