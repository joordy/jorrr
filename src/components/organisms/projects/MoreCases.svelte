<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    h2,
    h3 {
      font-family: 'Inter', sans-serif;
    }
    width: 100%;
    height: 600px;
    margin: 2em auto;
    text-align: center;
    @include size-xs {
      height: 400px;
    }
    h2 {
      font-size: $h3-size;
    }
    div {
      max-width: 100%;
      margin: $margin2 0;
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
  <h2>Meer Cases</h2>
  <div class="cases">
    {#each project.moreCases as otherCase}
      <a href={otherCase.pathname}>
        <h3>{otherCase.name}</h3>
        <img src={otherCase.src} alt={otherCase.alt} />
      </a>
    {/each}
  </div>
</section>
