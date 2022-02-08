<template>
    <div>
         <strong>
      <p class="header">{{ post.title }}</p>
    </strong>
    <br />
    <p class="mainconten">{{ post.body }}</p>
    <k-button @click="$emit('delete', post)" class="button">Удалить</k-button>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style>

</style>