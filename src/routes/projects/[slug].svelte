<script context="module">
	export async function preload(page, session) {
    const { slug } = page.params;
    
    const res = await this.fetch(`projects/${slug}.json`);
    
    if (res.status === 200) {
      const project = await res.json();
      return { project };
    }

    if (res.status === 404) {
      const { error } = await res.json();
      this.error(404, error)
    }
	}
</script>

<script>
  export let project;
  console.log(project);
</script>

<section class="project">
  <h2>{project.title}</h2>
  <p>This is my {project.intro}</p>
</section>