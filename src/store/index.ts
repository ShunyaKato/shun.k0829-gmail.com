import Vue from 'vue'
import Vuex from 'vuex'
import { fetchApi } from '@/utils/index'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const initialState = {
  songsData: [],
  pickSongs: [],
  likeSongs: [],
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setSongs(state: any, songObject: any) {
      state.songsData.push(songObject);
    },
    pickRandomSongs(state: any) {
      let songsLength = state.songsData.length;
      for (let i = 1; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * songsLength)
        state.pickSongs.push(state.songsData[randomNumber]);
        state.songsData[randomNumber] = state.songsData[songsLength - 1];
        songsLength = songsLength - 1;
      }
    },
    songsReset(state: any) {
      state.songsData = [];
      state.pickSongs = [];
    },
    toggleLikeSongs(state: any, likeSongObject: any) {
      if (!likeSongObject.isLiked) {
        state.likeSongs.unshift({
          image: likeSongObject.image,
          title: likeSongObject.title,
          link: likeSongObject.link,
          id: likeSongObject.id,
          isLiked: true
        })
      } else {
        const newLikeSongs = state.likeSongs.filter((likeSong: any) => likeSong.id !== likeSongObject.id)
        state.likeSongs = newLikeSongs;
      }
      const newPickSongs = state.pickSongs.map((pickSong: any) => {
        if (pickSong.id === likeSongObject.id) {
          pickSong.isLiked = !pickSong.isLiked;
        }
        return pickSong
      })
      state.pickSongs = newPickSongs;
    },

    removeLikeSongs(state: any, songId: any) {
      const newLikeSongs = state.likeSongs.filter((likeSong: any) => likeSong.id !== songId)
      state.likeSongs = newLikeSongs;
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
          link: songs[i].url,
          id: songs[i].id,
          isLiked: false
        });
      }
      commit("pickRandomSongs");
    }
  },
  plugins: [createPersistedState()]
})

