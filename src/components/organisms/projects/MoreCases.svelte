<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    /* height: 300px; */
    /* text-align: center; */
    margin: 75px 0 50px 0;
    @include size-xs {
      /* min-height: 400px; */
    }
    h2,
    h3 {
      font-family: 'Inter', sans-serif;
    }
    h2 {
      font-size: $h2-size;
    }
    a {
      text-decoration: none;
      color: black;
      div {
        width: calc(100% - 2em);
        min-height: 300px;
        margin: 25px 0 25px 0;
        padding: 2em 1em;
        background-color: rgba($color: #f5f5f5, $alpha: 1);
        position: relative;
        img {
          position: absolute;
          right: 0;
          max-width: 50%;
          height: auto;
          max-height: 60%;
          margin: auto 0;
          top: 0;
          bottom: 0;
        }
        h3 {
          font-size: $h3-size;
        }
        p {
          &:nth-of-type(1) {
            font-size: 12px;
          }
          &:nth-of-type(2) {
            position: absolute;
            bottom: 2em;
            display: flex;
            justify-content: space-between;
            width: inherit;
            color: #191a1e;
            opacity: 0.6;
            transition: 0.2s;
            span {
              &:nth-of-type(1) {
                transition: 0.2s;
                font-family: FontAwesome;
                &:before {
                  content: '\f061';
                }
              }
              &:nth-of-type(2) {
              }
            }
          }
        }
        &:hover {
          p {
            &:nth-of-type(2) {
              opacity: 1;
              span {
                &:nth-of-type(1) {
                  transform: scale(1.2);
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<section class="more__cases">
  <h2>Andere projecten</h2>
  <a href={project.otherCase.pathname}>
    <div>
      <p class="case">Case study</p>
      <h3>{project.otherCase.name}</h3>
      <img src={project.otherCase.src} alt={project.otherCase.alt} />
      <p><span /> <span>Bekijk werk</span></p>
    </div>
  </a>

  <!-- <a href={project.otherCase.pathname}> -->
  <!-- <h3>{project.otherCase.name}</h3>
    <img src={project.otherCase.src} alt={project.otherCase.alt} />

    <div /> -->
  <!-- </a> -->
  <!-- <div class="cases">
    {#each project.moreCases as otherCase}
      <a href={otherCase.pathname}>
        <h3>{otherCase.name}</h3>
        <img src={otherCase.src} alt={otherCase.alt} />
      </a>
    {/each}
  </div> -->
</section>
