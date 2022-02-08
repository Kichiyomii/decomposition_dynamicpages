<template>
  <div class="forinput">
    <form>
      <k-input
        v-model:value="post.title"
        placeholder="Название"
      />
      <k-input
        v-model:value="post.body"
        placeholder="Описание"
      />
    </form>
    <div class="forbtn">
      <k-button @click="savepost()" class="button">Создать</k-button>
    </div>
  </div>
</template>

<script>
import KButton from "../components/UI/KButton"
export default {
    components: {
        KButton
    },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    savepost() {
    this.post.id = Date.now()
    this.$emit('save', this.post)
    this.post={
        title: "",
        body: "",
    }
    },
  },
  watch: {
      post: {
          handler(newValue){
              console.log(newValue)
          },
          deep: true,
      }
  },
};
</script>

<style>
.button {
  width: 140px;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgb(80, 48, 48);
  margin-top: 20px;
}
.forbtn {
  align-self: flex-end;
}
.forinput {
  display: flex;
  flex-direction: column;
}
</style>
