<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    height: 600px;
    margin: 2em auto;
    text-align: center;
    @include size-xs {
      height: 400px;
    }
    h3 {
      font-size: $h3-size;
    }
    div {
      max-width: 700px;
      margin: $margin2 auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2em;
      @include size-xs {
        grid-template-columns: 1fr 1fr;
      }
      a {
        color: $ui-dark-blue;
        text-decoration: none;
        transition: 0.2s;
        &:hover {
          transform: scale(1.1);
        }
        h4 {
          font-size: $h4-size;
        }
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
    }
  }
</style>

<section class="more__cases">
  <h3>Meer Cases</h3>
  <div class="cases">
    {#each project.moreCases as otherCase}
      <a href={otherCase.pathname}>
        <h4>{otherCase.name}</h4>
        <img src={otherCase.src} alt={otherCase.alt} />
      </a>
    {/each}
  </div>
</section>
