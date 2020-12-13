<script>
  import IntroText from '@/components/molecules/projects/IntroText.svelte'
  import MockupImage from '@/components/molecules/projects/MockupImage.svelte'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: 60vh;
    background-color: $ui-dark-blue;
    color: $ui-soft-white;
    position: relative;
    overflow: hidden;
  }
</style>

<section>
  <IntroText {project} />
  <MockupImage {project} />
</section>
