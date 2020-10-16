<script>
  import { ButtonCTA } from '@/components/atoms/index.js'

</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  a {
    text-decoration: none;
    .card {
      width: 100%;
      height: 400px;
      background-color: hotpink;
      position: relative;
      // @media screen and (min-width: 600px) {
      //   width: 47.5%;
      // }
      .backimage {}
      .idnumber {
        position: absolute;
        right: 8px;
        top: 8px;
        font-size: 4rem; 
        line-height: 4rem;
        font-weight: 900;
      }
      article {
        position: absolute;
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
        }
      }
    }
  }

 
</style>


<section>
  <a href="/">
    <section class="card">
      <div class="backimage"></div>
      <div class="idnumber">01</div>
      <article>
        <h3>Dat.io Dating Application</h3>
        <p>Dating Application for IT-students</p>
        <ButtonCTA linkTO="/" textCTA="explore" />


      </article>
    </section>
  </a>
</section>
