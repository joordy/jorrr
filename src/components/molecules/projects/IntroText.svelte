<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    height: calc(100% - 100px);
    margin: $m50 0;
    a {
      color: white;
      text-decoration: none;
      span {
        font-family: 'FontAwesome';

        &::before {
          content: '\f060';
        }
      }
    }
    section {
      margin-top: $margin10;
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
  /* article {
    width: 600px;
    height: 100%;
    margin: $margin3 0;
    a {
      color: white;
      text-decoration: none;
      span {
        font-family: 'FontAwesome';

        &::before {
          content: '\f060';
        }
      }
    }
    section {
      margin-top: $margin10;
      h2 {
        font-family: 'Inter', sans-serif;
        margin-top: 0;
        font-size: $h1-size;
      }
      .case {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 200;
        text-transform: uppercase;
      }
      div {
        article {
          display: flex;
          margin: 0;
          p {
            &:nth-of-type(1) {
              width: 60px;
            }
            &:nth-of-type(2) {
              width: 400px;
            }
          }
        }
      }

    }
  } */
</style>

<article>
  <a href="/"> <span /> Terug</a>
  <section>
    <p class="case">Case study</p>
    <h2>{project.title}</h2>
    <div>
      <ul>
        <li value="Roles">{project.services}</li>
        <li value="Task">{project.typeOfProject}</li>
        <li value="Tools">{project.languages}</li>
        <li value="Team">{project.teamproject}</li>
        <!-- <li>Juice</li>
        <li>Beer</li> -->
      </ul>
      <!-- <p><span>Roles:</span>{project.services}</p>
      <p><span>Task:</span>{project.typeOfProject}</p>
      <p><span>Tools:</span>{project.languages}</p>
      <p><span>Team:</span>{project.teamproject}</p> -->
    </div>
  </section>
</article>
