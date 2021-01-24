<script>
  import { ButtonLight } from '@/components/atoms/allAtoms.js'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: 20px;
    height: 400px;
    position: relative;
    /* overflow: hidden; */
    transition: 0.3s;
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
    }
    a {
      color: $ui-soft-white;
      width: 100%;
      height: 100%;
      h4 {
        position: absolute;
        z-index: 2;
        right: -8px;
        top: -8px;
        font-size: 80px;
        line-height: 80px;
        font-weight: 900;
        text-shadow: 5px 5px 3px rgba($color: #877878, $alpha: 0.3);
      }
      article {
        &:nth-of-type(1) {
          // Background Image
          position: absolute;
          top: 0;
          z-index: 1;
          width: 100%;
          height: 90%;
          margin: 5% 0;
          border-radius: 10px;
          background-color: #282632;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
          }
        }
        &:nth-of-type(2) {
          // Content
          position: absolute;
          z-index: 2;
          bottom: 15%;
          left: 5%;
          width: 90%;

          h3 {
            font-family: 'IBM Plex Mono', monospace;
            font-size: $h3-size;
            line-height: $h3-size;
            font-weight: 700;
          }
          p {
            font-family: 'IBM Plex Mono', monospace;
            margin: 1em 0em 2em 0em;
          }
        }
      }
    }
  }
</style>

<section class="projectCard">
  <a href="/projects/{project.slug}">
    <h4 class="idnumber">{project.idNumber}</h4>
    <article class="backimage">
      <!-- <div class="backimage__overlay" /> -->
      <img src={project.mockupImage} alt="" />
    </article>
    <article class="projectInfo">
      <h3>{project.title}</h3>
      <p>{project.subTitle}</p>
      <!-- <a href="/projects/{project.slug}">Explore</a> -->
      <ButtonLight linkTO="/projects/{project.slug}" textCTA="Explore" />
    </article>
  </a>
</section>
