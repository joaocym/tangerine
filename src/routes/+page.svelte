<script>
    import HomeHeader from '$lib/HomeHeader.svelte';
    import MainHeader from '$lib/MainHeader.svelte';
    import Footer from '$lib/Footer.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
    import Home from '$lib/Home.svelte';
    import Portfolio from '$lib/Portfolio.svelte';
    import QuemSomos from '$lib/QuemSomos.svelte';
    import Background from '$lib/Background.svelte';

    let titles = {
        portfolio: "Portfolio",
        quem_somos: "Quem somos?"
    }

    let page = "home";
    let show_sidebar = false;
</script>

<div class="absolute left-0 top-0 h-full w-full">
    <div class="absolute h-17/20 inset-x-0 top-0">
        {#if page === "home"}
        <HomeHeader bind:page />
        {:else}
        <MainHeader title={titles[page]} bind:show_sidebar={show_sidebar} />
        {/if}
        {#if page === "home"}
        <Home />
        {:else if page === "portfolio"}
        <Portfolio />
        <Background />
        {:else if page === "quem_somos"}
        <QuemSomos />
        <Background />
        {/if}
    </div>
    <Footer></Footer>
</div>

<Sidebar bind:show={show_sidebar} bind:page={page} />
