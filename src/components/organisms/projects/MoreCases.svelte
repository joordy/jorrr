<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .more__cases {
    text-align: center;
    padding: 3rem 0rem;
    h3 {
      font-size: $h3-size;
      margin-bottom: $margin1;
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3em;
      width: 70%;
      margin: 0 auto;
      article {
        width: 100%;
        height: 250px;
        background-color: hotpink;
      }
    }
    // .cases {
    //   width: 70%;
    //   margin: 0 auto;
    //   display: flex;
    //   justify-content: space-between;
    //   article {
    //     width: 45%;
    //     height: 400px;
    //     background-color: hotpink;
    //   }
    // }
  }
</style>

<section class="more__cases">
  <h3>More Cases</h3>
  <section class="cases">
    {#each project.moreCases as otherCase}
      <article>
        <h4>{otherCase.name}</h4>
        <img src={otherCase.src} alt={otherCase.alt} />
      </article>
    {/each}
  </section>
</section>
