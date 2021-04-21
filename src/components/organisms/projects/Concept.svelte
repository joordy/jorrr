<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import ConceptOne from '@/components/molecules/projects/concept/ConceptOne.svelte'
  import ConceptTwo from '@/components/molecules/projects/concept/ConceptTwo.svelte'
  import ConceptImg from '@/components/molecules/projects/concept/ConceptImg.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding: 5rem 0;
    article {
      display: flex;
      flex-direction: column;
      h2 {
        font-family: 'Inter', sans-serif;
        margin: 75px 0px 25px 0px;
        font-size: $h2-size;
      }
      p {
        margin-bottom: 1rem;
      }
      aside {
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
          /* color: #4591da; */
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
    }
    @include size-m {
      article {
        flex-direction: row;
        justify-content: space-between;
        aside {
          width: calc(50% - 2rem);
          &:first-of-type {
            margin-right: 1rem;
          }
          &:last-of-type {
            margin-top: calc(142px - 1rem);
            margin-left: 1rem;
          }
        }
      }
    }
  }
</style>

<section>
  <SlideBottom>
    <article>
      <aside>
        <SlideBottom>
          <h2>Concept</h2>
          {#each project.assignment as assignment}
            <p>{assignment}</p>
          {/each}
        </SlideBottom>
      </aside>
      <aside>
        <SlideBottom>
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
        </SlideBottom>
      </aside>
    </article>
  </SlideBottom>
</section>
