<script>
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
      }
    }
  }
</style>

<section id="cases">
  <BlockTitle pageSectionTitle="Cases" />
  <div>
    {#each projects as project}
      <MyProject {project} />
    {/each}
  </div>
</section>
