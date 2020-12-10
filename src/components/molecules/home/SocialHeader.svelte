<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .wrapper {
    display: none;
    @media screen and (min-width: 600px) {
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .social__icons {
      width: 1.5rem;
      margin: 0 auto;
      margin-bottom: 1rem;
      div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        height: 14rem;
        list-style: none;
        a {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 auto;
          font-family: FontAwesome;
          font-weight: normal;
          font-style: normal;
          display: inline-block;
          text-decoration: inherit;
          font-size: 1.5rem;
          &:nth-of-type(1) {
            &::before {
              content: '\f0e1';
            }
          }
          &:nth-of-type(2) {
            &::before {
              content: '\f16d';
            }
          }
          &:nth-of-type(3) {
            &::before {
              content: '\f09b';
            }
          }
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    .social__line {
      width: 0.175rem;
      height: 8rem;
      margin: 0 auto;
      background-color: $ui-soft-white;
    }
  }
</style>

<div class="wrapper">
  <article class="social__icons">
    <div>
      <a
        href="https://www.linkedin.com/in/jordy-fronik-09426812b/"
        target="_blank"
      />
      <a href="https://www.instagram.com/jorrr.dev/" target="_blank" />
      <a href="https://github.com/joordy" target="_blank" />
    </div>
  </article>
  <div class="social__line" />
</div>
