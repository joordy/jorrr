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
  {#if project.kindOfProject}
    <article>
      <h4>Soort project</h4>
      <div class="wrapper">
        <div>
          <p>{project.kindOfProject}</p>
        </div>
      </div>
    </article>
  {/if}

  {#if project.services}
    <article>
      <h4>Methoden</h4>
      <div class="wrapper">
        {#each project.services as service}
          <div>
            <p>{service}</p>
          </div>
        {/each}
      </div>
    </article>
  {/if}

  {#if project.languages}
    <article>
      <h4>(Programmer) talen</h4>
      <div class="wrapper">
        {#each project.languages as language}
          <div>
            <p>{language}</p>
          </div>
        {/each}
      </div>
    </article>
  {/if}

  {#if project.livePreview}
    <article>
      <h4>Live Preview</h4>
      <a href={project.livePreview}>Bekijk het project</a>
    </article>
  {/if}
  {#if project.githubSource}
    <article>
      <h4>Github link</h4>
      <a href={project.githubSource}>GitHub Repository</a>
    </article>
  {/if}
</section>
