<script>
  import ChallengeDesc from '@/components/molecules/projects/ChallengeDesc.svelte'
  import ChallengeSpecs from '@/components/molecules/projects/ChallengeSpecs.svelte'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .challenge {
    width: 70vw;
    margin: 5rem auto 5rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 6em;
    color: $ui-dark-blue;
  }
</style>

<section class="challenge">
  <ChallengeDesc {project} />
  <ChallengeSpecs {project} />
</section>
