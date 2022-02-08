<template>   
<transition-group name="postlist">
      <post-item
    :post="post"
    v-for="post in posts"
    :key="post.id"
    class="posts"
    @delete="$emit('delete', post)"
  />
</transition-group>
</template>

<script>
import KButton from "@/components/UI/KButton";
import PostItem from "@/components/PostItem";
export default {
  components: {
    KButton,
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.posts {
  margin-top: 20px;
  border: 1px solid rgb(80, 48, 48);
  padding: 10px 20px;
}
.postlist-item {
  display: inline-block;
  margin-right: 10px;
}
.postlist-enter-active, .postlist-leave-active {
  transition: all 0.5s;
}
.postlist-enter, .postlist-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(130px);
}
.postlist-move {
  transition: transform 1s;
}
</style>
