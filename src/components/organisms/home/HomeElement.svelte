<script>
  import SlideLeft from '@/components/animations/SlideLeft.svelte'
  import SlideRight from '@/components/animations/SlideRight.svelte'

  // Components
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ButtonDark from '@/components/atoms/ButtonDark.svelte'

  let src = 'PictureOfMe.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    /* min-height: 600px; */
    height: 100%;
    padding-top: 17vh;
    padding-bottom: 4em;
    display: grid;
    grid-template-columns: 1fr;
    @include size-s {
      padding-top: clamp(5em, 25vw, 22.5em);
      padding-bottom: clamp(5em, 25vw, 22.5em);
      grid-template-columns: 1fr 1fr;
    }
    .intro {
      margin: 0 auto 2em 0;
      width: 100%;
      max-width: 395px;
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
        justify-content: space-between;
        width: 100%;
        @include size-s {
          max-width: 390px;
        }
      }
    }

    .img {
      margin: 0 0 2em auto;
      width: 100%;
      max-width: 395px;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 2em;
      img {
        width: 70%;
        max-width: 250px;

        &:after {
          content: '';
          filter: blur(1em);
          background: #000;
        }
        @include size-m {
          width: 70%;
          max-width: 450px;
        }
      }
    }
  }
</style>

<section id="home">
  <SlideLeft elem={'headerIntro'}>
    <aside class="intro">
      <h2>Hi, I'm Jordy Fronik</h2>
      <p>
        I'm a
        <span>Creative Developer & Designer</span>
        that builds stuff for the internet. Do you want to know more about me?
        Read on!
      </p>

      <div>
        <ButtonLight linkTO="#cases" textCTA="Cases" />
        <ButtonDark linkTO="#contact" textCTA="Contact" />
      </div>
    </aside>
  </SlideLeft>
  <SlideRight>
    <aside class="img"><img {src} /></aside>
  </SlideRight>
</section>
