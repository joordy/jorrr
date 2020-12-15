<script>
  import { BlockTitle } from '@/components/atoms/allAtoms.js'
  import { MyProject } from '@/components/molecules/home/index.js'

  export let projects
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    .allProjects {
      max-width: 100%;
      display: grid;
      grid-template-columns: auto;
      @include size-s {
        grid-template-columns: auto auto;
      }
    }
  }
</style>

<section id="cases">
  <BlockTitle pageSectionTitle="Cases" />
  <div class="allProjects">
    {#each projects as project}
      <MyProject {project} />
    {/each}
  </div>
</section>
