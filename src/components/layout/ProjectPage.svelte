<script>
  import ProjectHeader from '@/components/organisms/projects/ProjectHeader.svelte'
  import Challenge from '@/components/organisms/projects/Challenge.svelte'
  import SmallImages from '@/components/organisms/projects/SmallImages.svelte'
  import Result from '@/components/organisms/projects/Result.svelte'
  import LargeImages from '@/components/organisms/projects/LargeImages.svelte'
  import MoreCases from '@/components/organisms/projects/MoreCases.svelte'

  export let project;

</script>

<style lang="scss">
  section {
    position: relative;
    background-color: white;
    color: black;
    // width: calc(100vw - 2em);
    // padding: 1em;
    // margin: 0 auto;
    @media screen and (min-width: 600px) {
      // padding: 0;
      // width: 70vw;
    }
  }
</style>


<section>
  <ProjectHeader project={project} />
  <Challenge project={project}/>
  <SmallImages project={project}/>
  <Result project={project}/>
  <LargeImages project={project}/>
  <MoreCases project={project}/>
</section>