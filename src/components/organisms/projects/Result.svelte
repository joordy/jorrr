<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import Slider from '@/components/molecules/projects/slider/Slider.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  section {
    h2 {
      font-family: 'Inter', sans-serif;
      margin: 75px 0 25px 0;
      font-size: $h2-size;
    }
  }
</style>

<section>
  <!-- <SlideBottom>
    <h2>Verzin een naam</h2>
  </SlideBottom> -->

  <SlideBottom>
    <Slider projectImages={project.imgSlider} />
  </SlideBottom>
</section>
