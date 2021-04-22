<script>
  // Components
  import ProjectTitle from '@/components/atoms/home/projects/ProjectTitle.svelte'
  import ProjectImg from '@/components/atoms/home/projects/ProjectImg.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: auto;
    background-color: #04020b;
    border-radius: 8px;
    padding: 1rem;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.1),
      0 6px 20px 0 rgba(255, 255, 255, 0.1);
    a {
      color: $ui-soft-white;
      width: 100%;
      height: 100%;
      text-decoration: none;
      article {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 1rem 2rem;
        transition: 0.4s ease;
        transform: translateY(10rem);
      }
    }
    &:hover {
      transform: scale(1.03);
      a {
        color: $ui-green;
        article {
          transform: translateY(0);
        }
      }
    }
  }
</style>

<section>
  <a href="/projects/{project.slug}/">
    <ProjectTitle {project} />

    <ProjectImg {project} />

    <article>
      <p>{project.subTitle}</p>
    </article>
  </a>
</section>
