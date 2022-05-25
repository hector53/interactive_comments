<template>
  <div class="edit_form">
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
      @click="sendEditReply()"
      :disabled="disableForm"
    >
      Update
    </button>
  </div>
</template>

<script>
export default {
  props: ["idComment", "contentComment", "commentsUpdate"],
  name: "EditForm",
  data() {
    return {
      content: this.contentComment,
      disableForm: false,
    };
  },
  methods: {
    async sendEditReply() {
      if (this.content == "") {
        console.log("no puede estar vacio");
        return false;
      }
      this.disableForm = true;
      await this.axios
        .put(this.$store.state.urlBack + "/comments/" + this.idComment, {
          content: this.content,
        })
        .then((response) => {
          console.log("response edit comment", response);
          this.disableForm = false;
          this.$store.commit("setIdEdit", 0);
          this.$store.commit("setIdParent", 0);
          this.$emit("commentsUpdate", this.id_user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
