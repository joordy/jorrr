<script>
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
    }
  }
</style>

<section id="contact">
  <BlockTitle pageSectionTitle="Contact" />

  <h3>Say hi!</h3>

  <p>
    Are you interested in working with me? Please feel free to contact me for a
    project or a collaboration together.
  </p>

  <a href="mailto:me@jorrr.dev?subject=Question from website">Send e-mail</a>
</section>
