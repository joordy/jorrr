<script>
  import { goto } from '@sapper/app';

  let title;
  let intro;
  let text;

  const handleSubmit = async () => {
    if (title && intro && text) {
      const res = await fetch('projects.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, intro, text })
      });
      const updatedJobs = await res.json();
      goto('projects');
    }
  }
</script>

<style>
  h2{
    text-align: center;
  }
  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
  input, textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 8px;
  }
</style>

<h2>Add a New Job</h2>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="project title" bind:value={title} required>
  <input type="text" placeholder="intro" bind:value={intro} required>
  <textarea placeholder="text details" bind:value={text} required></textarea>
  <button class="btn">Add new project</button>
</form>
