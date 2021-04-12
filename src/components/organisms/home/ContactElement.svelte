<script>
  // Animations & Components
  import SlideBottom from '@/components/animations/SlideBottom.svelte'
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    min-height: 35rem;
    @include size-s {
      padding-bottom: 5rem;
    }
  }
  h3 {
    margin-top: 3em;
    font-size: $h3-size;
    font-weight: 700;
  }
  p {
    font-family: 'IBM Plex Mono', monospace;
    max-width: 330px;
    margin: $margin2 0;
  }
  /* button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    font-weight: 700;
    text-decoration: none;
    color: $ui-blue;
    border-bottom: 2px solid $ui-blue;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  } */
</style>

<section id="contact">
  <SlideBottom>
    <BlockTitle pageSectionTitle="Contact" />
  </SlideBottom>

  <SlideBottom>
    <h3>Get In Touch</h3>

    <p>
      Are you interested in working with me? Please feel free to contact me for
      a project or a collaboration together.
    </p>

    <ButtonLight linkTO="/contact" textCTA="Contact me!" />
  </SlideBottom>
</section>
