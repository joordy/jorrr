<script>
  // Animations
  import SlideLeft from '@/components/animations/SlideLeft.svelte'
  import SlideRight from '@/components/animations/SlideRight.svelte'

  // Components
  import HeaderImage from '@/components/molecules/home/HeaderImage.svelte'
  import HeaderText from '@/components/molecules/home/HeaderText.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    /* min-height: 600px; */
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
  <SlideLeft>
    <HeaderText />
  </SlideLeft>

  <SlideRight>
    <HeaderImage />
  </SlideRight>
</section>
