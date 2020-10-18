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

<!-- <script>
  // console.log(project);
  
  import ProjectPage from '@/components/layouts/ProjectPage.svelte';
</script>

<section class="project">
  <h2>{project.title}</h2>
  <p>{project.intro}</p>
  
</section>
  <ProjectPage /> -->

<script>
  export let project;

  import ProjectPage from '@/components/layout/ProjectPage.svelte';
</script>

<style lang="scss">
  section {
    background-color: white;
  }
</style> 

<section>
  <ProjectPage />
</section>
<!-- <section class="project">
  <h2>{project.title}</h2>
  <p>{project.intro}</p>
  
</section> -->


