<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  aside {
    margin-top: 2rem;
    @include size-m {
      margin-top: 0;
    }
    h4 {
      margin-bottom: 0.5rem;
    }
    p,
    a {
      word-wrap: break-word;
    }
    hr {
      margin: 1rem 0;
    }
    a {
      color: $ui-green;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
        padding-left: 0.5rem;
      }
    }
  }
</style>

<aside>
  <h4>Services:</h4>
  <p>{project.services}</p>
  <hr />
  <h4>Tools:</h4>
  <p>{project.languages}</p>
  <hr />
  <h4>Github repository:</h4>
  <a href={project.codePreview}>{project.codePreview}</a>
  <hr />
  <h4>Live website:</h4>
  <a href={project.livePreview}>{project.livePreview}</a>
</aside>
