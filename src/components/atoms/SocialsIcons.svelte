<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 14rem;
    list-style: none;
    a {
      color: $ui-soft-white;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 auto;
      font-family: FontAwesome;
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      text-decoration: inherit;
      font-size: 1.5rem;
      transition: 0.2s;
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
        transform: scale(1.3);
      }
    }
  }
</style>

<div>
  <a
    href="https://www.linkedin.com/in/jordy-fronik-09426812b/"
    target="_blank"
  />
  <a href="https://www.instagram.com/jorrr.dev/" target="_blank" />
  <a href="https://github.com/joordy" target="_blank" />
</div>
