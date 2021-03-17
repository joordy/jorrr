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

    div {
      max-width: 100%;
      display: grid;
      grid-template-columns: auto;
      @include size-s {
        grid-template-columns: auto auto;
        grid-gap: 2rem;
        div {
          &:nth-child(2) {
            margin-top: 200px;
          }
          &:nth-child(3) {
            margin-top: -200px;
          }
        }
      }
    }
  }
</style>

<section id="cases">
  <SlideBottom>
    <BlockTitle pageSectionTitle="Cases" />
  </SlideBottom>

  <div>
    {#each projects as project}
      <div>
        <SlideBottom>
          <MyProject {project} />
        </SlideBottom>
      </div>
    {/each}
  </div>
</section>
