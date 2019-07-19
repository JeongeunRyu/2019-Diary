<template>
  <v-layout>
    <Side message="Feel free to edit!"/>
    <v-flex xs8 class="set-height">
      <v-form  @submit.prevent="updatePost()">
        <div class="write-form">
          <v-container fluid>
            <v-layout column fill-height>
              <v-text-field
               label="title" single-line color="#857676"
               v-model="post.title"
               ></v-text-field>
              <v-layout>
                <span
                 v-if="post.feeling"
                 style=" margin-top:3.5%; margin-right:2%">
                    <v-img
                     :src="`/img/feeling/${post.feeling}.png`"
                     width=3.5vh>
                    </v-img>
                </span>
                <span
                 v-else
                 style="color:#857676; font-size:3vh; margin-top:3.5%; margin-right:2%"
                 >
                  <i class="far fa-laugh"></i>
                </span>
                  <v-select
                   :items="feeling_item"
                   v-model="post.feeling"
                   label="feeling" hide-details
                   item-text="name" item-value="value"
                   color="#857676" append-icon="arrow_drop_down"
                   ></v-select>
                        </v-layout>  
                            <v-textarea label="content" single-line color="#857676" v-model="post.content" ></v-textarea>
               
                        <v-btn block color="#857676" dark type="submit">
                            update
                        </v-btn>
                    </v-layout>
                </v-container>
               </div>

            </v-form>
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
     
        let url=`http://127.0.0.1:8000/api/post/edit/${this.$route.params.id}`;
            return axios({method:'get',url:url})
            .then((res)=>{
                this.post = res.data;
            }).catch((err)=>
                console.log(err)
            )
        },
    methods: {
      updatePost(){
        let url=`http://127.0.0.1:8000/api/post/update/${this.$route.params.id}`;
            return axios({method:'post',url:url,data:this.post})
            .then((res)=>{
                this.$router.push({name:'view'})
            }).catch((err)=>
                console.log(err)
            )
      }
    },
        mounted() {
            console.log('Edit Component mounted.')
        }
    }
</script>

<style>

.write-form{
    width: 45vw
}
</style>
