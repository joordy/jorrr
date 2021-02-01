<script>
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ButtonDark from '@/components/atoms/ButtonDark.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    let language = window.navigator.userLanguage || window.navigator.language
    console.log(language)
  })
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
      font-size: $large-font-size;
      margin-bottom: $margin1;
      line-height: 26px;
      span {
        color: #079385;
        font-weight: 900;
      }
    }
    div {
      margin-top: 5em;
      display: flex;
      justify-content: space-between;
      width: 390px;
    }
  }
</style>

<section>
  <p>Hi! Ik ben Jordy Fronik</p>
  <p>
    Ik ben een
    <span>Creatieve Developer & Designer</span>
    die dingen bouwt voor op het internet. Mijn hart smelt van strakke ontwerpen
    en snelle laadtijden van web-applicaties. Wil je nou meer weten over mij?
    Lees dan gerust verder!
  </p>
  <div>
    <ButtonLight linkTO="#cases" textCTA="Mijn werk" />
    <ButtonDark linkTO="#contact" textCTA="Contact" />
  </div>
</section>
