<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import ConceptOne from '@/components/molecules/projects/concept/ConceptOne.svelte'
  import ConceptTwo from '@/components/molecules/projects/concept/ConceptTwo.svelte'
  import ConceptImg from '@/components/molecules/projects/concept/ConceptImg.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding-top: 2em;
    h2 {
      font-family: 'Inter', sans-serif;
      margin: 75px 0px 25px 0px;
      font-size: $h2-size;
    }
  }
</style>

<section>
  <SlideBottom>
    <h2>Concept</h2>
  </SlideBottom>

  <SlideBottom>
    <ConceptOne {project} />
  </SlideBottom>

  <SlideBottom>
    <ConceptImg {project} />
  </SlideBottom>

  <SlideBottom>
    <ConceptTwo {project} />
  </SlideBottom>
</section>
