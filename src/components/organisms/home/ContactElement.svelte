<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: 60vh;
    min-height: 550px;
    h3 {
      font-size: $h3-size;
      font-weight: 700;
    }
    p {
      font-family: 'IBM Plex Mono', monospace;
      max-width: 330px;
      margin: $margin2 0;
    }
    a {
      font-weight: 700;
      text-decoration: none;
      color: $ui-blue;
      border-bottom: 2px solid $ui-blue;
      transition: 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>

<section id="contact">
  <SlideBottom>
    <BlockTitle pageSectionTitle="Contact" />
  </SlideBottom>

  <SlideBottom>
    <h3>Say hi!</h3>

    <p>
      Are you interested in working with me? Please feel free to contact me for
      a project or a collaboration together.
    </p>

    <a href="mailto:me@jorrr.dev?subject=Question from website">Send e-mail</a>
  </SlideBottom>
</section>
