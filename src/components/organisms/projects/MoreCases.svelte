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
    .more__cases {
      a {
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.1),
          0 6px 20px 0 rgba(255, 255, 255, 0.1);
        text-decoration: none;
        color: $ui-soft-white;
        div {
          width: calc(100% - 2em);
          min-height: 45vw;
          max-height: 300px;
          margin: 25px 0 25px 0;
          padding: 2em 1em;
          background-color: #1e2021;
          position: relative;
          overflow: hidden;
          transition: 0.2s;
          img {
            position: absolute;
            right: -75px;
            width: auto;
            height: auto;
            max-height: 50%;
            margin: auto 0;
            top: 0;
            bottom: 0;
            transition: 0.2s;
          }
          &:hover {
            color: $ui-green;
          }
        }
        @include size-xs {
          div {
            min-height: 40vw;
          }
        }
        @include size-s {
          div {
            min-height: 300px;
            height: 350px;
            img {
              max-height: 70%;
            }
            &:hover {
              transform: scale(1.05);
              img {
                transform: scale(1.05);
                margin-right: 2em;
              }
            }
          }
        }
      }
    }
  }
</style>

<section>
  <SlideBottom>
    <section class="more__cases">
      <h2>More:</h2>
      <a href={project.otherCase.pathname}>
        <div>
          <OtherInfo {project} />
          <img src={project.otherCase.src} alt={project.otherCase.alt} />
        </div>
      </a>
    </section>
  </SlideBottom>
</section>
