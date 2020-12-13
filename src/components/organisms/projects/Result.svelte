<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 70vw;
    margin: 5rem auto 5rem auto;
    .result {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 6em;
    }
  }
</style>

<section>
  <h5>Result</h5>
  <h2>{project.subTitle}</h2>

  <section class="result">
    <article>
      <p>{project.detailsOne}</p>
    </article>
    <article>
      <p>{project.detailsOne}</p>
    </article>
  </section>
</section>
