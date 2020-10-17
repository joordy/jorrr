<script>
</script>

<style lang="scss">
  @import '../../styles/variables/context.scss';

  section {
    display: none;
    @media screen and (min-width: 600px) {
      display: block;
      position: fixed;
      top: 0;
      z-index: 20;
      right: 3rem;
      height: 100vh;
      width: 5rem;
    }  
    @media screen and (min-width: 1195px) {
      right: 6.25rem;
    }    
    .menu {
      display: flex;
      justify-content: center;   
      align-items: center;   
      ul {
        margin-right: -4rem;
        direction: rtl;
        display: grid;
        grid-gap: 1.25rem;
        list-style: none;
        li {
          font-family: 'IBM Plex Mono', monospace; 
          text-align: right;
          a {
            text-decoration: none;
            color: $ui-dark-grey;
            &:hover {
              color: $ui-soft-white;
              transition: .2s
            }
          }
        }
      }
    }
  }
</style>

<section id="navigation">
  <section class="menu">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#cases">Cases</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </section>
</section>
