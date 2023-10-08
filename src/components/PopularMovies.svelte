<script>
    export let data;
    import MovieCard from "./MovieCard.svelte";
</script>

<h3>Popular Movies</h3>
<div class="popular-movies">
    {#if data.popular }
        {#each data.popular.results as movie }
            <MovieCard {movie}/>
        {/each}
    {:else}
        <p>Loading...</p>
    {/if}
</div>

<style>
    h3 {
        padding: 0 1rem;
    }
    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>