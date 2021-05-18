<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 32px;
      height: 32px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      animation-delay: 1s;
      svg {
        width: 100%;
        height: 100%;
        path {
          &:hover {
            fill: $ui-green;
          }
        }
      }
      &:nth-of-type(1) {
        animation: right-1 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(2) {
        animation: right-2 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(3) {
        animation: right-3 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(4) {
        animation: right-4 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(5) {
        animation: right-5 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(6) {
        animation: right-6 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(7) {
        animation: right-7 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
      &:nth-of-type(8) {
        animation: right-8 5s infinite cubic-bezier(0, 0, 0.49, 1.02);
      }
    }
  }

  @keyframes right-1 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(45deg) translateY($mobile-offset);
      -moz-transition: rotate(45deg) translateY($mobile-offset);
      -webkit-transition: rotate(45deg) translateY($mobile-offset);
      -o-transition: rotate(45deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(45deg) translateY(0px);
      -moz-transition: rotate(45deg) translateY(0px);
      -webkit-transition: rotate(45deg) translateY(0px);
      -o-transition: rotate(45deg) translateY(0px);
    }
  }
  @keyframes right-2 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(90deg) translateY($mobile-offset);
      -moz-transition: rotate(90deg) translateY($mobile-offset);
      -webkit-transition: rotate(90deg) translateY($mobile-offset);
      -o-transition: rotate(90deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(90deg) translateY(0px);
      -moz-transition: rotate(90deg) translateY(0px);
      -webkit-transition: rotate(90deg) translateY(0px);
      -o-transition: rotate(90deg) translateY(0px);
    }
  }
  @keyframes right-3 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(135deg) translateY($mobile-offset);
      -moz-transition: rotate(135deg) translateY($mobile-offset);
      -webkit-transition: rotate(135deg) translateY($mobile-offset);
      -o-transition: rotate(135deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(135deg) translateY(0px);
      -moz-transition: rotate(135deg) translateY(0px);
      -webkit-transition: rotate(135deg) translateY(0px);
      -o-transition: rotate(135deg) translateY(0px);
    }
  }

  @keyframes right-4 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(180deg) translateY($mobile-offset);
      -moz-transition: rotate(180deg) translateY($mobile-offset);
      -webkit-transition: rotate(180deg) translateY($mobile-offset);
      -o-transition: rotate(180deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(180deg) translateY(0px);
      -moz-transition: rotate(180deg) translateY(0px);
      -webkit-transition: rotate(180deg) translateY(0px);
      -o-transition: rotate(180deg) translateY(0px);
    }
  }

  @keyframes right-5 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(225deg) translateY($mobile-offset);
      -moz-transition: rotate(225deg) translateY($mobile-offset);
      -webkit-transition: rotate(225deg) translateY($mobile-offset);
      -o-transition: rotate(225deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(225deg) translateY(0px);
      -moz-transition: rotate(225deg) translateY(0px);
      -webkit-transition: rotate(225deg) translateY(0px);
      -o-transition: rotate(225deg) translateY(0px);
    }
  }

  @keyframes right-6 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(270deg) translateY($mobile-offset);
      -moz-transition: rotate(270deg) translateY($mobile-offset);
      -webkit-transition: rotate(270deg) translateY($mobile-offset);
      -o-transition: rotate(270deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(270deg) translateY(0px);
      -moz-transition: rotate(270deg) translateY(0px);
      -webkit-transition: rotate(270deg) translateY(0px);
      -o-transition: rotate(270deg) translateY(0px);
    }
  }

  @keyframes right-7 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(315deg) translateY($mobile-offset);
      -moz-transition: rotate(315deg) translateY($mobile-offset);
      -webkit-transition: rotate(315deg) translateY($mobile-offset);
      -o-transition: rotate(315deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(315deg) translateY(0px);
      -moz-transition: rotate(315deg) translateY(0px);
      -webkit-transition: rotate(315deg) translateY(0px);
      -o-transition: rotate(315deg) translateY(0px);
    }
  }

  @keyframes right-8 {
    0% {
      transform: rotate(0deg) translateY(0px);
      -moz-transition: rotate(0deg) translateY(0px);
      -webkit-transition: rotate(0deg) translateY(0px);
      -o-transition: rotate(0deg) translateY(0px);
    }
    33%,
    66%,
    90% {
      transform: rotate(360deg) translateY($mobile-offset);
      -moz-transition: rotate(360deg) translateY($mobile-offset);
      -webkit-transition: rotate(360deg) translateY($mobile-offset);
      -o-transition: rotate(360deg) translateY($mobile-offset);
    }
    100% {
      transform: rotate(360deg) translateY(0px);
      -moz-transition: rotate(360deg) translateY(0px);
      -webkit-transition: rotate(360deg) translateY(0px);
      -o-transition: rotate(360deg) translateY(0px);
    }
  }

  @include size-m {
    @keyframes right-1 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(45deg) translateY($desktop-offset);
        -moz-transition: rotate(45deg) translateY($desktop-offset);
        -webkit-transition: rotate(45deg) translateY($desktop-offset);
        -o-transition: rotate(45deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(45deg) translateY(0px);
        -moz-transition: rotate(45deg) translateY(0px);
        -webkit-transition: rotate(45deg) translateY(0px);
        -o-transition: rotate(45deg) translateY(0px);
      }
    }
    @keyframes right-2 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(90deg) translateY($desktop-offset);
        -moz-transition: rotate(90deg) translateY($desktop-offset);
        -webkit-transition: rotate(90deg) translateY($desktop-offset);
        -o-transition: rotate(90deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(90deg) translateY(0px);
        -moz-transition: rotate(90deg) translateY(0px);
        -webkit-transition: rotate(90deg) translateY(0px);
        -o-transition: rotate(90deg) translateY(0px);
      }
    }
    @keyframes right-3 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(135deg) translateY($desktop-offset);
        -moz-transition: rotate(135deg) translateY($desktop-offset);
        -webkit-transition: rotate(135deg) translateY($desktop-offset);
        -o-transition: rotate(135deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(135deg) translateY(0px);
        -moz-transition: rotate(135deg) translateY(0px);
        -webkit-transition: rotate(135deg) translateY(0px);
        -o-transition: rotate(135deg) translateY(0px);
      }
    }

    @keyframes right-4 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(180deg) translateY($desktop-offset);
        -moz-transition: rotate(180deg) translateY($desktop-offset);
        -webkit-transition: rotate(180deg) translateY($desktop-offset);
        -o-transition: rotate(180deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(180deg) translateY(0px);
        -moz-transition: rotate(180deg) translateY(0px);
        -webkit-transition: rotate(180deg) translateY(0px);
        -o-transition: rotate(180deg) translateY(0px);
      }
    }

    @keyframes right-5 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(225deg) translateY($desktop-offset);
        -moz-transition: rotate(225deg) translateY($desktop-offset);
        -webkit-transition: rotate(225deg) translateY($desktop-offset);
        -o-transition: rotate(225deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(225deg) translateY(0px);
        -moz-transition: rotate(225deg) translateY(0px);
        -webkit-transition: rotate(225deg) translateY(0px);
        -o-transition: rotate(225deg) translateY(0px);
      }
    }

    @keyframes right-6 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(270deg) translateY($desktop-offset);
        -moz-transition: rotate(270deg) translateY($desktop-offset);
        -webkit-transition: rotate(270deg) translateY($desktop-offset);
        -o-transition: rotate(270deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(270deg) translateY(0px);
        -moz-transition: rotate(270deg) translateY(0px);
        -webkit-transition: rotate(270deg) translateY(0px);
        -o-transition: rotate(270deg) translateY(0px);
      }
    }

    @keyframes right-7 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(315deg) translateY($desktop-offset);
        -moz-transition: rotate(315deg) translateY($desktop-offset);
        -webkit-transition: rotate(315deg) translateY($desktop-offset);
        -o-transition: rotate(315deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(315deg) translateY(0px);
        -moz-transition: rotate(315deg) translateY(0px);
        -webkit-transition: rotate(315deg) translateY(0px);
        -o-transition: rotate(315deg) translateY(0px);
      }
    }

    @keyframes right-8 {
      0% {
        transform: rotate(0deg) translateY(0px);
        -moz-transition: rotate(0deg) translateY(0px);
        -webkit-transition: rotate(0deg) translateY(0px);
        -o-transition: rotate(0deg) translateY(0px);
      }
      33%,
      66%,
      90% {
        transform: rotate(360deg) translateY($desktop-offset);
        -moz-transition: rotate(360deg) translateY($desktop-offset);
        -webkit-transition: rotate(360deg) translateY($desktop-offset);
        -o-transition: rotate(360deg) translateY($desktop-offset);
      }
      100% {
        transform: rotate(360deg) translateY(0px);
        -moz-transition: rotate(360deg) translateY(0px);
        -webkit-transition: rotate(360deg) translateY(0px);
        -o-transition: rotate(360deg) translateY(0px);
      }
    }
  }
