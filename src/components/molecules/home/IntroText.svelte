<script>
  import {
    ButtonFilled,
    ButtonOutline,
    ButtonSubject,
  } from '@/components/atoms/index.js'
  const textTitle = `hi! I'm Jordy Fronik`
  const textOne =
    'I design and creates stuff on the internet. I’m a creative Frontend Developer with a passion for buidling fluid web applications.'
  // let headingOne = 'Jordy Fronik'
  // let text =
  //   'I’m a dutch creative Frontend Developer & Designer from Amsterdam, with a passion for building fluid web applications.'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding-top: 35vh;
    h1 {
      font-size: $h2-size;
      font-weight: 900;
      margin: 1rem 0rem 2rem 0rem;
      @media screen and (min-width: 600px) {
        font-size: $h1-size;
      }
    }
    p {
      font-family: 'IBM Plex Mono', monospace;
      font-size: $basic-font-size;
      width: 75%;
      margin-bottom: 3rem;
      text-transform: uppercase;
      @media screen and (min-width: 600px) {
        width: 400px;
        font-size: $large-font-size;
      }
    }
    div {
      width: 350px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<section>
  <!-- <ButtonSubject textSubject="Frontend Developer" /> -->
  <!-- <h1>{headingOne}</h1>-->
  <p>{textTitle}</p>
  <p>{textOne}</p>
  <div>
    <ButtonFilled linkTO="#cases" textCTA="My work" />
    <ButtonOutline linkTO="#contact" textCTA="Contact" />
  </div>
</section>
