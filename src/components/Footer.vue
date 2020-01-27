<template>
  <footer class="footer">
    <div class="footer-container container">
      <textarea
        class="footer-textarea"
        v-model="newComment.message"
        v-shortkey="['ctrl', 'enter']"
        @shortkey="addComment()"
      ></textarea>
      <a href="#" class="footer-btn" @click="addComment()">Написать консультанту</a>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      newComment: {
        name: "John Dou",
        date: "",
        message: ""
      }
    };
  },
  props: {
    comments: {
      type: Array
    }
  },
  methods: {
    addComment: function() {
      if (this.newComment.message != "") {
        this.comments.push({
          name: this.newComment.name,
          date: new Date(),
          message: this.newComment.message
        });
      }
      this.newComment.message = "";
    }
  }
};
</script>
<style scoped>
.footer-container {
  background-color: #f2f2f2;
  padding-bottom: 34px;
  padding-top: 30px;
}

.footer-textarea {
  border: 1px solid #000000;
  border-radius: 3px;
  box-sizing: border-box;
  height: 65px;
  margin: 0;
  padding: 15px;
  resize: none;
  width: 100%;
}

.footer-btn {
  background-color: #fdd639;
  border-radius: 23px;
  display: block;
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 43px;
  line-height: 43px;
  margin: 25px auto 0;
  max-width: 281px;
  text-align: center;
  text-decoration: none;
  width: 100%;
}

.footer-btn:hover {
  background: #333;
  color: #fdd639;
  transition: 0.3s;
}
</style>