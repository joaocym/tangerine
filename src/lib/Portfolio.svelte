<script>
    import {portfolio, portfolioImageGrid, portfolioImageFrame, portfolioImage} from './styles.js';
    const list_of_numbers = [...Array(9).keys()];
    const images = list_of_numbers.map((number) => "/projects/img" + number.toString().padStart(3, "0") + ".jpg")
</script>

<div id="portfolio_main" class={portfolio}>
    <div class={portfolioImageGrid}>
        {#each images as image}
        <div class={portfolioImageFrame}>
            <img class={portfolioImage} src={image} alt={image}>
          </div>
        {/each}
    </div>
</div>
