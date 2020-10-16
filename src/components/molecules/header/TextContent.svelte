<script>
  import { ButtonCTA, ButtonSubject } from '@/components/atoms/index.js'
  let headingOne = 'Jordy Fronik'
  let text = 'I’m a dutch creative Frontend Developer & Designer from Amsterdam, with a passion for building fluid web applications.'
</script>

<style lang="scss">
  @import './styles/variables/context.scss';

  section {
    padding-top: 30vh;
    h1 {
      font-size: $h1-size;
      font-weight: 900;
      margin: 1rem 0rem 2rem 0rem;
    }
    p {
      font-family: 'IBM Plex Mono', monospace; 
      font-size: $large-font-size;
      width: 400px;
      margin-bottom: 3rem;
    }
  }

</style>

<section>
  <ButtonSubject />

  <h1>{headingOne}</h1>

  <p>{text}</p>

  <ButtonCTA />
</section>

