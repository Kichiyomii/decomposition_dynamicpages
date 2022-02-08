<template>
    <button class="button">
        <slot> </slot>
    </button>
</template>

<script>
    export default {
        name: "k-button"
    }
</script>

<style scoped>
.button {
  width: 140px;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgb(80, 48, 48);
  margin-top: 20px;
}
</style>