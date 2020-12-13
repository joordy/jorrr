<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  section {
    article {
      margin-bottom: $margin1;

      h4 {
        margin-bottom: 0.5em;
      }
      a {
        color: $ui-dark-blue;
      }
      .wrapper {
        display: flex;
        flex-wrap: wrap;
        div {
          margin: 3px 3px 3px 0;
          border-radius: 4px;
          background-color: #eaeaea;
        }
        p {
          padding: 0.2em 0.7em;
        }
      }
    }
  }
</style>

<section>
  <article>
    <h4>Services</h4>
    <p>{project.services}</p>
  </article>
  <article>
    <h4>Languages</h4>
    <div class="wrapper">
      {#each project.languages as language}
        <div>
          <p>{language}</p>
        </div>
      {/each}
    </div>
  </article>
  <article>
    <h4>Live Preview</h4>
    <a href={project.livePreview}>Bekijk het project</a>
  </article>
</section>
