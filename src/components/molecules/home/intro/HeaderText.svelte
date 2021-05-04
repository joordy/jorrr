<script>
  // Components
  import ButtonLight from '@/components/atoms/home/intro/ButtonLight.svelte'
  import ButtonDark from '@/components/atoms/home/intro/ButtonDark.svelte'
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
        color: $ui-green;
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
  <h2>Hi there!</h2>
  <p>
    My name is
    <span>Jordy Fronik</span>, a freelance
    <span>Creative Developer & Designer</span>, who likes to build things that
    stand out in the digital world. The combination between my passion for
    design and technology ensures a beautiful end result.
  </p>

  <div>
    <ButtonLight linkTO="#cases" textCTA="Cases" />
    <ButtonDark linkTO="#contact" textCTA="Contact" />
  </div>
</aside>
