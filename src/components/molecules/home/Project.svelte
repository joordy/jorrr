<script>
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ProjectBackground from '@/components/atoms/home/ProjectBackground.svelte'
  import ProjectDesc from '@/components/atoms/home/ProjectDesc.svelte'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: 15px 15px;
    height: 400px;
    width: calc(100vw - 60px);
    position: relative;
    transition: 0.3s;
    @include size-s {
      width: 100%;
    }
    a {
      color: $ui-soft-white;
      width: 100%;
      height: 100%;
    }
    h4 {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 60px;
      position: absolute;
      z-index: 2;
      right: -8px;
      top: -8px;
      line-height: 80px;
      font-weight: 900;
      text-shadow: 5px 5px 3px rgba($color: #877878, $alpha: 0.3);
      transition: 0.5s;
      @include size-s {
        font-size: 80px;
      }
    }
    article {
      position: absolute;
      left: 16px;
      bottom: 24px;
      right: 16px;
      @include size-s {
        max-width: 450px;
      }
    }
    &:hover {
      transform: scale(1.03);
      a {
        h4 {
          color: $ui-blue;
        }
      }
    }
  }

  @include lightMode {
    section {
      a {
        color: #1a1824;
      }
    }
  }
  /* section {
    margin: 0;
    height: 400px;
    width: 100%;
    position: relative;
    transition: 0.5s;
    border-radius: 5px;
    @include size-s {
      &:nth-of-type(2) {
        margin-top: 9rem;
      }
      &:nth-of-type(3) {
        margin-top: -7rem;
      }
    }
    @include size-m {
      height: 600px;
      &:nth-of-type(2) {
        margin-top: 15rem;
      }
      &:nth-of-type(3) {
        margin-top: -13rem;
      }
    }
    &:hover {
      transform: scale(1.03);
      a {
        h4 {
          color: $ui-blue;
        }
      }
    }
    a {
      @include lightMode {
        color: #1a1824;
      }
      color: $ui-soft-white;
      width: 100%;
      height: 100%;
      h4 {
        font-family: 'IBM Plex Mono', monospace;
        position: absolute;
        z-index: 2;
        right: -8px;
        top: -8px;
        font-size: 80px;
        line-height: 80px;
        font-weight: 900;
        text-shadow: 5px 5px 3px rgba($color: #877878, $alpha: 0.3);
        transition: 0.5s;
      }
      article {
        position: absolute;
        z-index: 2;
        bottom: 15%;
        left: 5%;
        width: 90%;
      }
    }
  } */
</style>

<!-- <SlideIn from={bottom}> -->
<section>
  <a href="/projects/{project.slug}/">
    <h4>{project.idNumber}</h4>
    <ProjectBackground {project} />
    <article>
      <ProjectDesc {project} />
      <ButtonLight linkTO="/projects/{project.slug}" textCTA="See more" />
    </article>
  </a>
</section>
<!-- </SlideIn> -->
