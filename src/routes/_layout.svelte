<script context="module">
export async function preload(page, session) {
    const res = await this.fetch('./menu.json');
    console.log(res);
    const jobs = await res.json();
	return { jobs };
  }
</script>



<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
	export let jobs;
</script>

<Nav {segment} {jobs}/>

<slot></slot>
