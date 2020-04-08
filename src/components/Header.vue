<template>
  <header :class="{headerFixed: isFixed, open: isOpened}">
    <div class="container">
      <div class="header-top">
        <router-link to="/" class="header-top__title">Music Liblary</router-link>
        <!-- <h1 class="header-top__title">Music Liblary</h1> -->
      </div>
      <ul class="header__nav" v-if="this.$route.path != '/like'">
        <li class="header__nav__content">
          <a class="header__nav__content__link" v-scroll-to="'#洋楽'">
            <span class="header__nav__content__link__title">洋楽</span>
          </a>
        </li>
        <li class="header__nav__content">
          <a class="header__nav__content__link" v-scroll-to="'#邦楽'">
            <span class="header__nav__content__link__title">邦楽</span>
          </a>
        </li>
        <li class="header__nav__content">
          <router-link class="header__nav__content__link" to="/like">
            <span class="header__nav__content__link__title">お気に入り</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="header__responsive__toggle"
      @click="openHumburger"
      v-if="this.$route.path != '/like'"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="header__responsive" id="header-hamburger">
      <nav class="header__responsive__nav">
        <ul>
          <li class="header__nav__content">
            <a v-scroll-to="'#洋楽'" @click="openHumburger">洋楽</a>
          </li>
          <li class="header__nav__content">
            <a v-scroll-to="'#邦楽'" @click="openHumburger">邦楽</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  offset: -50
});

@Component
export default class Header extends Vue {
  @Prop()
  isFixed!: boolean;

  isOpened = false;

  openHumburger() {
    this.isOpened = !this.isOpened;
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  margin: 0 auto;
  max-width: 1080px;
}

header {
  background-color: #333333;
  padding: 20px 20px 0 20px;
  a {
    color: #ffffff;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 25px;
    &__title {
      font-family: Yu Gothic;
      font-weight: bold;
      color: #ffffff;
      height: 50px;
      font-size: 50px;
      margin: 0;
    }
  }
  .header__nav {
    display: flex;
    padding: 0;
    margin: 0;
    &__content {
      flex-grow: 1;
      position: relative;
      padding: 5px 0;
      max-width: 1080px;
      &__link {
        display: flex;
        justify-content: center;
        width: 100%;
        &__title {
          padding: 8.5px 0;
          text-align: center;
          font-size: 15px;
          border-radius: 3px;
          transition-duration: 0.2s;
          width: 90%;
        }
        &:hover {
          .header__nav__content__link__title {
            background-color: #868686;
            color: #ffffff;
            transition-duration: 0.2s;
          }
        }
      }
    }
    &__content::after {
      @media (min-width: 680px) {
        content: "";
        position: absolute;
        right: 0;
        top: 9px;
        bottom: 9px;
        border-right: 1px solid #ffffff;
      }
    }
    &__content:first-child::before {
      @media (min-width: 680px) {
        content: "";
        position: absolute;
        left: 0;
        top: 9px;
        bottom: 9px;
        border-right: 1px solid #ffffff;
      }
    }
  }
}

.header__responsive {
  display: none;
}

.headerFixed {
  @media (min-width: 680px) {
    position: fixed;
    top: -86px;
    width: 100%;
    z-index: 10;
    box-sizing: border-box;
  }
}

@media (max-width: 680px) {
  .container {
    margin: 0;
  }

  header {
    padding-top: 0;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    justify-content: space-between;
    .header-top {
      margin: 0;
      height: 60px;
      display: flex;
      align-items: center;
      padding-bottom: 0;
      &__title {
        font-size: 30px;
        height: auto;
      }
    }
    .header__nav {
      display: none;
    }
  }

  .header__responsive__toggle {
    width: 36px;
    height: 30px;
    cursor: pointer;
    z-index: 1000;
    position: relative;
    span {
      width: 100%;
      height: 1px;
      left: 0;
      display: block;
      background-color: #ffffff;
      position: absolute;
      transition: transform 0.6s ease-in-out, top 0.5s ease;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 14px;
      }
      &:nth-child(3) {
        top: 28px;
      }
    }
  }

  .open {
    .header__responsive__toggle {
      span {
        background-color: #333333;
        &:nth-child(1) {
          top: 15px;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          top: 15px;
          width: 0;
          left: 50%;
        }
        &:nth-child(3) {
          top: 15px;
          transform: rotate(-45deg);
        }
      }
    }
  }

  .header__responsive {
    background-color: #ffffff;
    color: #333333;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    text-align: center;
    display: flex;
    visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.6s ease, visibility 0.6s ease;
    a {
      display: block;
      color: #333333;
      text-decoration: none;
      padding: 10px 0;
      transition: color 0.6s ease;
    }
    ul {
      list-style: none;
      li {
        opacity: 0;
        transform: translateX(200px);
        transition: transform 0.6s ease, opacity 0.2s ease;
        &:nth-child(2) {
          transition-delay: 0.15s;
        }
      }
    }
  }

  .open {
    overflow: hidden;
    .header__responsive {
      visibility: visible;
      opacity: 1;
      li {
        opacity: 1;
        transform: translateX(0);
        transition: transform 1s ease, opacity 0.9s ease;
      }
    }
  }
}
</style>