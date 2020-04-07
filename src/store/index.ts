import Vue from 'vue'
import Vuex from 'vuex'
import { fetchApi } from '@/utils/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songsData: [],
    pickSongs: [],
  },
  mutations: {
    setSongs(state: any, songObject: any) {
      state.songsData.push({
        image: songObject.image,
        title: songObject.title,
        link: songObject.link
      });
    },
    pickRandomSongs(state: any) {
      let songsLength = state.songsData.length;
      for (let i = 1; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * songsLength)
        state.pickSongs.push(state.songsData[randomNumber]);
        state.songsData[randomNumber] = state.songsData[songsLength - 1];
        songsLength = songsLength - 1;
      }
      // console.log("--pickSongs--");
      // console.log(state.pickSongs);
    },
    songsReset(state: any) {
      state.songsData = [];
      state.pickSongs = [];
    }
  },
  actions: {
    async createSongDataArray({ state, commit }, artistId) {
      const data = await fetchApi(artistId);
      const songs: any[] = data.response.songs;
      commit("songsReset");

      for (let i = 0; i < songs.length; i++) {
        commit("setSongs", {
          image: songs[i].song_art_image_url,
          title: songs[i].title,
          link: songs[i].url
        });
      }
      commit("pickRandomSongs");
    }
  },
  // modules: {
  // }
})

