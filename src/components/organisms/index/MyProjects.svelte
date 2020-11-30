<script>
  import { BlockTitle } from '@/components/atoms/index.js'
  import MyProject from '@/components/molecules/home/Project.svelte';

  export let projects;
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    width: 100%;
    .allProjects {
      max-width: 100%;
      display: grid;
      grid-template-columns: auto;
      @media screen and (min-width: 800px) {
        grid-template-columns: auto auto;
      }
    }
  }
</style>

<section id="cases">
  <BlockTitle pageSectionTitle="Cases"/>
  <div class="allProjects">

    {#each projects as project}
      <MyProject project={project}/>
    {/each}
    <!-- <MyProject />
    <MyProject />
    <MyProject />
    <MyProject /> -->
  </div>

</section> 