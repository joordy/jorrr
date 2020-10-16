<script>
  import { ButtonCTA } from '@/components/atoms/index.js'

</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    @media screen and (min-width: 600px) {
      &:nth-of-type(2) {
        margin-top: 200px;
      }
       &:nth-of-type(3) {
        margin-top: -200px;
      }
    }
    a {
      text-decoration: none;
      .card {
        width: 100%;      
        height: 400px;
        position: relative;
        overflow: hidden;
        @media screen and (min-width: 1195px) {
          height: 600px;
        }
        .backimage {
          width: 100%;
          height: 100%;
          .backimage__overlay {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: $ui-dark-blue;
            opacity: 0.6;
          }
        }
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
  } 
</style>


<section>
  <a href="/">
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
    </section>
  </a>
</section>
