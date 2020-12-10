<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .challenge {
    width: 70vw;
    margin: 3rem auto 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    // justify-content: space-between;
    .text__one {
      width: 100%;
      @media screen and (min-width: 700px) {
        width: 47.5%;
      }
    }
    .text__two {
      width: 100%;
      @media screen and (min-width: 700px) {
        width: 47.5%;
      }
    }
  }
</style>

<section class="challenge">
  <section class="text__one">
    <h5>Challenge</h5>
    <h2>{project.subTitle}</h2>
    <p>{project.shortExplenation}</p>
  </section>
  <section class="text__two">
    <article>
      <h4>Services</h4>
      <p>{project.services}</p>
    </article>
    <article>
      <h4>Languages</h4>
      <p>{project.languages}</p>
    </article>
    <article>
      <h4>Live Preview</h4>
      <p>{project.livePreview}</p>
    </article>
  </section>
</section>
