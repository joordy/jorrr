<script>
  export let projectImages

  let currId = 0
  let images = projectImages

  let imgLen = images.length
  let positionLeft = 0
  let moveSlider = () => {
    positionLeft = currId * 100
  }
  let next = () => {
    currId = currId === imgLen - 1 ? 0 : currId + 1
    moveSlider()
  }

  let prev = () => {
    currId = currId === 0 ? imgLen - 1 : currId - 1
    moveSlider()
  }
  let getIndex = (index) => {
    currId = index
    moveSlider()
  }
  let interval = setInterval(next, 2000)
  let autoPlay = () => {
    interval = setInterval(next, 2000)
  }
  let stopPlay = () => {
    clearInterval(interval)
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 60vw;
    .backblur {
      background-color: white;
      position: absolute;
      filter: blur(160px);
      width: 30%;
      height: 60%;
      top: 40%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    .slider {
      display: flex;
      position: relative;
      transition: left 0.5s;
      margin-bottom: 3rem;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        flex-shrink: 0;
      }
    }
    .arrow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      button {
        margin-bottom: 0;
        padding: 12px;
        border: 0;
        background-color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
      }
    }
    .papagination {
      position: absolute;
      bottom: -2.5rem;
      left: 50%;
      transform: translateX(-50%);
      padding-bottom: 8px;
      button {
        margin: 0 4px;
        width: 14px;
        height: 14px;
        border: 0;
        border-radius: 50%;
        background-color: #9a9a9d;
        text-align: center;
        cursor: pointer;
        &.active {
          background-color: $ui-green;
        }
      }
    }
    @include size-s {
      height: auto;
      img {
        /* width: auto; */
        /* height: auto; */
      }
    }
  }
</style>

<article on:mouseover={stopPlay} on:mouseleave={autoPlay} class="container">
  <div class="backblur" />

  <div class="slider" style="left: calc(-{positionLeft}%);">
    {#each images as img}<img src={img} alt="" />{/each}
  </div>
  <div class="arrow">
    <button on:click={prev} class="prev">Prev</button>
    <button on:click={next} class="next">Next</button>
  </div>
  <div class="papagination">
    {#each images as _, i}
      <button
        class={currId === i ? 'active' : ''}
        on:click={() => getIndex(i)}
      />
    {/each}
  </div>
</article>
