<script>
</script>

<style lang="scss">
  header {
    // display: flex;
    // justify-content: space-between;
    // padding: 0 15vw;
    // width: 100%;
    // height: 60px;
    // background-color: hotpink;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    // height: 60px;
    background-color: hotpink;
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      padding: 1em 15vw;
      h1 {
        margin: 0;
        text-transform: uppercase;
        font-size: 36px;
        font-weight: 700;
      }
      nav {
        ul {
          margin: 0;
          display: flex;
          li {
            width: 100px;
            list-style: none;
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>

<header>
  <div class="wrapper">
    <h1>Jordy Fronik</h1>

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
