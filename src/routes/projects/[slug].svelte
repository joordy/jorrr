<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params

    const res = await this.fetch(`projects/${slug}.json`)

    if (res.status === 200) {
      const project = await res.json()
      return { project }
    }

    if (res.status === 404) {
      const { error } = await res.json()
      this.error(404, error)
    }
  }
</script>

<script>
  export let project
  import ProjectPage from '@/components/templates/ProjectPage.svelte'
</script>

<style lang="scss">
  section {
    background-color: white;
  }
</style>

<svelte:head>
  <title>{project.title} Case Study — Jordy Fronik</title>
</svelte:head>

<ProjectPage {project} />
