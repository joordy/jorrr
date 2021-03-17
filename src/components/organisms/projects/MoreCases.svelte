<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    margin: 75px 0 50px 0;
    h2,
    h3 {
      font-family: 'Inter', sans-serif;
    }
    h2 {
      font-size: $h2-size;
    }
    a {
      text-decoration: none;
      color: black;
      div {
        width: calc(100% - 2em);
        min-height: 300px;
        margin: 25px 0 25px 0;
        padding: 2em 1em;
        background-color: rgba($color: #f5f5f5, $alpha: 1);
        position: relative;
        overflow: hidden;
        @include size-l {
          width: calc(100% - 6em);
          padding: 3em 3em;
          min-height: 325px;
        }
        img {
          position: absolute;
          right: -95px;
          max-width: 80%;
          height: auto;
          max-height: 100%;
          margin: auto 0;
          top: 0;
          bottom: 0;
          transition: 0.2s;
        }
        h3 {
          position: absolute;
          margin: auto 0;
          height: 30px;
          top: 0;
          bottom: 0;
          font-size: $h3-size;
          transition: 0.2s;
        }
        p {
          transition: 0.2s;
          &:nth-of-type(1) {
            position: absolute;
            top: 0;
            margin: auto 0;
            bottom: 50px;
            height: 30px;
          }
          &:nth-of-type(2) {
            position: absolute;
            bottom: 2em;
            display: flex;
            width: inherit;
            color: #191a1e;
            opacity: 0.6;
            span {
              &:nth-of-type(1) {
              }
              &:nth-of-type(2) {
                font-family: FontAwesome;
                font-weight: 900;
                margin-left: 1em;
              }
            }
          }
        }
        &:hover {
          color: $ui-blue;
          img {
            transform: scale(1.1);
          }
          h3 {
            margin-left: 0.5em;
          }
          p {
            margin-left: 1em;
            &:nth-of-type(2) {
              opacity: 1;
              color: $ui-blue;
              span {
                &:nth-of-type(2) {
                  transform: scale(1.3);
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<SlideBottom>
  <section class="more__cases">
    <h2>More:</h2>
    <a rel="prefetch" href={project.otherCase.pathname}>
      <div>
        <p>Case study</p>
        <h3>{project.otherCase.name}</h3>
        <img src={project.otherCase.src} alt={project.otherCase.alt} />
        <p><span>See case</span><span>&rarr; </span></p>
      </div>
    </a>
  </section>
</SlideBottom>
