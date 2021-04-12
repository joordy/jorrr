<script>
  // Components
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ButtonDark from '@/components/atoms/ButtonDark.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .intro {
    margin: 0 auto 2em auto;
    width: 100%;
    h2 {
      margin-bottom: 1em;
    }
    p {
      font-size: $large-font-size;
      margin-bottom: $margin1;
      line-height: 26px;
      span {
        color: $ui-blue;
        font-weight: 900;
      }
    }
    div {
      margin-top: 3em;
      display: flex;
      justify-content: start;
      width: 100%;
      @include size-s {
        justify-content: space-between;
        max-width: 390px;
      }
    }
    @include size-m {
      margin: 0 auto 2em 0;
      max-width: 400px;
    }
  }
</style>

<aside class="intro">
  <h2>Hi, I'm Jordy Fronik</h2>
  <p>
    I'm a freelance
    <span>Creative Developer & Designer</span>
    that build websites and applications for the internet. Do you want to know
    more about me? Read on!
  </p>

  <div>
    <ButtonLight linkTO="#cases" textCTA="Cases" />
    <ButtonDark linkTO="#contact" textCTA="Contact" />
  </div>
</aside>
