<template>
  <div id="app">
    <app-header />
    <app-main :comments="comments" />
    <app-footer :comments="comments" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      comments: [
        {
          name: "Samuil",
          date:
            "Sun Jan 26 2020 17:24:48 GMT+0200 (Восточная Европа, стандартное время)",
          message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!"
        },
        {
          name: "Лилия Семёновна",
          date:
            "Sun Jan 26 2020 17:25:48 GMT+0200 (Восточная Европа, стандартное время)",
          message:
            "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
        },
        {
          name: "Лилия Семёновна",
          date:
            "Sun Jan 26 2020 17:25:48 GMT+0200 (Восточная Европа, стандартное время)",
          message:
            "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
        },
        {
          name: "Лилия Семёновна",
          date:
            "Sun Jan 26 2020 17:25:48 GMT+0200 (Восточная Европа, стандартное время)",
          message:
            "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
        },
        {
          name: "Лилия Семёновна",
          date:
            "Sun Jan 26 2020 17:25:48 GMT+0200 (Восточная Европа, стандартное время)",
          message:
            "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
        }
      ]
    };
  },
  components: {
    AppHeader: Header,
    AppMain: Main,
    AppFooter: Footer
  }
};
</script>

<style lang="scss">
* {
  color: #333;
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  min-width: 360px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
}
</style>
