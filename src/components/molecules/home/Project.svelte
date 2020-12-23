<script>
  import { ButtonFilled } from '@/components/atoms/allAtoms.js'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .projectCard {
    margin: 1rem;
    height: 400px;
    position: relative;
    overflow: hidden;
    transition: 0.3s;

    &:hover {
      transform: scale(1.03);
    }
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
    a {
      color: $ui-soft-white;
      width: 100%;
      height: 100%;
      .backimage {
        width: 100%;
        height: 100%;
        .backimage__overlay {
          width: 100%;
          height: 100%;
          background-color: $ui-dark-blue;
          opacity: 0.6;
          position: absolute;
          z-index: 1;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      h4 {
        position: absolute;
        z-index: 2;
        right: 8px;
        top: 8px;
        font-size: 4rem;
        line-height: 4rem;
        font-weight: 900;
      }
      .projectInfo {
        position: absolute;
        z-index: 2;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: 3rem;
        width: 90%;
        h3 {
          font-size: $h3-size;
          font-weight: 700;
        }
        p {
          font-family: 'IBM Plex Mono', monospace;
          margin: 1.5rem 0rem 3rem 0rem;
        }
      }
    }
  }
</style>

<section class="projectCard">
  <a href="/projects/{project.slug}">
    <article class="backimage">
      <div class="backimage__overlay" />
      <img
        src="https://user-images.githubusercontent.com/48051912/96302594-60308d00-0ff9-11eb-858b-f7b4c97afa7d.png"
        alt=""
      />
    </article>
    <h4 class="idnumber">{project.idNumber}</h4>
    <article class="projectInfo">
      <h3>{project.title}</h3>
      <p>{project.subTitle}</p>
      <ButtonFilled linkTO="/projects/{project.slug}" textCTA="explore" />
    </article>
  </a>
</section>
