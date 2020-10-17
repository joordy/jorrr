<script>
  import { ButtonCTA } from '@/components/atoms/index.js'
  // import projects from '@/routes/projects/_data.js';
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  .projectCard {
    margin: 1rem;
    height: 400px;
    position: relative;
    background-color: hotpink;
      overflow: hidden;
        transition: 0.3s;

        &:hover {
          transform: scale(1.03);
        }
    @media screen and (min-width: 1195px) {
      height: 600px;
      &:nth-of-type(2) {
        margin-top: 15rem;
      }
       &:nth-of-type(3) {
        margin-top: -13rem;
      }
    }

    a {
      width: 100%;
      height: 100%;
      background-color: hotpink;
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
      .idnumber {
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

<!-- {#each projects as project} -->
  <section class="projectCard">
    <a href="/projects/datio-dating-application">
      <article class="backimage">
        <div class="backimage__overlay"></div>
        <img src="https://user-images.githubusercontent.com/48051912/96302594-60308d00-0ff9-11eb-858b-f7b4c97afa7d.png" alt="">
      </article>
      <div class="idnumber">01</div>
      <article class="projectInfo">
        <h3>Dat.io Dating Application</h3>
        <p>Dating Application for IT-students</p>
        <ButtonCTA linkTO="/" textCTA="explore" />
      </article>
    </a> 
  </section>
<!-- {/each} -->




    <!-- </section> -->
  <!-- <a href="/">
    <section class="card">
      <div class="backimage">
        <div class="backimage__overlay"></div>
        <img src="https://user-images.githubusercontent.com/48051912/96302594-60308d00-0ff9-11eb-858b-f7b4c97afa7d.png" alt="">
      </div>
      <div class="idnumber">01</div>
      <article>
        <h3>Dat.io Dating Application</h3>
        <p>Dating Application for IT-students</p>
        <ButtonCTA linkTO="/" textCTA="explore" />
      </article>
    </section>-->