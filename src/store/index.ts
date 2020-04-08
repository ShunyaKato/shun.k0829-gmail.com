import Vue from 'vue'
import Vuex from 'vuex'
import { fetchApi } from '@/utils/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songsData: [],
    pickSongs: [],
    likeSongs: [],
  },
  mutations: {
    setSongs(state: any, songObject: any) {
      state.songsData.push(songObject);
      // console.log("---songData---");
      // console.log(state.songsData);
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
      state.likeSongs.unshift({
        image: likeSongObject.image,
        title: likeSongObject.title,
        link: likeSongObject.link,
        id: likeSongObject.id,
        isLiked: !likeSongObject.isLiked
      })
      const newPickSongs = state.pickSongs.map((pickSong: any) => {
        if (pickSong.id === likeSongObject.id) {
          pickSong.isLiked = !pickSong.isLiked;
        }
        return pickSong
      })
      state.pickSongs = newPickSongs;
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
})

