<template>
  <div class="formReply" :id="'formReply_' + idComment">
    <form id="app">
      <img :src="'images/avatars/' + avatar" class="avatar" />

      <textarea
        class="form-control"
        rows="3"
        placeholder="Add comment"
        :id="'content_' + idComment"
        v-model="content"
        required
        :disabled="disableForm"
      ></textarea>

      <button
        type="button"
        class="btnSend"
        @click="sendReply()"
        :disabled="disableForm"
      >
        SEND
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormReply",
  emits: ["commentsUpdate", "updateUserInLocal"],
  props: ["idComment"],
  data() {
    return {
      username: "",
      content: '',
      avatar: "",
      id_user: null,
      disableForm: false,
    };
  },
  methods: {
    async sendReply() {
      //  console.log("caca", this.content)
      if (this.content === null) {
        //    console.log("esta null =?")
        return false;
      }
      this.disableForm = true;
      await this.axios
        .post(this.$store.state.urlBack + "/comments/", {
          avatar: this.avatar,
          username: this.username,
          content: this.content,
          id_user: this.id_user,
          parent: this.idComment,
        })
        .then((response) => {
          console.log(response.data.id_comment);
          this.$store.commit("setIdParent", 0);
          this.$emit("commentsUpdate", this.id_user);
          this.$emit("updateUserInLocal", this.id_user);
          this.content = null;
          this.disableForm = false;
          setTimeout(function () {
            document
              .getElementById("formReply_" + response.data.id_comment)
              .scrollIntoView();
            document
              .getElementById("content_" + response.data.id_comment)
              .focus();
          }, 100);
        });
    },
  },
  mounted() {console.log("this.$store.state.usernameReply", this.$store.state.usernameReply)
  if(this.$store.state.usernameReply!=''){
    this.content = `@${this.$store.state.usernameReply}, `
  }
    const user = JSON.parse(localStorage.getItem("userComment"));
    if (user) {
      this.username = user.username;
      this.avatar = user.avatar;
      this.id_user = user.id_user;
    }
  },
};
</script>
