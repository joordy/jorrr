<script>
  import { ButtonCTA, ButtonSubject } from '@/components/atoms/index.js';
  let headingOne = 'Jordy Fronik';
  let text =
    'I’m a dutch creative Frontend Developer & Designer from Amsterdam, with a passion for building fluid web applications.';
  import { fade } from 'svelte/transition';
</script>

<style lang="scss">
  @import './styles/variables/context.scss';

  section {
    padding-top: 30vh;
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
      @media screen and (min-width: 600px) {
        width: 400px;
        font-size: $large-font-size;
      }
    }
  }
</style>

<section in:fade>
  <ButtonSubject textSubject="Frontend Developer" />
  <h1>{headingOne}</h1>
  <p>{text}</p>
  <ButtonCTA linkTO="#contact" textCTA="Let's talk" />
</section>
