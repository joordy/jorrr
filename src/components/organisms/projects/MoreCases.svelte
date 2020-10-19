<script>
  export let project;
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';
  .more__cases {
    text-align: center;
    padding: 3rem 0rem;
    .cases {  
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      article {
        width: 45%;
        height: 400px;
        background-color: hotpink;
      }
    }
  }
</style>

<section class="more__cases">
  <h3>More Cases</h3>
  <section class="cases">
    {#each project.moreCases as otherCase}
      <article>
        <h4>{otherCase.name}</h4>
        <img src={otherCase.src} alt={otherCase.alt}>
      </article>
    {/each}
  </section>
</section>