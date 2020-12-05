 <script context="module">
export async function preload(page, session) {
    const res = await this.fetch('./work.json');
    const projects = await res.json();
	return { projects };
  }
</script>
<script>
	export let projects;
</script>

 <svelte:head>
	<title>About</title>
</svelte:head>
 <body>
 <main id="work">
    <h1 class="lg-heading">
      My
      <span class="text-secondary">Work</span>
    </h1>
    <h2 class="sm-heading">
      Check out some of my projects...
    </h2>
    
    <div class="projects">
    	{#each projects as project}
      <div class="item">
        <a href="{project.url}" target="__blank">
          <img src="{project.image}" alt="Project" style="height: 282px;">
        </a>
        <a href="{project.url}" class="btn-light" target="__blank">
          <i class="fas fa-eye"></i> {project.name}
        </a>
        <a href="{project.url}" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      	{/each}
    </div>
    
  </main>
    <footer id="main-footer">
    Copyright &copy; 2020
  </footer>
  </body>