<script>
  export let project;
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  .result {
    width: 70vw;
    margin: 3rem auto 3rem auto;
    .text__result {
      display: flex;
      justify-content: space-between;
      article {
        width: 47.5%;
      }
    }
  }
</style>

<section class="result">
    <h5>Result</h5>
    <h2>{project.subTitle}</h2>

  <section class="text__result">
    <article>
      <p>{project.detailsOne}</p>
    </article> 
    <article>
      <p>{project.detailsOne}</p>
    </article> 
  </section>
</section>