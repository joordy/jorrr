<script>
  import SmallCarousel from '@/components/molecules/projects/SmallCarousel.svelte'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  .process {
    h2 {
      margin: 75px 0 25px 0;
      font-size: $h2-size;
    }
    p {
      margin: $margin2 0;
    }
  }
</style>

<section class="process">
  <h2>Process</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorum qui
    labore nostrum maiores debitis recusandae facere, ipsa suscipit eius esse
    possimus numquam inventore sunt deserunt quas iste voluptate odit!
  </p>

  <SmallCarousel {project} />
</section>
