<template>
  <div class="main">
    <h1>Посты</h1>
    <k-input v-model:value="searchQuery" />
    <div class="appbuttons">
      <k-select v-model="selectedSort" :options="sortOptions"></k-select>
      <k-button @click="dialogVisibility = true">Создать пост</k-button>
    </div>
    <k-dialog v-model:show="dialogVisibility">
      <post-form @save="createpost" />
    </k-dialog>
    <post-list
      v-if="posts.length != 0"
      :posts="searchpost"
      @delete="deletepost"
    />
    <p v-else>Нет данных</p>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import api from "../src/api";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  components: { PostForm, PostList },

  data() {
    return {
      posts: [],
      dialogVisibility: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
      ],
      searchQuery: "",
      page: 1,
      limit: 10,
    };
  },

  async mounted() {
    const response = await api.posts.getposts(this.page, this.limit);
    this.posts = response
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    }; 
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.limit){
        this.page +=1; 
        this.loadposts()
      }

    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  methods: {
    async loadposts(){
    const response = await api.posts.getposts(this.page, this.limit);
    console.log(response)
    this.posts = this.posts.concat(response)
    console.log(this.posts)
    },
    createpost(post) {
      this.posts.push(post);
      console.log(post);
      this.dialogVisibility = false;
    },
    deletepost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
  watch: {
    //   selectedSort (newValue){
    //       this.posts.
    //   }
  },
  computed: {
    Sortedpost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    searchpost() {
      return this.Sortedpost.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  padding: 10%;
}
.appbuttons {
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 10px;
}
</style>
