<script>
  import {
    ButtonFilled,
    ButtonOutline,
    ButtonSubject,
  } from '@/components/atoms/allAtoms.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 80%;
    max-width: 370px;
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

    div {
      width: 400px;
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<section>
  <p>Hey! Mijn naam is Jordy Fronik</p>
  <p>
    Ik ben een creatieve front-end developer die dingen bouwt voor op het
    internet. Mijn hart smelt van strakke ontwerpen en snelle laadtijden van
    web-applicaties. Wil je nou meer weten over mij? Lees dan gerust verder!
  </p>
  <div>
    <ButtonFilled linkTO="#cases" textCTA="Mijn werk" />
    <ButtonOutline linkTO="#contact" textCTA="Contact" />
  </div>
</section>
