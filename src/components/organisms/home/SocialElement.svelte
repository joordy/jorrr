<script>
  // Components
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
    @include size-m {
      width: 65px;
      left: 1rem;
    }
    @include size-l {
      left: 1.875rem;
    }
  }
</style>

<section id="socials">
  <SocialHeader />
</section>
