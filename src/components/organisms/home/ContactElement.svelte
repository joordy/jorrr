<script>
  import { BlockTitle } from '@/components/atoms/allAtoms.js'
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
      width: 330px;
      margin: $margin2 0;
    }
    a {
      font-weight: 700;
      text-decoration: none;
      color: $ui-turquoise;
      border-bottom: 2px solid $ui-turquoise;
    }
  }
</style>

<section id="contact">
  <BlockTitle pageSectionTitle="Contact" />

  <h3>Say hi!</h3>
  <p>
    Interested in working together? Feel free to contact me for a project or an
    collaboration.
  </p>
  <a href="/contact">Send e-mail</a>
</section>
