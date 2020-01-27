<template>
  <main class="comments">
    <div class="container">
      <div class="comments__header">
        <div class="comments__title">{{commentsTitle}}</div>
        <a
          class="comments__switch"
          href="#"
          @click="commentsAreHidden = !commentsAreHidden"
        >{{commentsQuantity}}</a>
        <div class="comments__counters">
          <div class="comments__counters-item">
            <img src="../assets//like.png" alt />
            <span class="comments__likes">131</span>
          </div>
          <div class="comments__counters-item">
            <img src="../assets//comment.png" alt />
            <span class="comments__count">{{ comments.length }}</span>
          </div>
        </div>
      </div>

      <div class="comments__wraper">
        <div v-for="comment in commentsList" :key="comment.id" class="comments__item">
          <div class="comments__item-info">
            <div class="comments__item-name">{{ comment.name }}</div>
            <div class="comments__item-date">{{ comment.date | formatDate}}</div>
          </div>
          <div class="comments__item-message">{{comment.message}}</div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      commentsAreHidden: true
    };
  },
  props: {
    comments: {
      type: Array
    }
  },
  computed: {
    commentsQuantity: function() {
      return this.commentsAreHidden ? "Все отзывы" : "Последние отзывы";
    },
    commentsTitle: function() {
      return !this.commentsAreHidden ? "Все отзывы" : "Последние отзывы";
    },
    commentsList: function() {
      return this.commentsAreHidden
        ? this.reverseList.slice(0, 3)
        : this.reverseList;
    },
    reverseList: function() {
      return this.comments.slice().reverse();
    }
  }
};
</script>
<style scoped>
.comments__header {
  display: flex;
  padding-bottom: 10px;
}

.comments__title {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
}

.comments__switch {
  color: #005da1;
  font-size: 14px;
  line-height: 16px;
  margin-left: 10px;
}

.comments__counters {
  display: flex;
  margin-left: auto;
}

.comments__counters-item {
  margin-left: 15px;
}

.comments__counters-item img {
  height: 12px;
  vertical-align: middle;
}

.comments__counters-item span {
  font-size: 12px;
  line-height: 14px;
}

.comments__item-info {
  display: flex;
}

.comments__item-name {
  color: #333;
  font-size: 14px;
  font-weight: bold;
}

.comments__item-date {
  color: #808080;
  font-size: 12px;
  margin-left: 10px;
}

.comments__item-message {
  background-color: #f2fbff;
  border: 1px solid #c4cbcf;
  box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
  margin: 15px 0;
  padding: 10px 20px;
  position: relative;
}

.comments__item-message::before {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: 20px;
  top: -12px;
  border: 6px solid;
  border-color: transparent transparent #c4cbcf #c4cbcf;
}

.comments__item-message::after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: 21px;
  top: -10px;
  border: 5px solid;
  border-color: transparent transparent #f2fbff #f2fbff;
}
</style>