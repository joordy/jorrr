<script>
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  .challenge {
    width: 70vw;
    margin: 3rem auto 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    @media screen and (min-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    // justify-content: space-between;
    .text__one {
      width: 100%;
      @media screen and (min-width: 700px) {
      width: 47.5%;
      }
    }
    .text__two {
      width: 100%;
      @media screen and (min-width: 700px) {
        width:  47.5%;
      }    
    }
    // h1 {
    //   font-size: $h2-size;
    // }
  }
</style>

<section class="challenge">
  <section class="text__one">
    <h5>Challenge</h5>
    <h2>Complete datingapp</h2>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id venenatis, massa augue lectus eu. Imperdiet a nunc ipsum risus elementum orci pellentesque mattis nulla. Urna, volutpat pulvinar nam et est sodales. A, nulla semper neque facilisis egestas non interdum. Ultrices ac ultrices mauris purus pharetra massa dui. Neque tempor nunc maecenas sed enim.
      Sed quis eget morbi risus ridiculus mattis felis et potenti. 
    </p>
  </section>
  <section class="text__two">
    <article>
      <h4>Services</h4>
      <p>Lorem</p>
    </article> 
    <article>
      <h4>Languages</h4>
      <p>Lorem</p>
    </article> 
    <article>
      <h4>Live Preview</h4>
      <p>Lorem</p>
    </article>
  </section>
</section>