<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import HeaderImage from '@/components/molecules/home/intro/HeaderImage.svelte'
  import HeaderText from '@/components/molecules/home/intro/HeaderText.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    height: 100%;
    padding-top: 17vh;
    padding-bottom: 4em;
    display: grid;
    grid-template-columns: 1fr;
    @include size-s {
      padding-top: clamp(5em, 25vw, 22.5em);
      padding-bottom: clamp(5em, 25vw, 22.5em);
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
    @include size-m {
      left: 0;
      width: 100%;
      grid-template-columns: 3fr 4fr;
    }
  }
</style>

<section id="home">
  <SlideBottom>
    <HeaderText />
  </SlideBottom>

  <SlideBottom>
    <HeaderImage />
  </SlideBottom>
</section>
