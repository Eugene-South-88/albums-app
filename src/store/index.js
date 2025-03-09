import {defineStore} from "pinia";
import {getAlbums} from "@/api/albums.js";

const useStore = defineStore('store',{
  state: ()=>({
    themeApp: 'light',

    albumsList: []
  }),
  actions:{
    handleSubmit(){
      getAlbums().then((res)=>{
        state.albumsList = res
      })
    }
  }
})

export default useStore