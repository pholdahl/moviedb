    // export async function get() {
    //     const apiKey = '48eb02e991d089aaa0e88dc4f02c347d'; // Replace with your API key
    //     const url = 'https://api.themoviedb.org/3/movie/popular';
    //     const params = new URLSearchParams({
    //     api_key: apiKey,
    //     include_adult: 'false',
    //     include_video: 'false',
    //     language: 'en-US',
    //     page: '1',
    //     sort_by: 'popularity.desc'
    //     });
    
    //     try {
    //     const response = await fetch(`${url}?${params}`);
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     return {
    //         body: data
    //     };
    //     } catch (error) {
    //     return {
    //         status: error.response?.status || 500,
    //         body: error.message
    //     };
    //     }
    // }

    export async function get() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGViMDJlOTkxZDA4OWFhYTBlODhkYzRmMDJjMzQ3ZCIsInN1YiI6IjY1MjJiM2U3MGNiMzM1MTZmZDQ1OTdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qgn9osd788xmw3sU-REU_nPWKRQq-PSn1RrjnfKDtws'
            }
        };
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            return {
                body: data
            };
        } catch (error) {
            console.log(error)
            return {
                status: error.response?.status || 500,
                body: error.message
            };
        }
    }