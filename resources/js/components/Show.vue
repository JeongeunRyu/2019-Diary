<template>
    <v-layout>
        <Side message="Open your record!"/>
        <v-flex xs8 class="set-height">
               <div class="write-form">
                    <v-container fluid>
                    <v-layout column fill-height>
                        <v-text-field label="title" single-line color="#857676" v-model="post.title"></v-text-field>
                        <v-layout>
                            <span v-if="post.feeling" style=" margin-top:3.5%; margin-right:2%"><v-img :src="`/img/feeling/${post.feeling}.png`" width=3.5vh></v-img></span>
                            <span v-else style="color:#857676; font-size:3vh; margin-top:3.5%; margin-right:2%"><i class="far fa-laugh"></i></span>
                            
                            <v-select
                            :items="feeling_item"
                            v-model="post.feeling"
                            label="feeling"
                            color="#857676" 
                            item-text="name"
                            item-value="value"
                            append-icon="arrow_drop_down"
                            hide-details>
                            </v-select>
                        </v-layout>  
                            <div>{{post.content}}</div>
                    </v-layout>
                </v-container>
               </div>
        </v-flex>
       
    </v-layout>
</template>

<script>
    import Side from './Side'
    import axios from 'axios'
    export default {
        components:{Side},
        data() {
            return {
                post:{
                },
                feeling_item: [
          {name: 'excited', value: 5},
          {name: 'happy', value: 4},
          {name: 'usual', value: 3},
          {name: 'sad', value: 2},
          {name: 'angry', value: 1},
        ],
            }
        },
        created() {
     
        let url=`http://127.0.0.1:8000/api/index/show/${this.$route.params.id}`;
            return axios({method:'get',url:url})
            .then((res)=>{
                this.post = res.data;
            }).catch((err)=>
                console.log(err)
            )
        },
    
        mounted() {
            console.log('show Component mounted.')
        }
    }
</script>

<style>
.write-form{
    width: 45vw
}
</style>
