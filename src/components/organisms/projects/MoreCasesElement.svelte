<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 95vw;
    margin: 2em auto;
    text-align: center;
    @include size-s {
      width: 80vw;
    }
    @include size-xl {
      width: 70vw;
    }
    @include size-ultra {
      width: 50vw;
    }
    h3 {
      font-size: $h3-size;
    }
    div {
      margin: $margin2 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2em;
      @include size-s {
        grid-template-columns: 1fr 1fr;
      }
      article {
        height: 220px;
        h4 {
          font-size: $h4-size;
        }
      }
    }
  }
  // section {
  //   width: 95vw;
  //   margin: 0 auto;
  //   text-align: center;
  //   @include size-s {
  //     width: 80vw;
  //   }
  //   @include size-xl {
  //     width: 70vw;
  //   }
  //   @include size-ultra {
  //     width: 50vw;
  //   }
  //   h3 {
  //     font-size: $h3-size;
  //     margin-bottom: $margin1;
  //   }
  //   div {
  //     display: grid;
  //     grid-template-columns: 1fr;
  //     grid-gap: 3em;
  //     width: 100%;
  //     margin: 0 auto 2em auto;
  //     @include size-s {
  //       grid-template-columns: 1fr 1fr;
  //     }
  //     article {
  //       width: 100%;
  //       height: 200px;
  //       background-color: hotpink;
  //     }
  //   }
  // }
  // .more__cases {
  //   text-align: center;
  //   padding: 3rem 0rem;
  //   h3 {
  //     font-size: $h3-size;
  //     margin-bottom: $margin1;
  //   }
  //   section {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr;
  //     grid-gap: 3em;
  //     width: 70%;
  //     margin: 0 auto;
  //     article {
  //       width: 100%;
  //       height: 250px;
  //       background-color: hotpink;
  //     }
  //   }
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
  //}
</style>

<section class="more__cases">
  <h3>More Cases</h3>
  <div class="cases">
    {#each project.moreCases as otherCase}
      <article>
        <h4>{otherCase.name}</h4>
        <img src={otherCase.src} alt={otherCase.alt} />
      </article>
    {/each}
  </div>
</section>
