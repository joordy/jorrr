<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import IntroText from '@/components/molecules/projects/header/IntroText.svelte'
  import MockupImage from '@/components/molecules/projects/header/MockupImage.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin-top: 60px;
    width: 100%;
    text-align: center;
    h2 {
      font-size: 2.5rem;
      padding: 7rem 0 3rem;
    }
    h3 {
      font-size: 1rem;
      font-weight: 300;
      width: 80%;
      max-width: 25rem;
      margin: 0 auto 3rem auto;
    }
    aside {
      position: relative;
      div {
        position: absolute;
        background-color: white;
        filter: blur(319px);
        width: 30%;
        height: 28vw;
        max-height: 425px;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
      }
      img {
        width: auto;
        max-width: 100%;
        max-height: 550px;
        transition: 0.3s;
        position: relative;
        &:hover {
          transform: scale(1.025);
        }
      }
    }
    @include size-s {
      h2 {
        font-size: 5rem;
      }
      h3 {
        margin-bottom: 5rem;
      }
    }
    @include size-m {
      h2 {
        padding: 10rem 0 3rem;
      }
    }
  }

  /* width: calc(100% + 40px);
    margin-left: -20px;
    overflow: hidden;
    background-color: $ui-black;
    color: $ui-soft-white;
    @include size-xs {
      width: calc(100% + 10vw);
      margin-left: -5vw;
    }
    @include size-s {
      width: 100vw;
      margin-left: -25vw;
    }
    @include size-l {
      height: 700px;
      width: calc(100vw);
      margin-left: calc((100vw - 800px) / -2);
    } */
</style>

<section>
  <article>
    <SlideBottom>
      <h2>{project.title}</h2>
      <h3>{project.subTitle}</h3>

      <aside>
        <div id="backblur" />
        <img src={project.mockupImage} alt="" id="headerImg" />
      </aside>
    </SlideBottom>
  </article>
</section>