</style>

<section>
  <span>
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L2.49257 28.272L13.7143 32L24.936 28.272L27.4286 0H0ZM22.3646 5.71429L22.0217 9.09257L13.7646 12.6206H21.7291L20.8149 23.0926L13.8011 25.1429L6.744 23.0571L6.28686 17.7783H9.77943L10.008 20.5143L13.7646 21.464L17.672 20.3646L17.936 15.9646L6.04343 15.9291L5.78629 12.6217L14.2583 9.09371H5.48L5.06514 5.71543L22.3646 5.71429Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L2.568 28.8L14.092 32L25.646 28.796L28.218 0H0.00200009H0ZM22.628 9.42H9.112L9.434 13.038H22.308L21.338 23.882L14.092 25.89L6.856 23.882L6.362 18.334H9.908L10.16 21.154L14.094 22.214L14.102 22.212L18.038 21.15L18.446 16.57H6.204L5.252 5.888H22.946L22.63 9.42H22.628Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="24"
      height="32"
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2293 7.1597C20.1346 6.57626 19.5348 6.33482 19.1172 6.75313L15.2281 10.6384L12.2364 4.94857C11.9568 4.41638 11.2776 4.36063 11.0011 4.89432L9.3055 8.12307L5.22006 0.395759C4.88294 -0.237491 4.02669 -0.0760533 3.91606 0.632822L0 25.6766L8.93987 8.8252L11.8379 14.1793L0.003375 25.8484L10.5098 31.7209C10.8375 31.9038 11.2065 31.9999 11.5818 32C11.9571 32.0001 12.3262 31.9042 12.6539 31.7214L23.2572 25.8078L20.2293 7.1597V7.1597Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V32H32V0H0ZM17.4149 24.9566C17.4149 28.0709 15.5863 29.4926 12.9223 29.4926C10.5154 29.4926 9.12229 28.2503 8.408 26.7429L10.8583 25.264C11.3303 26.0994 11.7589 26.8069 12.7943 26.8069C13.7794 26.8069 14.408 26.4206 14.408 24.9143V14.6926H17.4149V24.9566ZM24.528 29.4926C21.7349 29.4926 19.928 28.1646 19.0491 26.4206L21.4994 25.0069C22.1429 26.0571 22.9851 26.8354 24.464 26.8354C25.7063 26.8354 26.5074 26.2137 26.5074 25.3497C26.5074 24.3211 25.6926 23.9566 24.3143 23.3497L23.5646 23.0286C21.3931 22.1074 19.9577 20.9429 19.9577 18.4926C19.9577 16.2354 21.6789 14.5211 24.3577 14.5211C26.272 14.5211 27.6434 15.1851 28.6297 16.928L26.2869 18.4286C25.7726 17.5074 25.2149 17.1429 24.3509 17.1429C23.4731 17.1429 22.9154 17.7006 22.9154 18.4286C22.9154 19.3291 23.4731 19.6926 24.7657 20.2571L25.5154 20.5783C28.0731 21.6709 29.5086 22.7931 29.5086 25.3063C29.5086 28.0069 27.3794 29.4914 24.5291 29.4914L24.528 29.4926Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="15"
      height="32"
      viewBox="0 0 15 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1114 12.74C12.4261 5.3 8.44209 2.85467 8.01409 1.92C7.64075 1.39467 7.30742 0.648 7.03409 0C6.98609 0.66 6.96075 0.913333 6.33675 1.57867C5.37275 2.33333 0.41942 6.488 0.0167533 14.9387C-0.359247 22.8213 5.71009 27.5187 6.53409 28.1173L6.62742 28.184C6.79901 29.453 6.9457 30.7252 7.06742 32H7.70875C7.86065 30.6242 8.08765 29.2577 8.38875 27.9067C8.94475 27.512 9.19409 27.2893 9.52209 26.9827C11.0754 25.5457 12.3098 23.7988 13.1456 21.8548C13.9814 19.9109 14.3999 17.8132 14.3741 15.6973C14.3874 14.612 14.2368 13.4813 14.1114 12.74V12.74ZM6.99675 23.6667C6.99675 23.6667 6.99675 12.612 7.36342 12.6133C7.64742 12.6133 8.01675 26.8733 8.01675 26.8733C7.50875 26.8133 6.99675 24.5267 6.99675 23.6667Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8849 12.8556C19.5986 12.8556 20.9961 14.2531 20.9961 16C20.9961 17.6637 19.5986 19.0779 17.8849 19.0779C16.1713 19.0779 14.7738 17.6637 14.7738 16C14.7738 14.2531 16.1713 12.8556 17.8849 12.8556ZM10.1819 29.3097C11.2301 29.9419 13.526 28.977 16.1713 26.4814C15.3062 25.4998 14.4577 24.435 13.6591 23.3203C12.3184 23.192 10.9855 22.9921 9.66618 22.7214C8.81769 26.2818 9.13379 28.7274 10.1819 29.3097V29.3097ZM11.3632 19.76L10.8807 18.9115C10.6977 19.394 10.5147 19.8765 10.3982 20.3423C10.8474 20.4421 11.3465 20.5253 11.8623 20.6085L11.3632 19.76ZM22.2439 18.4956L23.5915 16L22.2439 13.5044C21.7448 12.6227 21.2124 11.8407 20.7299 11.0588C19.8315 11.0089 18.8832 11.0089 17.8849 11.0089C16.8867 11.0089 15.9384 11.0089 15.04 11.0588C14.5575 11.8407 14.0251 12.6227 13.526 13.5044L12.1784 16L13.526 18.4956C14.0251 19.3773 14.5575 20.1593 15.04 20.9412C15.9384 20.9911 16.8867 20.9911 17.8849 20.9911C18.8832 20.9911 19.8315 20.9911 20.7299 20.9412C21.2124 20.1593 21.7448 19.3773 22.2439 18.4956V18.4956ZM17.8849 7.31541C17.5688 7.68143 17.2361 8.06408 16.9033 8.51328H18.8665C18.5338 8.06408 18.201 7.68143 17.8849 7.31541ZM17.8849 24.6846C18.201 24.3186 18.5338 23.9359 18.8665 23.4867H16.9033C17.2361 23.9359 17.5688 24.3186 17.8849 24.6846ZM25.5713 2.69028C24.5398 2.05807 22.2439 3.02302 19.5986 5.5186C20.4637 6.50019 21.3122 7.56497 22.1108 8.67965C23.475 8.81275 24.8226 9.0124 26.1037 9.27859C26.9522 5.71824 26.6361 3.27258 25.5713 2.69028ZM24.4067 12.24L24.8892 13.0885C25.0722 12.606 25.2552 12.1235 25.3717 11.6577C24.9224 11.5579 24.4233 11.4747 23.9076 11.3915L24.4067 12.24V12.24ZM26.8191 0.510815C29.2647 1.90834 29.5309 5.58515 28.4994 9.87753C32.7253 11.1253 35.7699 13.1883 35.7699 16C35.7699 18.8117 32.7253 20.8747 28.4994 22.1225C29.5309 26.4149 29.2647 30.0917 26.8191 31.4892C24.3901 32.8867 21.0793 31.2895 17.8849 28.2449C14.6906 31.2895 11.3798 32.8867 8.93415 31.4892C6.50512 30.0917 6.23893 26.4149 7.27043 22.1225C3.0446 20.8747 0 18.8117 0 16C0 13.1883 3.0446 11.1253 7.27043 9.87753C6.23893 5.58515 6.50512 1.90834 8.93415 0.510815C11.3798 -0.886705 14.6906 0.710461 17.8849 3.75506C21.0793 0.710461 24.3901 -0.886705 26.8191 0.510815ZM26.3366 16C26.9023 17.2478 27.4014 18.4956 27.8173 19.76C31.3111 18.7119 33.2743 17.2145 33.2743 16C33.2743 14.7855 31.3111 13.2881 27.8173 12.24C27.4014 13.5044 26.9023 14.7522 26.3366 16ZM9.43326 16C8.8676 14.7522 8.36849 13.5044 7.95256 12.24C4.45876 13.2881 2.49557 14.7855 2.49557 16C2.49557 17.2145 4.45876 18.7119 7.95256 19.76C8.36849 18.4956 8.8676 17.2478 9.43326 16ZM24.4067 19.76L23.9076 20.6085C24.4233 20.5253 24.9224 20.4421 25.3717 20.3423C25.2552 19.8765 25.0722 19.394 24.8892 18.9115L24.4067 19.76V19.76ZM19.5986 26.4814C22.2439 28.977 24.5398 29.9419 25.5713 29.3097C26.6361 28.7274 26.9522 26.2818 26.1037 22.7214C24.8226 22.9876 23.475 23.1872 22.1108 23.3203C21.3122 24.435 20.4637 25.4998 19.5986 26.4814V26.4814ZM11.3632 12.24L11.8623 11.3915C11.3465 11.4747 10.8474 11.5579 10.3982 11.6577C10.5147 12.1235 10.6977 12.606 10.8807 13.0885L11.3632 12.24ZM16.1713 5.5186C13.526 3.02302 11.2301 2.05807 10.1819 2.69028C9.13379 3.27258 8.81769 5.71824 9.66618 9.27859C10.9855 9.00789 12.3184 8.80796 13.6591 8.67965C14.4577 7.56497 15.3062 6.50019 16.1713 5.5186V5.5186Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="27"
      height="32"
      viewBox="0 0 27 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9298 4.21977C23.5193 2.17041 21.3784 0.738161 18.9459 0.216583C16.5133 -0.304995 13.9734 0.123604 11.8467 1.41453L4.37411 6.16501C3.36422 6.79763 2.49876 7.63569 1.834 8.62472C1.16924 9.61376 0.720059 10.7316 0.515664 11.9056C0.152493 13.8786 0.466847 15.9165 1.40769 17.6883C0.764853 18.6546 0.332972 19.7455 0.140231 20.89C-0.0712863 22.0834 -0.0432818 23.307 0.222614 24.4896C0.488509 25.6721 0.986984 26.7899 1.68902 27.7779C3.10295 29.8225 5.24159 31.2527 7.67118 31.7785C10.1008 32.3042 12.6394 31.8862 14.7721 30.6092L22.2497 25.8537C23.256 25.2186 24.118 24.3796 24.78 23.3908C25.442 22.402 25.8893 21.2854 26.0932 20.1131C26.4521 18.1463 26.136 16.116 25.1961 14.3515C26.1674 12.8287 26.6611 11.0503 26.6136 9.24485C26.5661 7.43937 25.9798 5.68935 24.9298 4.21977V4.21977ZM11.1009 28.1904C9.92705 28.4957 8.68776 28.4329 7.55082 28.0104C6.41389 27.588 5.43424 26.8264 4.74454 25.8287C3.87854 24.6293 3.56118 23.1486 3.81146 21.6779L3.95763 20.9691L4.09279 20.5306L4.49425 20.7969C5.37352 21.4552 6.36216 21.9531 7.41462 22.2676L7.68593 22.3617L7.6549 22.628C7.62887 22.9984 7.73799 23.4149 7.95224 23.7333C8.39075 24.364 9.15162 24.6664 9.88647 24.4681C10.0477 24.4161 10.2048 24.364 10.34 24.2799L17.7866 19.5294C18.162 19.2891 18.4023 18.9297 18.4954 18.5022C18.5733 18.0647 18.4778 17.6141 18.2291 17.2458C18.0158 16.9463 17.717 16.7183 17.3718 16.5918C17.0265 16.4653 16.6511 16.4462 16.2949 16.537C16.1337 16.594 15.9615 16.6571 15.8253 16.7402L13.0091 18.5283C11.7238 19.2925 10.1966 19.5409 8.73536 19.2236C7.27412 18.9063 5.98754 18.0467 5.13499 16.8183C4.70904 16.2243 4.40647 15.5509 4.24518 14.838C4.08388 14.1251 4.06713 13.387 4.19591 12.6675C4.32524 11.955 4.60284 11.2777 5.01073 10.6794C5.41862 10.0811 5.94769 9.57522 6.56364 9.19451L13.9942 4.44403C14.4692 4.15352 14.9815 3.92888 15.517 3.77626C16.6898 3.47201 17.9277 3.53429 19.0641 3.95474C20.2005 4.37518 21.1809 5.13361 21.8733 6.12797C22.3671 6.82312 22.6928 7.62337 22.8248 8.46576C22.9569 9.30815 22.8916 10.1697 22.6342 10.9826L22.499 11.4261L22.1136 11.1598C21.2239 10.5094 20.2317 10.0124 19.1782 9.68908L18.9119 9.61099L18.9379 9.34468C18.9627 8.94859 18.8584 8.55514 18.6406 8.22339C18.4307 7.92008 18.1322 7.68914 17.7859 7.56223C17.4396 7.43532 17.0625 7.41868 16.7063 7.51457C16.5481 7.5588 16.3959 7.622 16.2528 7.70279L8.79121 12.4943C8.41577 12.7446 8.1755 13.094 8.09741 13.5315C8.01932 13.959 8.12344 14.4285 8.36371 14.7729C8.79121 15.4037 9.5681 15.67 10.2879 15.4818C10.4506 15.4402 10.6068 15.3769 10.7525 15.2935L13.5998 13.4784C14.0669 13.1741 14.5791 12.9453 15.1175 12.8007C16.2913 12.4929 17.5314 12.5545 18.6689 12.9771C19.8063 13.3998 20.7858 14.1628 21.4738 15.1624C21.8995 15.7538 22.2035 16.4238 22.3681 17.1336C22.5328 17.8434 22.5548 18.5788 22.4329 19.2972C22.3096 20.0077 22.0379 20.6843 21.6354 21.2827C21.2329 21.8811 20.7088 22.388 20.0972 22.7702L12.6507 27.5096C12.1663 27.8024 11.6456 28.0303 11.1019 28.1874L11.1009 28.1904Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
  <span>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0C24.8352 0 32 7.1648 32 16C32 24.8352 24.8352 32 16 32C7.1648 32 0 24.8352 0 16C0 7.1648 7.1648 0 16 0ZM12.8208 21.3312C13.0544 22.1904 13.0288 22.9936 12.7872 23.72L12.7008 23.96C12.4987 24.4438 12.2133 24.8884 11.8576 25.2736C10.9264 26.2864 9.6272 26.6688 9.0704 26.3472C8.4704 25.9968 8.7696 24.568 9.8496 23.4272C11.0112 22.2032 12.6752 21.4144 12.6752 21.4144V21.4112L12.8208 21.3312V21.3312ZM26.0336 6.8496C25.3104 4.0064 20.5984 3.0704 16.1376 4.656C13.488 5.5984 10.6128 7.08 8.5488 9.0128C6.0912 11.3072 5.7008 13.3072 5.8608 14.1424C6.4288 17.0912 10.4704 19.0192 12.1328 20.4496V20.4576C11.6416 20.696 8.056 22.496 7.2176 24.3584C6.3168 26.3184 7.3584 27.72 8.0384 27.8976C10.1392 28.4784 12.2976 27.4176 13.4592 25.6992C14.5776 24.0176 14.48 21.8592 13.9984 20.7984C14.6592 20.6192 15.4368 20.5392 16.4368 20.6608C19.2384 20.9792 19.7984 22.7408 19.6752 23.4608C19.5568 24.1792 18.9776 24.5984 18.7776 24.7184C18.576 24.84 18.5168 24.88 18.536 24.96C18.5568 25.0784 18.6576 25.0784 18.816 25.0608C19.0368 25.0208 20.2784 24.4608 20.3376 23.0976C20.3968 21.3792 18.7568 19.4608 15.8368 19.4976C14.6368 19.52 13.8752 19.6192 13.336 19.84C13.2996 19.7836 13.2516 19.7356 13.1952 19.6992C11.3952 17.7584 8.0544 16.3984 8.1952 13.8192C8.2352 12.8784 8.5744 10.4 14.5952 7.4C19.536 4.9392 23.4768 5.6208 24.1584 7.12C25.1344 9.2576 22.056 13.24 16.9168 13.8192C14.9568 14.04 13.9376 13.28 13.6752 12.9984C13.3968 12.6976 13.3584 12.6784 13.2576 12.7408C13.096 12.8208 13.1968 13.08 13.2576 13.2416C13.4176 13.64 14.0368 14.3424 15.1184 14.7008C16.0576 15.0016 18.3568 15.1792 21.1184 14.1008C24.2176 12.9024 26.6368 9.56 25.9376 6.76L26.0336 6.8496V6.8496Z"
        fill="#4D4D4D"
      />
    </svg>
  </span>
</section>
