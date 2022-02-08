<template>
    <input :value="value" @input="updateInput" type="text" class="input">
</template>

<script>
    export default {
        name: "k-input",
        props: {
            value: [String, Number]
        },
        methods: {
            updateInput(event){
                this.$emit('update:value', event.target.value)
            }
        }
    }
</script>

<style>
.input {
  width: 100%;
  border: 1px solid rgb(80, 48, 48);
  padding: 10px 15px;
  margin-top: 20px;
}
</style>