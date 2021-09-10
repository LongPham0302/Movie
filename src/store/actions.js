import axiosInstance from '../servers/api';
export default {
    async getPostDetailById({ commit }) {
        try {
            await axiosInstance.get('/movie/popular').then((res) => {
                let data = res.data.results;
                commit('SET_POST_DETAIL', data)
            });
        } catch (error) {
            console.log(error);
        }
    },
    async fetchGenres({ commit }) {
        try {
            await axiosInstance.get('/genre/movie/list').then((res) => {
                let data = res.data.genres;
                commit('SET_POST_GENRES', data)
            });
        } catch (error) {
            console.log(error);

        }
    },
    async UpcomingMovies({ commit }) {
        try {
            await axiosInstance.get('https://api.themoviedb.org/3/movie/upcoming').then((res) => {
                let data = res.data.results.slice(1, 6);
                commit('SET_POST_SLIDE', data)
            });
        } catch (error) {
            console.log(error);
        }
    },
    async fetchMovie({ commit }, movieId) {
        try {
            var result = await axiosInstance.get('/movie/' + movieId + '?append_to_response=credits,videos,images')
            commit("SET_DETAIL_MOVIE", result.data)
            return {
                data: result.data
            }
        } catch (error) {
            console.log(error);
        }
    },
    async HavingPage({ commit }, currentPage) {
        var result = await axiosInstance.get("https://api.themoviedb.org/3/person/popular?page=" + currentPage);
        if (result.status === 200) {
            commit("SET_PAGE", result.data.results)
            return {
                data: result.data.results
            }
        }
    },
    async ApiActor({ commit }, actorId) {
        try {
            var result = await axiosInstance.get("https://api.themoviedb.org/3/person/" + actorId);
            if (result.status === 200) {

                commit("SET_ACTOR", result.data.results)
                return {
                    data: result.data
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    async ApiCredits({ commit }, actorId) {
        var result = await axiosInstance.get("https://api.themoviedb.org/3/person/" + actorId + "/combined_credits")
        if (result.status === 200) {

            commit("SET_ACTOR", result.data.cast)
            return {
                data: result.data.cast,
            }
        }
    },
    async ApiSocial({ commit }, actorId) {
        try {
            var result = await axiosInstance.get("https://api.themoviedb.org/3/person/" + actorId + "/external_ids")

            if (result.status === 200) {

                commit("SET_SOCIAL", result.data)
                return {
                    data: result.data,
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}