<script>
  // Animations
  import SlideLeft from '@/components/animations/SlideLeft.svelte'

  // Components
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
  import MyProject from '@/components/molecules/home/Project.svelte'

  export let projects
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;

    div {
      max-width: 100%;
      display: grid;
      grid-template-columns: auto;
      @include size-s {
        grid-template-columns: auto auto;
        grid-gap: 2rem;
      }
    }
  }
</style>

<section id="cases">
  <SlideLeft>
    <BlockTitle pageSectionTitle="Cases" />
  </SlideLeft>

  <div>
    {#each projects as project}
      <SlideLeft>
        <MyProject {project} />
      </SlideLeft>
    {/each}
  </div>
</section>
