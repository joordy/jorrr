<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
  import MyProject from '@/components/molecules/home/Project.svelte'

  export let projects
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    .projectWrapper {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      @include size-s {
        grid-template-columns: auto auto;
      }
    }
  }
</style>

<section id="cases">
  <SlideBottom>
    <BlockTitle pageSectionTitle="Cases" />
  </SlideBottom>

  <div class="projectWrapper">
    {#each projects as project}
      <SlideBottom>
        <MyProject {project} />
      </SlideBottom>
    {/each}
  </div>
</section>
