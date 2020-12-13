<script>
  import ProjectHeader from '@/components/organisms/projects/ProjectHeader.svelte'
  import Challenge from '@/components/organisms/projects/Challenge.svelte'
  import SmallImages from '@/components/organisms/projects/SmallImages.svelte'
  import Result from '@/components/organisms/projects/Result.svelte'
  import LargeImages from '@/components/organisms/projects/LargeImages.svelte'
  import MoreCases from '@/components/organisms/projects/MoreCases.svelte'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  main {
    background-color: white;
    position: relative;
  }
</style>

<main>
  <section class="mainWrapper">
    <ProjectHeader {project} />
    <Challenge {project} />
    <SmallImages {project} />
    <Result {project} />
    <LargeImages {project} />
    <MoreCases {project} />
  </section>
</main>
