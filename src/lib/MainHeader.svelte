<script>
    import {mainHeader, mainHeaderMenuIcon, mainHeaderTextPosition, mainHeaderText} from './styles.js';
    export let title;
    export let show_sidebar
</script>

<div class={mainHeader}>
    <!-- <div class="absolute top-1/2 -translate-y-1/2 left-0 h-fit w-fit"> -->
    <input class={mainHeaderMenuIcon} type="image" alt="menu icon" src="/menu_FILL0_wght400_GRAD0_opsz48.svg" on:click={() => show_sidebar = !show_sidebar}/>
    <!-- </div> -->
    <div class={mainHeaderTextPosition}>
        <p class={mainHeaderText}>{title}</p>
    </div>
</div>
