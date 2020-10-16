<script>
</script>

<style lang="scss">
  @import '../../styles/variables/context.scss';

  section {
    position: fixed;
    top: 0;
    z-index: 20;
    right: 6.25rem;
    height: 100vh;
    width: 5rem;
    // background-color: hotpink;
    .menu {
      display: flex;
      justify-content: center;   
      align-items: center;   
        ul {
        direction: rtl;
        display: grid;
        grid-gap: 1.25rem;
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
