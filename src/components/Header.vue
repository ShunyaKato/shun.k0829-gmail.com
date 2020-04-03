<template>
  <header id="js-headerFix">
    <div class="container">
      <div class="header-top">
        <h1 class="header-top__title">Music Liblary</h1>
      </div>
      <ul class="header__nav">
        <li class="header__nav__content">
          <a href="#english">
            <span>洋楽</span>
          </a>
        </li>
        <li class="header__nav__content">
          <a href="#japanese">
            <span>邦楽</span>
          </a>
        </li>
        <li class="header__nav__content">
          <a href>
            <span>○○○</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="header__responsive__toggle" id="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="header__responsive" id="header-hamburger">
      <nav class="header__responsive__nav">
        <ul>
          <li class="header__nav__content">
            <a href="#english">洋楽</a>
          </li>
          <li class="header__nav__content">
            <a href="#japanese">邦楽</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// export default Vue.extend({

// })
</script>

<style lang="scss" scoped>
header {
  background-color: #333333;
  padding: 20px;
  a {
    color: #ffffff;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    &__title {
      font-family: Yu Gothic;
      color: #ffffff;
      height: 50px;
      font-size: 50px;
      margin: 0;
    }
  }
  .header__nav {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    &__content {
      flex-grow: 1;
      position: relative;
      padding: 5px 0;
      margin-bottom: 5px;
      a {
        display: flex;
        justify-content: center;
        width: 100%;
        span {
          padding: 8.5px 0;
          text-align: center;
          font-size: 15px;
          border-radius: 3px;
          transition-duration: 0.2s;
          width: 320px;
        }
        &:hover {
          span {
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

.headerFix {
  @media (min-width: 680px) {
    position: fixed;
    top: -81px;
    width: 100%;
    z-index: 10;
    min-width: 1080px;
  }
}
</style>