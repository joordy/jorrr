<script>
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'
  import SlideIn from '@/components/templates/SlideIn.svelte'

  let bottom = 'fadeinBottom'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  /* .fadeinBottom {
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
  } */
  section {
    margin: 20px;
    height: 400px;
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
        article {
          img {
            transform: scale(1.1);
          }
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
        &:nth-of-type(1) {
          // Background Image
          position: absolute;
          top: 0;
          z-index: 1;
          width: 100%;
          height: 90%;
          margin: 5% 0;
          border-radius: 10px;
          background-color: $ui-softBlack;
          @include lightMode {
            background-color: #e9e9e9;
          }
          img {
            width: 100%;
            height: 65%;
            object-fit: cover;
            opacity: 0.4;
            transition: 0.5s;
            @include lightMode {
              opacity: 0.5;
            }
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
            font-size: $h3-size;
            line-height: $h3-size;
            font-weight: 700;
            backdrop-filter: blur(5px);
            display: contents;
          }
          p {
            line-height: 24px;
            margin: 1em 0em 3em 0em;
          }
        }
      }
    }
  }
</style>

<SlideIn from={bottom}>
  <section>
    <a href="/projects/{project.slug}">
      <h4>{project.idNumber}</h4>
      <article><img src={project.mockupImage} alt="" /></article>
      <article>
        <h3>{project.title}</h3>
        <p>{project.subTitle}</p>
        <ButtonLight linkTO="/projects/{project.slug}" textCTA="Bekijk case" />
      </article>
    </a>
  </section>
</SlideIn>
