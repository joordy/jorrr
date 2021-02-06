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
    width: 100%;
    @include size-xs {
      width: 400px;
    }

    h2 {
      margin-bottom: 1em;
    }
    p {
      font-size: $large-font-size;
      margin-bottom: $margin1;
      line-height: 26px;
      span {
        color: #079385;
        font-weight: 900;
      }
    }
    div {
      margin-top: 3em;
      display: flex;
      justify-content: space-between;
      width: 100%;
      @include size-s {
        max-width: 390px;
      }
    }
  }
</style>

<section>
  <h2>Hi, I'm Jordy Fronik</h2>
  <p>
    I am a
    <span>Creative Developer & Designer</span>
    which builds stuff for the internet. My heart loves to build smooth and
    blazing fast web-applications. Do you want to know more about me? Read on!
  </p>
  <div>
    <ButtonLight linkTO="#cases" textCTA="Cases" />
    <ButtonDark linkTO="#contact" textCTA="Contact" />
  </div>
</section>
