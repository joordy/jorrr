<script>
  import { BlockTitle } from '@/components/atoms/index.js'
  import MyProject from '@/components/molecules/projects/Project.svelte';
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    .wrapper {
      display: grid;
      grid-gap: 1em;
      @media screen and (min-width: 600px) {
        grid-template-columns: auto auto;
      }
    }
  }
</style>

<section id="cases">
  <BlockTitle pageSectionTitle="Cases"/>
  <div class="wrapper">
    <MyProject />
    <MyProject />
    <MyProject />
    <MyProject />
  </div>

</section>