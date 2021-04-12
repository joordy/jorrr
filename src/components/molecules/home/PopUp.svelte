<script>
  export let value
  console.log(value)
  // export let message = 'Default message'
</script>

<style>
  .background {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.66);
  }
  .wrapper {
    position: relative;
    margin: 2rem;
    max-height: 100%;
  }
  .popUp {
    position: relative;
    width: 40rem;
    max-width: 100%;
    max-height: 100%;
    margin: 2rem auto;
    color: black;
    border-radius: 0.5rem;
    background: white;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>

<div class="background">
  <div class="wrapper">
    <div class="popUp">
      <h2>🎉 Geslaagd 🍾</h2>
    </div>
  </div>
</div>
