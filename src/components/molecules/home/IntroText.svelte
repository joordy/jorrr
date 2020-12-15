<script>
  import { ButtonFilled, ButtonOutline } from '@/components/atoms/allAtoms.js'

  const textTitle = `hi! I'm Jordy Fronik`
  const textOne =
    'I design and create stuff on the internet. I’m a creative Frontend Developer with a passion for buidling fluid web applications.'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 80%;
    max-width: 350px;
    padding-top: clamp(150px, 20vh, 30vh);
    @include size-m {
      padding-top: 30vh;
      width: 400px;
    }
    p {
      font-family: 'IBM Plex Mono', monospace;
      text-transform: uppercase;
      font-size: $basic-font-size;
      margin-bottom: $margin1;
      @include size-s {
        font-size: $large-font-size;
      }
    }
    div {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<section>
  <p>{textTitle}</p>
  <p>{textOne}</p>
  <div>
    <ButtonFilled linkTO="#cases" textCTA="My work" />
    <ButtonOutline linkTO="#contact" textCTA="Contact" />
  </div>
</section>
