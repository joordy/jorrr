
<script context="module">
  export async function preload(page, session) {
		const res = await this.fetch('/projects.json');
		const projects = await res.json();
		return { projects };
  }
</script>

<script>
  export let projects;
</script>

<style>
  li {
    list-style-type: none;
  }
  li a {
    display: block;
    padding: 15px;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    margin: 10px auto;
    text-decoration: none;
  }
  li a:hover {
    background: #fbfbfb;
  }
  section {
    text-align: center;
  }
</style>

<svelte:head>
	<title>My work — Jorrr.dev</title>
</svelte:head>

<section>
  <p>  Hello here is my project </p>

  {#each projects as project}
		<li><a href={`projects/${project.slug}`}>{project.title}</a></li>
	{/each}

  <a class="btn" href="projects/create">Add a new Project</a>

</section>
