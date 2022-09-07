<script>
    import { fly } from 'svelte/transition';
    import {clickOutside} from './clickOutside.js';
    import {sidebar, sidebarImage, sidebarHomeText, sidebarText} from './styles.js';

    export let show = false;
    export let page;

    let screen_width;

    function handleClickOutside(event) {
		show = false;
	}

    function handleLinkAndRebind(pageType) {
        page = pageType;
        show = false;
    }
</script>

<svelte:window bind:innerWidth={screen_width}/>

{#if show}
    <nav class={sidebar} use:clickOutside on:click_outside={handleClickOutside} transition:fly={{x: -screen_width/2, opacity: 1, duration: 300}}>
        <img src="/tangerina.png" alt="Tangerina icon" class={sidebarImage} />
        <p class={sidebarHomeText} on:click="{() => handleLinkAndRebind("home")}">Home</p>
        {#if page !== "portfolio"}
        <p class={sidebarText} on:click="{() => handleLinkAndRebind("portfolio")}">Portfolio</p>
        {:else if page !== "quem_somos"}
        <p class={sidebarText} on:click="{() => handleLinkAndRebind("quem_somos")}">Quem somos?</p>
        {/if}
    </nav>
{/if}
