<template>
    <div id="app">
        <toolbar></toolbar>
        <notes-list></notes-list>
        <Editor></Editor>
    </div>
</template>

<style>
    #app {
        height: 100%
    }
</style>    

<script>
    import Editor from './Editor.vue'
    import NotesList from './NotesList.vue'
    import Toolbar from './Toolbar.vue'

    export default {
        components: {
            Editor,
            Toolbar,
            NotesList
        }
    }   
</script>
