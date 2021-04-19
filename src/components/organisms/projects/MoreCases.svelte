<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import OtherInfo from '@/components/molecules/projects/others/OtherInfo.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    margin: 75px 0 50px 0;
    h2 {
      font-family: 'Inter', sans-serif;
      font-size: $h2-size;
    }
    a {
      text-decoration: none;
      color: $ui-black;
      div {
        width: calc(100% - 2em);
        min-height: 300px;
        max-height: 350px;
        margin: 25px 0 25px 0;
        padding: 2em 1em;
        background-color: rgba($color: #f5f5f5, $alpha: 1);
        position: relative;
        overflow: hidden;
        transition: 0.2s;
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
      }
      @include size-l {
        div {
          &:hover {
            color: $ui-blue;
            transform: scale(1.05);
            img {
              transform: scale(1.2);
              margin-right: 3em;
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
        <OtherInfo {project} />
        <img src={project.otherCase.src} alt={project.otherCase.alt} />
      </div>
    </a>
  </section>
</SlideBottom>
