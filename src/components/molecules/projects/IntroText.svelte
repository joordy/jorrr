<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    /* height: calc(100% - 100px); */
    min-height: 375px;
    width: 90%;
    margin: 50px auto 0 auto;
    @include size-xs {
      width: 85%;
      min-height: 425px;
    }
    @include size-s {
      width: 50%;
    }
    a {
      color: white;
      text-decoration: none;
      transition: 0.5s;
      span {
        font-family: 'FontAwesome';

        &::before {
          content: '\f060';
        }
      }
      @include lightMode {
        color: $ui-dark-blue;
      }
      &:hover {
        color: #079385;
      }
    }
    section {
      margin-top: 5em;
      @include size-s {
        margin-top: 7.5em;
      }
      @include size-m {
        margin-top: 10em;
      }
      h2 {
        font-family: 'Inter', sans-serif;
        margin-top: 0;
        font-size: $h1-size;
      }
      .case {
        font-weight: 200;
        text-transform: uppercase;
      }
      div {
        ul {
          margin-top: $m30;
          list-style: none;
          padding: 0;
        }
        li {
          padding-left: 4em;
          margin-bottom: $m5;
        }
        li:before {
          display: inline-block;
          font-weight: bold;
          margin-left: -4em;
          width: 4em;
        }
        li:nth-of-type(1):before {
          content: 'Roles';
        }
        li:nth-of-type(2):before {
          content: 'Tasks';
        }
        li:nth-of-type(3):before {
          content: 'Tools';
        }
        li:nth-of-type(4):before {
          content: 'Team';
        }
      }
    }
  }
</style>

<article>
  <a href="/"> <span /> Back</a>
  <section>
    <p class="case">Case study</p>
    <h2>{project.title}</h2>
    <div>
      <ul>
        <li value="Roles">{project.services}</li>
        <li value="Task">{project.typeOfProject}</li>
        <li value="Tools">{project.languages}</li>
        <li value="Team">{project.teamproject}</li>
      </ul>
    </div>
  </section>
</article>
