<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import ProcessText from '@/components/molecules/projects/process/ProcessText.svelte'

  // Exports
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
  <SlideBottom>
    <h2>Process</h2>
  </SlideBottom>

  <SlideBottom>
    <ProcessText {project} />
  </SlideBottom>
</section>
