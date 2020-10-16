<script>
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    position: fixed;
    top: 0;
    left: 0.675rem;
    height: 100vh;
    width: 45px;
    @media screen and (min-width: 600px) {
      width: 65px;
      left: 1rem;
    }
    @media screen and (min-width: 1195px) {
      left: 1.875rem;
    }
    .social__navigation {
      .logo {
        font-size: 64px;
        font-weight: 700;
      }
      .wrapper {
        display: none;
        @media screen and (min-width: 600px) {
          display: block;
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .social__icons {
          width: 30px;
          margin: 0 auto;
          margin-bottom: 4rem;
          div {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 30px;
            height: 300px;
            list-style: none;
            a {
              width: 2rem;
              height: 2rem;
              margin: 0 auto;
              font-family: FontAwesome;
              font-weight: normal;
              font-style: normal;
              display: inline-block;
              text-decoration: inherit;        
              font-size: 2rem;    
              &:nth-of-type(1) {
                &::before {
                  content: "\f0e1"
                }
              }
              &:nth-of-type(2) {
                &::before {
                  content: "\f16d"
                }
              }
              &:nth-of-type(3) {
                &::before {
                  content: "\f09b"
                }
              }
              
            }
          }
        }
        .social__line {
          width: 0.175rem;
          height: 8rem;
          margin: 0 auto;
          background-color: $ui-soft-white;
        }
      }
    }
  }
</style>

<section id="socials">
  <section class="social__navigation">
    <div class="logo">JF</div>
    <div class="wrapper">
        <article class="social__icons">
          <div>
            <a href="https://www.linkedin.com/in/jordy-fronik-09426812b/" target="_blank"></a>
            <a href="https://www.instagram.com/jorrr.dev/" target="_blank"></a>
            <a href="https://github.com/joordy" target="_blank"></a>
          </div>
        </article>
        <div class="social__line"></div>
    </div>
  </section>
</section>
