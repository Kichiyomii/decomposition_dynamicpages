<template>
    <div @click="hideDialog()"  class="dialog" v-if="show">
        <div @click.stop class="dialog__cont">
            <slot> </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'k-dialog',
        props:{
            show: {
                type: Boolean,
                default: false,
            }

        },
        methods: {
            hideDialog(){
                this.$emit('update:show', false)
            }
        },
    }
</script>

<style>
.dialog{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    display: flex;
}
.dialog__cont{
    margin: auto;
    align-self: center;
    background: white;
    border-radius: 12px;
    min-width: 120px;
    min-height: 100px;
    padding: 3%;
}
</style>