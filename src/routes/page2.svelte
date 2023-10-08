<!-- <script context="module">
    export async function load() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGViMDJlOTkxZDA4OWFhYTBlODhkYzRmMDJjMzQ3ZCIsInN1YiI6IjY1MjJiM2U3MGNiMzM1MTZmZDQ1OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qgn9osd788xmw3sU-REU_nPWKRQq-PSn1RrjnfKDtws'
            }
        };
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        if(!res.ok) {
            console.error("API request failed:", res.status, res.statusText)
            return
        }
        popular = await res.json();
        console.log("Hello" + popular); // Ensure data is fetched correctly

        return {
            props: {
                popular
            }
        };
    }
</script> -->

<script context="module">
    export async function load() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGViMDJlOTkxZDA4OWFhYTBlODhkYzRmMDJjMzQ3ZCIsInN1YiI6IjY1MjJiM2U3MGNiMzM1MTZmZDQ1OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qgn9osd788xmw3sU-REU_nPWKRQq-PSn1RrjnfKDtws'
            }
        };
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            const popular = await response.json();
            console.log(popular);
            return {
                props: {
                    popular
                }
            };
        } catch (err) {
            console.error(err);
            return {
                props: {
                    popular: null
                }
            };
        }
    }
</script>


<script>
    import PopularMovies from '../components/PopularMovies.svelte';
    export let popular; // This prop is received from the load function
    console.log("Page component:", popular);
</script>

<section>
    <PopularMovies {popular}/> <!-- Pass the prop to the child component -->
</section>



<!-- <script>
    import PopularMovies from '../components/PopularMovies.svelte';
    import { onMount } from 'svelte';

    export let popular;
    let error;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGViMDJlOTkxZDA4OWFhYTBlODhkYzRmMDJjMzQ3ZCIsInN1YiI6IjY1MjJiM2U3MGNiMzM1MTZmZDQ1OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qgn9osd788xmw3sU-REU_nPWKRQq-PSn1RrjnfKDtws'
        }
    };

    onMount(async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            popular = await response.json();
        } catch (e) {
            error = e;
        }
    });
</script> -->
<!-- 
<script context="module">
    export async function load() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGViMDJlOTkxZDA4OWFhYTBlODhkYzRmMDJjMzQ3ZCIsInN1YiI6IjY1MjJiM2U3MGNiMzM1MTZmZDQ1OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qgn9osd788xmw3sU-REU_nPWKRQq-PSn1RrjnfKDtws'
            }
        };
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const popular = await res.json();

        console.log(popular)

        return {
            props: {
                popular
            }
        };
    }
</script>

<script>
    import PopularMovies from '../components/PopularMovies.svelte';
    export let popular;
</script>

<section>
    <PopularMovies movies={popular}/>
</section> -->
<!-- {#if error}
    <p>{error.message}</p>
{:else if movies}
    <ul>
        {#each movies.results as { title, overview }}
            <li>
                <h2>{title}</h2>
                <p>{overview}</p>
            </li>
        {/each}
    </ul>
{/if} -->
