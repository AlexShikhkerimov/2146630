<template>
  <header class="header">
    <div class="container">
      <section class="user-info">
        <figure class="avatar">
          <img src="../assets/avatar.png" alt />
        </figure>
        <div class="user">
          <h1 class="user-name">Вероника Ростова</h1>
          <div class="user-position">Менеджер по продажам</div>
          <div
            class="user-description"
          >Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</div>
        </div>
      </section>

      <section class="user-services">
        <div class="user-services__header-left"></div>
        <div class="user-services__header-right user-services__right-column">Услуг</div>
        <div class="user-services__middle-left">
          <div class="user-services__vertical-line"></div>
          <div class="user-services__item">
            <span>Ручное бронирование</span>
            <div class="user-services__item-progress green" style="width:100%"></div>
          </div>
          <div class="user-services__item">
            <span>Пакетные туры</span>
            <div class="user-services__item-progress blue" style="width:25%"></div>
          </div>
          <div class="user-services__item">
            <span>Отели</span>
            <div class="user-services__item-progress blue" style="width:16%"></div>
          </div>
        </div>
        <div class="user-services__middle-right user-services__right-column">
          <div class="user-services__item-value">11</div>
          <div class="user-services__item-value">3</div>
          <div class="user-services__item-value">1</div>
        </div>
        <div class="user-services__footer-left user-services__left-column">Всего</div>
        <div class="user-services__footer-right user-services__right-column">15</div>
      </section>
    </div>
  </header>
</template>

<style scoped>
header {
  padding-top: 15px;
}

.user-info {
  display: flex;
}

.avatar {
  margin: 0;
  padding: 0;
  z-index: 1;
}

.avatar img {
  border-radius: 100px;
  max-height: 124px;
  max-width: 124px;
}

.user {
  padding: 5px 10px;
}

.user-name {
  color: #333;
  font-size: 16px;
  line-height: 20px;
}

.user-position {
  color: #808080;
  font-size: 12px;
  line-height: 20px;
  margin-top: 2px;
}

.user-description {
  background-color: #fffbc8;
  border: 1px solid #dadada;
  border-radius: 5px;
  box-sizing: border-box;
  float: right;
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
  padding: 10px 20px 10px 45px;
  width: calc(100% + 45px);
  z-index: 0;
}

.user-services {
  display: -ms-grid;
  -ms-grid-columns: calc(100% - 134px) 100px;
  -ms-grid-rows: 30px 106px 45px;
  display: grid;
  grid-template-columns: auto 100px;
  grid-template-rows: 30px 106px 45px;
  padding-left: 134px;
  padding-bottom: 10px;
}

.user-services__header-left {
  -ms-grid-column: 1;
  -ms-grid-row: 1;
  grid-column: 1;
  grid-row: 1;
}

.user-services__header-right {
  -ms-grid-column: 2;
  -ms-grid-row: 1;
  grid-column: 2;
  grid-row: 1;
  font-size: 13px;
  line-height: 15px;
  padding: 7px 0;
}

.user-services__middle-left,
.user-services__middle-right {
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
  padding: 15px 0;
}

.user-services__middle-left {
  -ms-grid-column: 1;
  -ms-grid-row: 2;
  grid-column: 1;
  grid-row: 2;
  position: relative;
}

.user-services__vertical-line {
  background-color: rgba(51, 51, 51, 0.2);
  bottom: 15px;
  left: 0;
  position: absolute;
  top: 15px;
  width: 1px;
}

.user-services__item {
  font-size: 13px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 2px;
  padding-left: 6px;
  position: relative;
}

.user-services__item-progress {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
}

.user-services__item-progress.green {
  background-color: #b1e19b;
}

.user-services__item-progress.blue {
  background-color: #ace2f8;
}

.user-services__middle-right {
  -ms-grid-column: 2;
  -ms-grid-row: 2;
  grid-column: 2;
  grid-row: 2;
}

.user-services__item-value {
  font-weight: bold;
  font-size: 13px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 2px;
}

.user-services__footer-left,
.user-services__footer-right {
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  padding: 9px 0;
}

.user-services__footer-left {
  -ms-grid-column: 1;
  -ms-grid-row: 3;
  grid-column: 1;
  grid-row: 3;
}

.user-services__footer-right {
  -ms-grid-column: 2;
  -ms-grid-row: 3;
  grid-column: 2;
  grid-row: 3;
}

.user-services__right-column {
  text-align: center;
}

@media (max-width: 465px) {
  .user-services {
    padding-left: 0;
  }
}
</style>