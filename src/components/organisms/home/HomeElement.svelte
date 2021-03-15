<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import HeaderImage from '@/components/molecules/home/HeaderImage.svelte'
  import HeaderText from '@/components/molecules/home/HeaderText.svelte'
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
