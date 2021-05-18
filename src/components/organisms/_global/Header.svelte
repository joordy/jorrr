<script>
  import { onMount } from 'svelte'

  onMount(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        document.querySelector('.navWrapper').style.margin = '0.4em auto'
        document.querySelector('.websiteTitle').style.fontSize = '16px'
      } else {
        document.querySelector('.navWrapper').style.margin = '1em auto'
        document.querySelector('.websiteTitle').style.fontSize = '24px'
      }
    }

    window.onscroll = function () {
      scrollFunction()
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
    background-color: $ui-black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    div {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      transition: 0.2s;
      width: 95%;
      margin: 1em auto;
      transition: 0.2s;
      @include size-s {
        width: 90vw;
      }
      @include size-l {
        width: 70vw;
      }
      @include size-ultra {
        width: 1200px;
      }
      a {
        color: $ui-soft-white;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        span {
          font-size: 0;
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
              color: #8d8e8e;
              transition: 0.2s;
              font-size: $basic-font-size;
              &:hover {
                color: $ui-green;
                transform: scale(1.025);
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
  <div class="navWrapper">
    <a href="/" class="websiteTitle">
      <span>Jordy Fronik</span>
      <svg
        width="36"
        height="36"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.66667 0C2.08934 0 0 2.08933 0 4.66666V65.3333C0 67.9107 2.08933 70 4.66666 70H65.3333C67.9107 70 70 67.9107 70 65.3333V4.66667C70 2.08934 67.9107 0 65.3333 0H4.66667ZM31.2784 42.81V21.684H15.2344V26.85H24.8944V42.18C24.8944 43.608 24.5864 44.672 23.9704 45.372C23.3824 46.044 22.5564 46.38 21.4924 46.38C20.2324 46.38 19.2804 45.988 18.6364 45.204C18.0204 44.42 17.6004 43.398 17.3764 42.138L11.4124 43.356C11.8604 45.792 12.8964 47.766 14.5204 49.278C16.1724 50.762 18.4964 51.504 21.4924 51.504C22.9764 51.504 24.3204 51.308 25.5244 50.916C26.7284 50.496 27.7504 49.908 28.5904 49.152C29.4584 48.396 30.1164 47.486 30.5644 46.422C31.0404 45.33 31.2784 44.126 31.2784 42.81ZM38.36 21.684V51H44.66V38.736H56.42V33.57H44.66V26.85H57.806V21.684H38.36Z"
          fill="#EDF2EF"
        />
      </svg>
    </a>

    <nav>
      <ul>
        <li><a href="#home">.home()</a></li>
        <li><a href="#about">.about() </a></li>
        <li><a href="#cases">.cases() </a></li>
        <li><a href="#contact">.contact() </a></li>
        <li>
          <!-- <a
            href="https://develop.jorrr.dev/files/CV_JordyFronik.pdf"
            target="_blank"
            rel="noreferrer"
          >.cv()
          </a> -->
          <a
            href="https://read.cv/joordy"
            target="_blank"
            rel="noreferrer"
          >.cv()
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
