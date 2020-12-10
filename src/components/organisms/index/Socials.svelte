<script>
  import SocialHeader from '@/components/molecules/home/SocialHeader.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    position: fixed;
    top: 0;
    left: 0.675rem;
    height: 100vh;
    width: 45px;
    @media screen and (min-width: 600px) {
      width: 65px;
      left: 1rem;
    }
    @media screen and (min-width: 1195px) {
      left: 1.875rem;
    }
  }
</style>

<section id="socials">
  <SocialHeader />
</section>
