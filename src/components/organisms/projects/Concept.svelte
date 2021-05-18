<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import ConceptInfo from '@/components/molecules/projects/concept/ConceptInfo.svelte'
  import ConceptDesc from '@/components/molecules/projects/concept/ConceptDesc.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding: 5rem 0;
    h3 {
      font-family: 'Inter', sans-serif;
      margin: 75px 0px 25px 0px;
      font-size: $h2-size;
    }
    article {
      display: flex;
      flex-direction: column;
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
        display: grid;
        grid-template-columns: 4fr 3fr;
        grid-gap: 3rem;
      }
    }
  }
</style>

<section>
  <SlideBottom>
    <SlideBottom>
      <h3>Concept</h3>
    </SlideBottom>
    <article>
      <SlideBottom>
        <ConceptDesc {project} />
      </SlideBottom>
      <SlideBottom>
        <ConceptInfo {project} />
      </SlideBottom>
    </article>
  </SlideBottom>
</section>
