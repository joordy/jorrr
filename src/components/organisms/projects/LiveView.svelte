<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import LivePreview from '@/components/molecules/projects/preview/LivePreview.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: grid;
    place-items: center;
    height: 200px;
    text-align: center;
  }
</style>

<SlideBottom>
  <section>
    <LivePreview {project} />
  </section>
</SlideBottom>
