<script>
  import FormElement from '@/components/molecules/other/FormElement.svelte'
  import FormInformation from '@/components/molecules/other/FormInformation.svelte'
  // import SocialsIcons from '@/components/atoms/SocialsIcons.svelte'
  // import BlockTitle from '@/components/atoms/BlockTitle.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  .contact {
    min-height: 100vh;
    div {
      padding-top: calc(75px + 3em);
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
    }
    article {
      padding: 10em 0em;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5em;
      @include size-s {
        grid-template-columns: 3fr 4fr;
      }
      section {
        font-family: 'IBM Plex Mono', monospace;
        height: 200px;
      }
    }
  }
</style>

<section class="contact">
  <div><a href="/"> <span /> Back</a></div>

  <article>
    <section>
      <FormInformation />
    </section>

    <FormElement />
  </article>
</section>
