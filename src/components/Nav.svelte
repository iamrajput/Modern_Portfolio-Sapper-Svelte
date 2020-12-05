<script>
  export let segment;
  const handleClick = () => {
    menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
  }
  export let jobs;
</script>
<header>
    <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>
    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
      	{#each jobs as job}
        <li   class="{ segment === job.type ? 'nav-item current' : 'nav-item' }"  on:click={handleClick}>
          <a href="{job.url}" class="nav-link">
           {job.name}
          </a>
        </li>
    	{/each}
      </ul>
    </nav>
  </header>