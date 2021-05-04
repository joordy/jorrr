<script>
  export let projectImages

  let positionLeft = 0
  let currId = 0

  let next = () => {
    let toFarLeft = positionLeft > projectImages.length * 100 - 200
    if (!toFarLeft) {
      positionLeft = positionLeft + 100
    }
  }

  let prev = () => {
    let left = positionLeft < 1
    if (!left) {
      positionLeft = positionLeft - 100
    } else {
    }
  }
</script>

<style lang="scss">
  article {
    width: 100%;
    margin: 0 auto;
    position: relative;
    div {
      display: flex;
      width: 100%;
      position: relative;
      transition: left 0.5s;
      img {
        width: 100%;
        height: auto;
      }
    }

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &:nth-of-type(1) {
        left: 0;
      }
      &:nth-of-type(2) {
        right: 0;
      }
    }
  }
</style>

<article>
  <div style="left: calc(-{positionLeft}%);">
    {#each projectImages as src}<img {src} alt="" id="images" />{/each}
  </div>

  <button id="prev" on:click={prev}>Prev</button>
  <button id="next" on:click={next}>Next</button>
</article>
