<template>
  <div class="home">
    <Header :isFixed="isFixed" />
    <Slider :isFixed="isFixed" />
    <artistSection />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import artistSection from "@/components/artistSection";
import "normalize.css";
import { fetchApi } from "@/utils/index";

@Component({
  components: {
    Header,
    Slider,
    artistSection
  }
})
export default class Home extends Vue {
  // name: "Home",;

  //data
  isFixed = false;

  //methods

  // createSongDataArray(songs) {
  //   for (let i = 0; i < songs.length; i++) {
  //     this.coverImage.push(songs[i].song_art_image_url);
  //     this.songTitle.push(songs[i].title);
  //     this.songLink.push(songs[i].url);
  //   }
  //   console.log("songLink");
  //   console.log(this.songLink);
  // };

  // pickRandomSong(songs) {
  //   for (let i = 1; i < 5; i++) {
  //     let randomNumber = Math.floor(Math.random() * songs.length);
  //     // console.log('randomNumber')
  //     // console.log(randomNumber);
  //     // console.log('songsLength')
  //     // console.log(songsLength)
  //     const showImage = $(`#image${i} img`).attr(
  //       "src",
  //       coverImage[randomNumber]
  //     );
  //     $(`#image${i} h2`).text(`${songTitle[randomNumber]}`);
  //     $(`#image${i} a`).attr("href", songLink[randomNumber]);
  //     // console.log('songLink[randomNumber]');
  //     // console.log(songLink[randomNumber]);

  //     coverImage[randomNumber] = coverImage[songsLength - 1];
  //     songTitle[randomNumber] = songTitle[songsLength - 1];
  //     songLink[randomNumber] = songLink[songsLength - 1];
  //     songsLength = songsLength - 1;
  //   }
  // }

  async created() {
    await this.$store.dispatch("createSongDataArray", "488");
  }

  //mounted
  mounted() {
    window.onscroll = () => {
      const y = pageYOffset;
      if (y >= 86) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    };
    // const data = await fetchApi("488");
    // console.log("---data---");
    // console.log(data);
    // const res = data.response.songs;
    // console.log("--res--");
    // console.log(res);
  }
}
</script>
