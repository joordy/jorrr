<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 600px;
    height: 100%;
    margin: $margin3 0;
    a {
      color: white;
      text-decoration: none;
      span {
        font-family: 'FontAwesome';

        &::before {
          content: '\f060';
        }
      }
    }
    section {
      margin-top: $margin10;
      h2 {
        font-family: 'Inter', sans-serif;
        margin-top: 0;
        font-size: $h1-size;
      }
      .case {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 200;
        text-transform: uppercase;
      }
      p {
        &:nth-of-type(2) {
          margin-top: $margin4;
        }
        margin: 0 0 5px 0;
        span {
          display: inline-block;
          width: 80px;
          font-weight: $bold;
        }
      }
    }
  }
</style>

<article>
  <a href="/"> <span /> Terug</a>
  <section>
    <p class="case">Case study</p>
    <h2>{project.title}</h2>
    <p><span>Roles:</span>{project.services}</p>
    <p><span>Task:</span>{project.typeOfProject}</p>
    <p><span>Tools:</span>{project.languages}</p>
    <p><span>Team:</span>{project.teamproject}</p>
  </section>
</article>
