<template>
  <div class="comment_list" v-for="(item, index) in arrayComments" :key="index">
    <div class="comments">
      <div class="voting">
        <div class="cubreButtons">
          <div class="btn_voting_up" @click="voting(1, item.id)">+</div>
          <div class="cant_voting">
            {{ item.score }}
          </div>
          <div class="btn_voting_down" @click="voting(0, item.id)">-</div>
        </div>
      </div>
      <div class="body_comment">
        <div class="header_comment">
          <div class="header_comment_profile">
            <img :src="'images/avatars/' + item.avatar" alt="" class="avatar" />
            <span class="comment_username"
              >{{ item.username }}
              <b v-if="item.id_user == id_user" class="youUsername"
                >you</b
              ></span
            >
            <span class="comment_date">{{
              parseTwitterDate(item.updated)
            }}</span>
          </div>
        </div>
        <div class="content_comment">
          <edit-form
            v-if="this.$store.state.id_edit == item.id"
            :idComment="item.id" :contentComment="item.content"
             @commentsUpdate="commentsUpdate"
          ></edit-form>
          <div v-else v-html="parseContent(item.content)">
            
          </div>
        </div>
      </div>
      <div
        class="btn_reply"
        @click="sendReply(item.id, item.username)"
        v-if="item.id_user !== id_user"
      >
        <span class="mdi mdi-reply iconReply"></span> Reply
      </div>
      <div class="btns_options" v-else>
        <div class="btn_delete" @click="deleteCommentModal(item.id)">
          <span class="mdi mdi-comment-remove-outline iconReply"></span>
          <span>Delete</span>
        </div>
        <div class="btn_edit" @click="updateReply(item.id, item.content)">
          <span class="mdi mdi-comment-edit-outline iconReply"></span>
          <span>Edit</span>
        </div>
      </div>
    </div>

    <CommentReply
      :replies="item.replies"
      :id_user="id_user"
      @commentsUpdate="commentsUpdate"
      @updateUserInLocal="updateUserInLocal"
    ></CommentReply>

    <FormReply
      v-if="this.$store.state.id_parent == item.id && id_user != 0"
      :idComment="item.id"
      @commentsUpdate="commentsUpdate"
      @updateUserInLocal="updateUserInLocal"
    />
  </div>

  <FormComment
    id="formInicial"
    v-if="id_user == 0"
    :id_user="id_user"
    :avatarUser="avatar"
    :parent="parent"
    @commentsUpdate="commentsUpdate"
    @updateUserInLocal="updateUserInLocal"
  />
  <FormReply
    v-else
    :idComment="0"
    @commentsUpdate="commentsUpdate"
    @updateUserInLocal="updateUserInLocal"
  />
</template>
<script>
import FormComment from "./formComment.vue";
import FormReply from "./formReply.vue";
import CommentReply from "./commentReply.vue";
import EditForm from "./editForm";
var K = (function () {
  var a = navigator.userAgent;
  return {
    ie: a.match(/MSIE\s([^;]*)/),
  };
})();
export default {
  name: "CommentComp",
  emits: ["commentsUpdate", "updateUserInLocal"],
  props: ["arrayComments", "id_user", "avatar"],
  watch: {
    id_user(value) {
      if (value > 0) {
        this.formInicial = false;
      }
    },
  },
  data() {
    return {
      formInicial: false,
      parent: 0,
      formReplyId: 0,
      formUpdateId: 0,
      contentEdit: "",
      disableForm: false,
      id_delete: 0,
    };
  },
  computed: {},
  methods: {
    updateUserInLocal() {
      this.$emit("updateUserInLocal");
    },

    async voting(num, id) {
      await this.axios
        .post(this.$store.state.urlBack + "/comments/voting/" + id, {
          id_user: this.id_user,
          type: num,
        })
        .then((response) => {
          console.log("response", response);
          this.$emit("commentsUpdate", this.id_user);
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },

    deleteCommentModal(id) {
      this.$store.commit("setIdDelete", id);
      window.$("#mi-modal").modal("show");
    },

    async sendEditReply(id, content) {
      console.log(id, content);
      if (content == "") {
        console.log("no puede estar vacio");
        return false;
      }
      this.disableForm = true;
      await this.axios
        .put(this.$store.state.urlBack + "/comments/" + id, {
          content: this.contentEdit,
        })
        .then((response) => {
          console.log("response edit comment", response);
          this.contentEdit = "";
          this.formUpdateId = 0;
          this.disableForm = false;
          this.$emit("commentsUpdate", this.id_user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateReply(id, content) {
      this.$store.commit("setIdEdit", id);
      this.$store.commit("setIdParent", 0);
      this.contentEdit = content;
    },
    commentsUpdate(id_user) {
      this.formReplyId = 0;
      // console.log("comment update en comment comp")
      this.$emit("commentsUpdate", id_user);
    },
    async sendReply(id, username) {
      this.$store.commit("setIdParent", id);
      this.$store.commit("setIdEdit", 0);
      this.$store.commit("setUsernameReply", username);
      
      //  console.log("id comment", id)
      if (this.id_user == 0) {
        this.formInicial = true;
        setTimeout(function () {
          window.scrollTo(0, document.body.scrollHeight);
        }, 100);
      } else {
        setTimeout(function () {
          document.getElementById("formReply_" + id).scrollIntoView();
          document.getElementById("content_" + id).focus();
        }, 100);
      }
    },
    parseContent(content){
      if(content.includes('@')){
          
      var contentSplit = content.split(",")
      return `<span class="usernameReply" >${contentSplit[0]}, </span> ${contentSplit[1]}`
      }else{
        return content
      }
    },
    parseTwitterDate(tdate) {
      var system_date = new Date(Date.parse(tdate));
      var user_date = new Date();
      if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, " UTC$1"));
      }
      var diff = Math.floor((user_date - system_date) / 1000);
      if (diff <= 1) {
        return "just now";
      }
      if (diff < 20) {
        return diff + " seconds ago";
      }
      if (diff < 40) {
        return "half a minute ago";
      }
      if (diff < 60) {
        return "less than a minute ago";
      }
      if (diff <= 90) {
        return "one minute ago";
      }
      if (diff <= 3540) {
        return Math.round(diff / 60) + " minutes ago";
      }
      if (diff <= 5400) {
        return "1 hour ago";
      }
      if (diff <= 86400) {
        return Math.round(diff / 3600) + " hours ago";
      }
      if (diff <= 129600) {
        return "1 day ago";
      }
      if (diff < 604800) {
        return Math.round(diff / 86400) + " days ago";
      }
      if (diff <= 777600) {
        return "1 week ago";
      }
      return "on " + system_date;
    },
  },

  components: { FormComment, FormReply, CommentReply, EditForm },
};
</script>
