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
    width: calc(100% - 30px);
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
      right: -15px;
      top: -30px;
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

  @include size-s {
    section {
      width: 100%;
      height: 475px;
    }
  }
  @include size-m {
    section {
      height: 600px;
    }
  }
</style>

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
