<script>
  // Animations
  import SlideLeft from '@/components/animations/SlideLeft.svelte'

  // Components
  import LargeCarousel from '@/components/molecules/projects/LargeCarousel.svelte'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  section {
    h2,
    p {
      font-family: 'Inter', sans-serif;
    }
    h2 {
      margin: 75px 0 25px 0;
      font-size: $h2-size;
    }
    p {
      margin: $margin2 0;
    }
  }
</style>

<section>
  <SlideLeft>
    <h2>Result</h2>
  </SlideLeft>

  <SlideLeft>
    <LargeCarousel {project} />
  </SlideLeft>
</section>
