<script>
  import Navigation from '@/components/organisms/index/Navigation.svelte';
  import Socials from '@/components/organisms/index/Socials.svelte';
  import HomeHeader from '@/components/organisms/index/HomeHeader.svelte';
  import AboutMe from '@/components/organisms/index/AboutMe.svelte';
  import MyProjects from '@/components/organisms/index/MyProjects.svelte';
  import ContactMe from '@/components/organisms/index/ContactMe.svelte';
</script>

<style lang="scss">
  section {
      width: 75vw;
      margin: 0 auto;
    @media screen and (min-width: 1190px) {
      width: 70vw;
      // padding: 1em 12.5em;
      
    }
  }
</style>

<section>
  <Socials />
  <Navigation  />
  <HomeHeader />
  <AboutMe />
  <MyProjects />
  <ContactMe />
</section>