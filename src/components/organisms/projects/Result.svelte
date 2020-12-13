<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    h5 {
      font-size: $h5-size;
      margin: $margin1 0;
    }
    h2 {
      font-size: $h2-size;
      margin: 0 0 $margin1 0;
    }
    article {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2em;
      margin: $margin2 0;
      @include size-s {
        grid-template-columns: 1fr 1fr;
      }
      @include size-m {
        grid-gap: 6em;
      }
    }
  }
</style>

<section>
  <h5>Result</h5>
  <h2>{project.subTitle}</h2>

  <article class="result">
    <p>{project.detailsOne}</p>
    <p>{project.detailsOne}</p>
  </article>
</section>
