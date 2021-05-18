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
</style>

<section>
  <SlideBottom>
    <Slider projectImages={project.imgSlider} />
  </SlideBottom>
</section>
