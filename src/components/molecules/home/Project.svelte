<script>
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import ProjectBackground from '@/components/atoms/home/ProjectBackground.svelte'
  import ProjectDesc from '@/components/atoms/home/ProjectDesc.svelte'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: auto;
    background-color: #202020;
    border-radius: 8px;
    padding: 1rem;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    a {
      color: $ui-soft-white;
      width: 100%;
      height: 100%;
      text-decoration: none;
      article {
        &:first-of-type {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          h3 {
            font-size: 1.9rem;
            line-height: 1.9rem;
            font-weight: 700;
          }
          span {
            font-size: 1rem;
            transition: 0.2s;
            font-family: FontAwesome;
            font-weight: 900;
          }
        }
        &:nth-of-type(2) {
          width: 100%;
          height: 22em;
          img {
            transform: rotate(10deg) translateX(-10%) translateY(17.5%);
            width: 180%;
          }
        }
        &:last-of-type {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 1rem 2rem;
          transition: 0.4s ease;
          transform: translateY(6rem);
        }
      }
    }
    &:hover {
      transform: scale(1.03);
      a {
        color: $ui-green;
        article {
          &:last-of-type {
            transform: translateY(0);
          }
        }
      }
    }
  }
</style>

<section>
  <a href="/projects/{project.slug}/">
    <article>
      <h3>{project.title}</h3>
      <span>→</span>
    </article>
    <article>
      <img
        src="https://user-images.githubusercontent.com/48051912/115161820-055b1980-a0a0-11eb-975a-e21692192d42.png"
        alt=""
      />
    </article>
    <article>
      <p>{project.subTitle}</p>
    </article>
  </a>
</section>
