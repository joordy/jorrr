<script>
  import Fade from '@/components/templates/Fade.svelte'
  import SlideIn from '@/components/templates/SlideIn.svelte'

  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ButtonDark from '@/components/atoms/ButtonDark.svelte'
  import { onMount } from 'svelte'
  let src = 'PictureOfMe.svg'

  let left = 'from-left'
  let right = 'from-right'

  onMount(() => {
    window.addEventListener('load', function () {
      console.log('loaded')

      const sliders = document.querySelectorAll('.slideIn')
      sliders.forEach((slide) => {
        console.log(slide)
        // Half way of image
        const slideInAt =
          window.scrollY + window.innerHeight - slide.offsetHeight / 2
        // Bottom of image
        const slideBottom = slide.offsetTop + slide.offsetHeight

        const isHalfShown = slideInAt > slide.offsetTop

        const isNotScrolledPast = window.scrollY < slideBottom

        if (isHalfShown && isNotScrolledPast) {
          slide.classList.add('active')
        } else {
          slide.classList.remove('active')
        }
      })
    })
  })
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
  <SlideIn from={left}>
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
  </SlideIn>
  <SlideIn from={right}>
    <aside class="img"><img {src} /></aside>
  </SlideIn>
</section>
