<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
  import MyProject from '@/components/molecules/home/projects/Project.svelte'

  // Exports
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
        grid-template-columns: 1fr 1fr;
        div {
          &:nth-child(2) {
            margin-top: 83px;
          }
          &:nth-child(3) {
            margin-top: -83px;
          }
        }
      }
    }
  }
</style>

<section id="projects">
  <SlideBottom>
    <BlockTitle pageSectionTitle="Projects" />
  </SlideBottom>

  <div class="projectWrapper">
    {#each projects as project}
      <div>
        <SlideBottom>
          <MyProject {project} />
        </SlideBottom>
      </div>
    {/each}
  </div>
</section>
