<template>
    <v-layout>
        <Side message="Open your record!"/>
            <v-flex xs8 class="set-height">
                <v-container fluid>
                    <v-layout column fill-height>
                        <div>
                            <Chart v-if="loaded" :height="150" :posts="this.posts" />
                        </div>
                        <v-layout>
                            <v-flex class="text-xs-center">
                                <div>
                            <div v-for="post in posts" :key="post.id">
                                <span>{{post.created_at | substr(10,"")}}</span>
                                <span class="px-5 post-title"><router-link :to="{name:'show',params:{id:post.id}}">{{post.title | substr(20," ...")}}</router-link></span>
                                <span><v-btn round color="blue-grey lighten-4" :to="{name: 'edit', params : { id:post.id }}">edit</v-btn></span>
                                <span><v-btn round dark color="red lighten-2" @click="deletePost(post.id)">delete</v-btn></span>
                            </div>
                        </div>
                            </v-flex>
                        </v-layout>
                        
                    </v-layout>
                </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import  { view }   from    '../api.js'
    import  Side     from    './Side'
    import  Chart    from    './Chart.js'
    

    export default {
        components:{Side,Chart},
        data() {
            return {
                posts:[],
                loaded:false,
            }
        },
        filters:{
      substr(str,length,endmsg){
        if(str.length>length){
            return str.substr(0,length)+endmsg
        }
        else{
            return str.substr(0,length)
        }
      }
    },
        mounted() {
            console.log('View Component mounted.')
        },
        created(){
            this.loaded = false
        return view.postView()
            .then((res)=>{
                this.posts=res.data
                this.loaded=true
            }).catch((err)=>
                console.log(err)
            )
        },
        methods:{
            deletePost(id){
                return view.postDelete(id)
                .then((res)=>{
                    console.log('성공');
                    // 삭제 처리
                    
                }).catch((err)=>
                console.log(err)
                
                )
            }
        }
    }
</script>

<style>
.post-title{
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;
    min-width: 35vw;
}
</style>
0