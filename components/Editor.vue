<template>
    <div id="editor">
        <textarea class="form-control" @input="editeNote">{{activeNote.text }}</textarea>
    </div>
</template>

<style lang="less">
    #editor {
        margin-left: 372px;
        height: 100%;
        textarea {
            height: 100%;
            border: 0;
        }
    }
</style>

<script>
    import {
        editeNote
    } from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                editeNote
            }
        }
    }
</script>