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
      h1 {
        margin-top: 0;
        font-size: $h1-size;
      }
      h2 {
        font-size: 16px;
        font-weight: 200;
        text-transform: uppercase;
      }
      p {
        margin-top: $margin4;
        width: 300px;
        @include size-m {
          width: 400px;
        }
      }
    }
  }
</style>

<article>
  <a href="/"> <span /> Back</a>
  <section>
    <h2>Case study</h2>
    <h1>{project.title}</h1>
    <p>{project.longIntro}</p>
  </section>
</article>
