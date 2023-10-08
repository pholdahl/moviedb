const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGViMDJlOTkxZDA4OWFhYTBlODhkYzRmMDJjMzQ3ZCIsInN1YiI6IjY1MjJiM2U3MGNiMzM1MTZmZDQ1OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qgn9osd788xmw3sU-REU_nPWKRQq-PSn1RrjnfKDtws'
    }
};
export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/movie_id?language=en-US`, options);
        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }
        const heading = "Details about movie";
        const detail = await response.json();
        return {
            heading,
            detail
        };
        } catch (err) {
            console.error("Client-side fetch error:", err);
            return

    }
};