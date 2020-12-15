<script>
  import {
    ChallengeDesc,
    ChallengeSpecs,
  } from '@/components/molecules/projects/allProjectMolecules.js'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .challenge {
    height: 550px;
    display: grid;
    place-items: center;
    @include size-s {
      height: 450px;
    }
    div {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-gap: 2em;
      @include size-s {
        grid-template-columns: auto auto;
        grid-template-rows: auto;
      }
      @include size-m {
        grid-gap: 6em;
      }
    }
  }
</style>

<section class="challenge">
  <div>
    <ChallengeDesc {project} />
    <ChallengeSpecs {project} />
  </div>
</section>
