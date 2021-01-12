<script>
  import {
    ButtonFilled,
    ButtonOutline,
    ButtonSubject,
  } from '@/components/atoms/allAtoms.js'
  const textTitle = `Hey! Mijn naam is Jordy Fronik`
  const textOne =
    'Ik bouw en ontwerp dingen voor op het internet. Ik ben een Creatieve frontend developer met een passie voor het maken van snelle webapplicaties. Wil je nou meer weten over mij? Lees dan gerust verder! '
  // 'I design and create stuff for the internet. I’m a creative Frontend Developer with a passion for buidling fluid web applications. Do you want to know more about me? Check it out!'
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
  <p>{textTitle}</p>
  <p>{textOne}</p>
  <div>
    <ButtonFilled linkTO="#cases" textCTA="Mijn werk" />
    <ButtonOutline linkTO="#contact" textCTA="Contact" />
  </div>
</section>
