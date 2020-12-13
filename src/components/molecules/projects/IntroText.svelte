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
      text-decoration: none;
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
  <i class="fas fa-arrow-left">Ja</i>
  <a href="/"> Back</a>
  <section>
    <h2>Case study</h2>
    <h1>{project.title}</h1>
    <p>
      {project.intro}{project.intro}{project.intro}{project.intro}{project.intro}
    </p>
  </section>
</article>
