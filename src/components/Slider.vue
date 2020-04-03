<template>
  <div class="index__slider" id="js-headerFix__marginAdd">
    <div class="index__slider__main">
      <div class="swiper-container main__slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-content">
              <div id="image1" class="song">
                <a target="_blank">
                  <div class="song-image">
                    <img src alt />
                    <p>試聴する</p>
                  </div>
                  <h2></h2>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-content">
              <div id="image2" class="song">
                <a target="_blank">
                  <div class="song-image">
                    <img src alt />
                    <p>試聴する</p>
                  </div>
                  <h2></h2>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-content">
              <div id="image3" class="song">
                <a target="_blank">
                  <div class="song-image">
                    <img src alt />
                    <p>試聴する</p>
                  </div>
                  <h2></h2>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-content">
              <div id="image4" class="song">
                <a target="_blank">
                  <div class="song-image">
                    <img src alt />
                    <p>試聴する</p>
                  </div>
                  <h2></h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// export default Vue.extend({

// })
</script>

<style lang="scss" scoped>
.index__slider {
  background-color: #202020;
  padding-top: 20px;
  overflow: hidden;
  .index__slider__main {
    margin: 0 auto;
    width: 700px;
    .swiper-container {
      width: 100%;
      overflow: visible;
      z-index: 1;
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          filter: brightness(70%);
          .swiper-content {
            width: 480px;
            .song-image {
              position: relative;
              margin-bottom: 10px;
              border-radius: 10px;
              width: 480px;
              height: 480px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
              p {
                font-size: 32px;
                color: #414141;
                display: block;
                width: 100%;
                text-align: center;
                position: absolute;
                top: 227px;
                opacity: 0;
                transition: opacity 0.5s 0.2s;
                z-index: 10;
              }
              &::after {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #ffffff;
                opacity: 0.6;
                transform: scale(2) translateX(-75%) translateY(-75%)
                  rotate(28deg);
                transition: transform 2s;
              }
            }
            a:hover .song-image {
              p {
                opacity: 1;
                transition: opacity 0.5s 0.7s;
              }
              &::after {
                transform: scale(2) translateX(0%) translateY(0%) rotate(28deg);
              }
            }
            h2 {
              color: #ffffff;
              width: 100%;
              text-align: center;
            }
          }
        }
        .swiper-slide-active {
          filter: brightness(100%);
        }
      }
    }
  }
}

.swiper-button-prev {
  color: #ffffff;
  background-color: #333333;
  border: solid 5px rgba($color: #ffffff, $alpha: 0.8);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 231px;
  left: 0;
  background-clip: padding-box;
  &:after {
    font-size: 16px;
  }
}
.swiper-button-next {
  @extend .swiper-button-prev;
  left: auto;
  right: 0;
  background-clip: padding-box;
  &:after {
    @extend .swiper-button-prev:after;
  }
}
