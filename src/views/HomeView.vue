<template>
  <div class="cubre_comments">
    <CommentComp
      :arrayComments="arrayComments"
      :id_user="id_user"
      @commentsUpdate="commentsUpdate"
      @updateUserInLocal="updateUserInLocal"
    />
  </div>

  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
    aria-hidden="true"
    id="mi-modal"
  >
    <div class="modal-dialog modal-sm" style="max-width: 320px">
      <div class="modal-content modalDelete">
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div class="modal-footer footerModalDelete">
          <button
            type="button"
            class="btn btn-secondary btnModal"
            data-dismiss="modal"
            @click="closeModal"
          >
            NO, CANCEL
          </button>
          <button
            type="button"
            class="btn btn-danger btnModal"
            @click="deleteComment()"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentComp from "../components/CommentComp.vue";

export default {
  name: "HomeView",
  components: { CommentComp },
  emits: ["commentsUpdate"],
  data() {
    return {
      arrayComments: [],
      id_user: 0,
      contador: 0,
      avatar: "",
    };
  },
  methods: {
    updateUserInLocal() {
      //buscar en local storage el user
      var user = localStorage.getItem("userComment");
      if (user) {
        user = JSON.parse(user);
        //     console.log(user.id_user)
        this.id_user = user.id_user;
        this.avatar = user.avatar;
        //  console.log(this.id_user)
      }
    },
    closeModal() {
      window.$("#mi-modal").modal("hide");
    },
    async deleteComment() {
      await this.axios
        .delete(
          this.$store.state.urlBack +
            "/comments/" +
            this.$store.state.id_delete,
          {
            id_user: this.id_user,
          }
        )
        .then((response) => {
          console.log("response delete comment", response);
          this.getComments();
          window.$("#mi-modal").modal("hide");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    commentsUpdate(id_user) {
      //   console.log("comment update en home view")
      this.id_user = id_user;
      this.getComments();
    },
    async getComments() {
      await this.axios
        .get(this.$store.state.urlBack + "/comments/")
        .then((response) => {
          console.log(response);
          this.arrayComments = response.data;
        });
    },
  },
  mounted() {
    this.updateUserInLocal();

    this.getComments();

    //  console.log("url web back", this.$store.state.urlBack)
  },
};
</script>
