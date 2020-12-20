<script>
  import {
    ButtonFilled,
    ButtonOutline,
    ButtonSubject,
  } from '@/components/atoms/allAtoms.js'
  const textTitle = `hi! I'm Jordy Fronik`
  const textOne =
    'I design and creates stuff on the internet. I’m a creative Frontend Developer with a passion for buidling fluid web applications.'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 80%;
    max-width: 350px;
    padding-top: clamp(200px, 20vh, 30vh);
    @include size-m {
      padding-top: 30vh;
      width: 400px;
    }
    p {
      font-family: 'IBM Plex Mono', monospace;
      text-transform: uppercase;
      font-size: $large-font-size;
      margin-bottom: $margin1;
    }
    // div {
    //   p {
    //     font-family: 'IBM Plex Mono', monospace;
    //     text-transform: uppercase;
    //     font-size: $large-font-size;
    //     display: block;
    //     padding-right: 4px;
    //     border-right: 4px solid #66ccff;
    //     animation: blink 1s infinite;
    //   }
    // }
    // p {
    //   // // &:nth-of-type(1) {
    //   // //   display: inline;
    //   // //   padding-right: 4px;
    //   // //   border-right: 4px solid #66ccff;
    //   // //   animation: blink 1s infinite;
    //   // // }
    //   // &:nth-of-type(2) {
    //   //   margin: 2rem 0rem;
    //   // }
    // }
    div {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
    }
  }
  // @keyframes blink {
  //   50% {
  //     border-right: none;
  //   }
  // }
</style>

<section>
  <!-- <ButtonSubject textSubject="Frontend Developer" /> -->
  <!-- <h1>{headingOne}</h1>-->
  <!-- <div>
    <p id="typedTitle" />
  </div>
  <div>
    <p id="typedText" />
  </div> -->
  <p>{textTitle}</p>
  <p>{textOne}</p>
  <div>
    <ButtonFilled linkTO="#cases" textCTA="My work" />
    <ButtonOutline linkTO="#contact" textCTA="Contact" />
  </div>
</section>
