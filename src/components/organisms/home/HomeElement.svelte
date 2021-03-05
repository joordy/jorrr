<script>
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ButtonDark from '@/components/atoms/ButtonDark.svelte'

  // import Saos from 'saos'
  let src = 'PictureOfMe.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    min-height: 600px;
    height: 100%;
    @include size-l {
      /* height: 700px;
      width: calc(100vw);
      margin-left: calc((100vw - 800px) / -2); */
    }
    article {
      height: 100%;
      padding: 7em 0 5em 0;
      display: flex;
      justify-content: center;
      flex-direction: column-reverse;
      @include size-s {
        padding-top: clamp(5em, 25vw, 22.5em);
        padding-bottom: 3em;
        flex-wrap: nowrap;
        flex-direction: row;
      }
      aside {
        &:nth-of-type(1) {
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
        &:nth-of-type(2) {
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
        @include size-s {
        }
      }
    }
  }
</style>

<section id="home">
  <article>
    <aside>
      <h2>Hi, I'm Jordy Fronik</h2>
      <p>
        I'm a
        <span>Creative Developer & Designer</span>
        that builds stuff for the internet. Do you want to know more about me?
        Read on!
      </p>
      <!-- <p>
        I am a which builds stuff for the internet. My heart loves to build
        smooth and blazing fast web-applications. Do you want to know more about
        me? Read on!
      </p> -->
      <div>
        <ButtonLight linkTO="#cases" textCTA="Cases" />
        <ButtonDark linkTO="#contact" textCTA="Contact" />
      </div>
    </aside>
    <aside><img {src} /></aside>
  </article>
</section>
