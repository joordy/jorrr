<script>
  import {
    IntroImage,
    IntroText,
  } from '@/components/molecules/home/allHomeMolecules.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: 110vh;
    position: relative;
    @include size-m {
      height: 90vh;
    }
  }
</style>

<section id="home">
  <IntroText />
  <IntroImage />
</section>
