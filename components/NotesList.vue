<template>
    <div id="notesList">
        <div id="listHeader">
            <h3>NOTES</h3>
            <div class="btn-group btn-group-justfied" role="group">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" :class="{active: show === 'all'}" @click="show='all'">
                        所有笔记
                    </button>
                    
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" :class="{active: show === 'fav'}" @click="show='fav'">
                        喜欢的笔记
                    </button>
                </div>
            </div>
        </div>
        <div id="container">
            <div class="note-list">
                <a v-for="note in newNotes" @click="setActive(note)"
                    :class="{active: note === activeNote}">
                    <h3>{{ note.text.trim().substring(0, 30) }}</h3>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #notesList {
        width: 300px;
        height: 100%;
        float: left;
        text-align: center;
        background: #e3e3e3;

        .note-list {
            text-align: left;
            a {
                &.active {
                    background: #3d88bf;
                }
                display: block;
                background: #fff;
                h3 {
                    font-size: 12px;
                    color: #000;
                    padding: 10px 10px 10px;
                } 
            }
            
        }
    }
</style>

<script>
    import {
        setActive
    } from '../vuex/actions'
    export default {
        data () {
            return {
                show: 'all'
            }
        },
        vuex: {
            getters: {
                notes: state => state.notes,
                activeNote: state => state.activeNote
            },
            actions: {
                setActive
            }
        },
        computed: {
            newNotes () {
                // let localStorage = window.localStorage
                // let localNotes = localStorage.getItem('notes')
                // console.log(localNotes)
                // if(localNotes) {
                //     localNotes = JSON.parse(localNotes)
                //     if(this.show === 'all') {
                //         return localNotes
                //     } else if(this.show === 'fav') {
                //         return localNotes.filter(note => note.fav)
                //     }
                // } else {
                if(this.show === 'all') {
                    return this.notes
                } else if(this.show === 'fav') {
                    return this.notes.filter(note => note.fav)
                }
                // }
            }
        }
    }

</script>