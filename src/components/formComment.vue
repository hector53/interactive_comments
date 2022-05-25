<template>
  <div class="formInicial">
    <form id="app" @submit="enviarCommentInicial">
      <div class="mb-3">
        <label for="selectAvatar" class="form-label fontBold"
          >Select Avatar</label
        >
        <div class="selectAvatar">
          <img
            v-for="(item, index) in arrayAvatars"
            :key="index"
            :src="'images/avatars/' + item"
            alt=""
            class="avatar"
            :class="{ selectedAva: avatarSelected == index }"
            @click="selectAvatar(index)"
          />
        </div>
        <div
          class="alert alert-danger errorForm"
          role="alert"
          v-if="errorAvatar"
        >
          You must select an avatar
        </div>
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          @keydown.space="(event) => event.preventDefault()"
          placeholder="Add username"
          v-model="username"
        />
        <div
          class="alert alert-danger errorForm"
          role="alert"
          v-if="errorUsername"
        >
          Username cannot be empty
        </div>
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          rows="3"
          placeholder="Add comment"
          v-model="comment"
        ></textarea>
        <div
          class="alert alert-danger errorForm"
          role="alert"
          v-if="errorComment"
        >
          Comment cannot be empty
        </div>
      </div>
      <div class="form-footer">
        <button type="submit" class="btnSend">SEND</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormComment",
  emits: ["commentsUpdate", "updateUserInLocal"],
  props: ["id_user", "parent"],
  data() {
    return {
      errorUsername: false,
      errorComment: false,
      errorAvatar: false,
      username: "",
      comment: "",
      avatarSelected: null,
      arrayAvatars: [
        "image-amyrobson.png",
        "image-juliusomo.png",
        "image-maxblagun.png",
        "image-ramsesmiron.png",
      ],
    };
  },
  methods: {
    enviarCommentInicial(e) {
      e.preventDefault();
      console.log("se hizo submit");
      this.errorAvatar = false;
      this.errorUsername = false;
      this.errorComment = false;
      if (this.avatarSelected == null) {
        console.log("error avtar");
        this.errorAvatar = true;
        return false;
      }
      if (this.username == "") {
        console.log("error username");
        this.errorUsername = true;
        return false;
      }
      if (this.comment == "") {
        console.log("error comment");
        this.errorComment = true;
        return false;
      }

      this.sendComment();
    },
    async sendComment() {
      await this.axios
        .post(this.$store.state.urlBack + "/comments/", {
          avatar: this.arrayAvatars[this.avatarSelected],
          username: this.username,
          content: this.comment,
          id_user: this.id_user,
          parent: this.parent,
        })
        .then((response) => {
          console.log(response);
          var id_user_ = this.id_user;
          if (id_user_ == 0) {
            //guardamos en el local storage
            id_user_ = response.data.id_user;
            this.$store.commit("setIdParent", 0);
            localStorage.setItem(
              "userComment",
              JSON.stringify({
                id_user: response.data.id_user,
                username: this.username,
                avatar: this.arrayAvatars[this.avatarSelected],
              })
            );
          }
          this.$emit("commentsUpdate", id_user_);
          this.$emit("updateUserInLocal", id_user_);
          this.formReset();
        });
    },
    formReset() {
      (this.username = ""), (this.comment = ""), (this.avatar = null);
      this.avatarSelected = null;
    },
    selectAvatar(index) {
      console.log(index);
      this.avatarSelected = index;
    },
  },
};
</script>
