import Vue from 'vue'
import Vuex from 'vuex'
import { fetchApi } from '@/utils/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coverImage: [],
    songTitle: [],
    songLink: [],
    pickCoverImage: [],
    pickSongTitle: [],
    pickSongLink: [],
  },
  mutations: {
    setSongImage(state: any, songObject: any) {
      // console.log(image);
      state.coverImage.push(songObject.image);
      state.songTitle.push(songObject.title);
      state.songLink.push(songObject.link);
      // console.log(state.coverImage);
    },
    pickRandomSongs(state: any) {
      let songsLength = state.coverImage.length;
      for (let i = 1; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * songsLength)
        state.pickCoverImage.push(state.coverImage[randomNumber]);
        state.pickSongTitle.push(state.songTitle[randomNumber]);
        state.pickSongLink.push(state.songLink[randomNumber]);
        state.coverImage[randomNumber] = state.coverImage[songsLength - 1];
        state.songTitle[randomNumber] = state.songTitle[songsLength - 1];
        state.songLink[randomNumber] = state.songLink[songsLength - 1];
        songsLength = songsLength - 1;
      }
      console.log("--pickSongImage--");
      console.log(state.pickCoverImage);
    }
  },
  actions: {
    async createSongDataArray({ state, commit }, artistId) {
      const data = await fetchApi(artistId);
      const songs: any[] = data.response.songs;

      for (let i = 0; i < songs.length; i++) {
        // console.log("test");
        // console.log(songs[i]);
        commit("setSongImage", {
          image: songs[i].song_art_image_url,
          title: songs[i].title,
          link: songs[i].url
        });
        // state.coverImage = songs;
        // state.coverImage.push(songs[i].song_art_image_url);
        // state.songTitle.push(songs[i].title);
        // state.songLink.push(songs[i].url);
      }
      console.log(state.coverImage);
      commit("pickRandomSongs");
    }
  },
  modules: {
  }
})

