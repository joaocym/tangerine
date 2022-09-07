<script>
    import {homeHeader, homeHeaderTextLocation, homeHeaderText} from './styles.js';
    export let page;

    function handleLinkAndRebind(pageType) {
        page = pageType;
    }
</script>

<div class={homeHeader}>
    <div class={homeHeaderTextLocation}>
        <p class={homeHeaderText} on:click="{() => handleLinkAndRebind("portfolio")}">Portfolio</p>
        <p class={homeHeaderText} on:click="{() => handleLinkAndRebind("quem_somos")}">Quem somos?</p>
    </div>
</div>
