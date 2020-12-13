<script>
  import { onMount } from 'svelte'

  onMount(() => {
    window.onscroll = function () {
      scrollFunction()
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        document.querySelector('.wrapper').style.padding = '0.4em 0em'
        document.querySelector('.websiteTitle').style.fontSize = '24px'
      } else {
        document.querySelector('.wrapper').style.padding = '1em 0em'
        document.querySelector('.websiteTitle').style.fontSize = '36px'
      }
    }
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    color: $ui-soft-white;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    background-color: #1a1824;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      padding: 1em 3vw;
      transition: 0.2s;
      @media (min-width: 900px) {
        padding: 1em 0;
        margin: 0 7.5vw;
      }
      @media (min-width: 1180px) {
        padding: 1em 0;
        margin: 0 15vw;
      }
      @media (min-width: 1800px) {
        width: 1200px;
        padding: 1em 0;
        margin: 0 auto;
      }
      a {
        color: $ui-soft-white;
        text-decoration: none;
        h1 {
          margin: 0;
          text-transform: uppercase;
          font-size: 36px;
          font-weight: 700;
        }
      }
      nav {
        ul {
          margin: 0;
          display: flex;
          li {
            width: 100px;
            list-style: none;
            a {
              font-family: 'IBM Plex Mono', monospace;
              text-decoration: none;
              font-weight: 700;
              color: $ui-inActive;
              transition: 0.2s;
              &:hover {
                color: $ui-active;
                border-bottom: 1px solid $ui-active;
              }
            }
          }
        }
      }
    }
  }
</style>

<header>
  <div class="wrapper">
    <a href="#home"><h1 class="websiteTitle">Jordy Fronik</h1></a>

    <nav>
      <ul>
        <!-- <li href="#home" /> -->
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#cases">Cases </a></li>
        <li><a href="#contact">Contact </a></li>
        <li><a href="https://read.cv/jordy" target="_blank">Resume </a></li>
      </ul>
    </nav>
  </div>
</header>
