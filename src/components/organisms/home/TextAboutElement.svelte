<script>
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    article {
      display: block;
      @include size-s {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
      }
      @include size-l {
        grid-gap: 6em;
      }
      p {
        font-family: 'IBM Plex Mono', monospace;
        width: 100%;
        margin-bottom: $margin2;
        line-height: 24px;
      }
    }
  }
</style>

<section id="about">
  <BlockTitle pageSectionTitle="About" />
  <article>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
      elementum tincidunt turpis consectetur viverra purus dolor varius mi. Mi
      phasellus quis consectetur feugiat. Platea ipsum eleifend id tristique
      egestas molestie augue. Elementum nam eu consectetur convallis vestibulum,
      suscipit. Eleifend phasellus nulla quis elementum egestas nunc auctor. At
      nibh mauris viverra in lacus, maecenas ac. Varius lorem mattis eget
      ullamcorper faucibus nunc. Eu tristique vel, nibh pellentesque.
    </p>
    <p>Tech Stack:</p>
  </article>
</section>
