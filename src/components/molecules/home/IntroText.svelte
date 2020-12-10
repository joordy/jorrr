<script>
  import {
    ButtonFilled,
    ButtonOutline,
    ButtonSubject,
  } from '@/components/atoms/index.js'
  import { onMount } from 'svelte'
  const textTitle = `hi! I'm Jordy Fronik`
  const textOne =
    'I design and creates stuff on the internet. I’m a creative Frontend Developer with a passion for buidling fluid web applications.'
  // let headingOne = 'Jordy Fronik'
  // let text =
  //   'I’m a dutch creative Frontend Developer & Designer from Amsterdam, with a passion for building fluid web applications.'

  // onMount(() => {
  //   let index = 0
  //   let text = `hi! I'm Jordy Fronik`
  //   let speed = 125
  //   const type = () => {
  //     document.querySelector('#typedText').innerHTML += text.charAt(index)
  //     index++
  //     setTimeout(type, speed)
  //   }
  //   type()
  // })
  onMount(() => {
    let index = 0
    let text = `hi! I'm Jordy Fronik`
    let speed = 100

    const type = () => {
      document.querySelector('#typedText').innerHTML += text.charAt(index)
      index++
      setTimeout(type, speed)
    }
    type()
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 400px;
    padding-top: 45%;
    p {
      font-family: 'IBM Plex Mono', monospace;
      text-transform: uppercase;
      font-size: $large-font-size;
      &:nth-of-type(1) {
        display: inline;
        padding-right: 4px;
        border-right: 4px solid #66ccff;
        animation: blink 1s infinite;
      }
      &:nth-of-type(2) {
        margin: 2rem 0rem;
      }
    }
    div {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
    }
  }
  @keyframes blink {
    50% {
      border-right: none;
    }
  }
</style>

<section>
  <!-- <ButtonSubject textSubject="Frontend Developer" /> -->
  <!-- <h1>{headingOne}</h1>-->
  <p id="typedText" />
  <p>{textOne}</p>
  <div>
    <ButtonFilled linkTO="#cases" textCTA="My work" />
    <ButtonOutline linkTO="#contact" textCTA="Contact" />
  </div>
</section>
