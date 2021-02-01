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
        document.querySelector('.websiteTitle').style.fontSize = '16px'
      } else {
        document.querySelector('.wrapper').style.padding = '1em 0em'
        document.querySelector('.websiteTitle').style.fontSize = '24px'
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
    @include lightMode {
      background-color: #ebebeb;
      * {
        color: $ui-dark-blue;
      }
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      transition: 0.2s;
      width: 95%;
      margin: 1em auto;
      transition: 0.2s;
      @include size-s {
        width: 80vw;
      }
      @include size-xl {
        width: 70vw;
      }
      @include size-ultra {
        width: 1200px;
      }
      a {
        color: $ui-soft-white;
        text-decoration: none;
        h1 {
          font-family: 'Inter', sans-serif;
          margin: 0;
          text-transform: uppercase;
          font-size: 24px;
          font-weight: 700;
          transition: 0.2s;
          @include size-s {
            font-size: 36px;
          }
        }
      }
      nav {
        ul {
          margin: 0;
          display: flex;
          li {
            margin: 0 10px;
            list-style: none;
            text-align: center;
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4) {
              display: none;
              @include size-m {
                display: block;
              }
            }
            a {
              text-decoration: none;
              font-weight: 700;
              color: $ui-inActive;
              transition: 0.2s;
              font-size: $small-font-size;
              &:hover {
                color: #079385;
              }
              @include size-s {
                font-size: $basic-font-size;
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
        <li><a href="#home">.home()</a></li>
        <li><a href="#about">.over() </a></li>
        <li><a href="#cases">.cases() </a></li>
        <li><a href="#contact">.contact() </a></li>
        <li><a href="https://read.cv/jordy" target="_blank">.cv() </a></li>
      </ul>
    </nav>
  </div>
</header>
