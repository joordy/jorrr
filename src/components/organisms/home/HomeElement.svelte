<script>
  // import Saos from 'saos'
  import IntroImage from '@/components/molecules/home/IntroImage.svelte'
  import IntroText from '@/components/molecules/home/IntroText.svelte'
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

  // @keyframes -global-from-left {
  //   0% {
  //     transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
  //     opacity: 1;
  //   }
  //   100% {
  //     transform: rotateX(0deg) translateX(0) skewX(0deg);
  //     opacity: 1;
  //   }
  // }
  // @keyframes -global-from-right {
  //   0% {
  //     transform: rotateX(50deg) translateX(300vw) skewX(-50deg);
  //     opacity: 1;
  //   }
  //   100% {
  //     transform: rotateX(0deg) translateX(0) skewX(0deg);
  //     opacity: 1;
  //   }
  // }
</style>

<section id="home">
  <!-- <Saos animation={'from-left 1.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}> -->
  <IntroText />
  <!-- </Saos> -->
  <!-- <Saos animation={'from-right 1.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}> -->
  <IntroImage />
  <!-- </Saos> -->
</section>
