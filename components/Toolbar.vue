<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" @click="addNote"></i>
        <i class="glyphicon glyphicon-star" @click="toggleFav"
            :class="{favorite: activeNote.fav}"></i>
        <i class="glyphicon glyphicon-remove" @click="delNote"></i>
    </div>
</template>

<style lang="less">
    #toolbar {
        width: 72px;
        height: 100%; 
        background: #2d414e;
        text-align: center;
        font-size: 30px;
        float: left;
        i {
            display: block;
            color: #676b6e;
        }
        .glyphicon-plus {
            padding-top: 50px;
            margin-bottom: 50px;
        }
        .glyphicon-star {
            margin-bottom: 50px;
        }
        .favorite {
            color: #fff;
        }
    }
</style>

<script>
    import {
        addNote,
        toggleFav,
        delNote
    } from '../vuex/actions'

    export default {
        data () {
            return {

            }
        },
        vuex: {
            actions: {
                addNote,
                toggleFav,
                delNote
            },
            getters: {
                activeNote: state => state.activeNote
            }
        }
    }
</script>