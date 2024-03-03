<script>
import GriptStyle from "@/components/GripStyle.vue"
import ListStyle from "@/components/ListStyle.vue"
export default {
  components: {
    GriptStyle,
    ListStyle,
  },
  data(){
    return{
      selectedTab:'',
    }
  },
  methods:{
    chanteTab(tab){
      this.selectedTab = tab;
    }
  }
}

</script>

<template>
    <div class="px-7 ">
      <div class="top">
        <div class="float-start text-4xl font-bold">商品列表</div>
        <div class="float-end clear-start mb-4">
          <button @click="chanteTab('grip')" class="border border-slate-500 p-1 mr-4"><i class="fa-solid fa-grip fa-2xl"></i></button>
          <button @click="chanteTab('list')" class="border border-slate-500 p-1"><i class="fa-solid fa-list fa-xl"></i></button>
        </div>
      </div>
      <div v-if="(selectedTab==='grip')"  class="bottom clear-end gap-5 flex flex-wrap justify-center ">       
        <GriptStyle></GriptStyle>
        <GriptStyle></GriptStyle>
        <GriptStyle></GriptStyle>
        <GriptStyle></GriptStyle>
        <GriptStyle></GriptStyle>        
      </div>
      <div v-else  class="bottom clear-end gap-5 flex flex-wrap justify-center ">       
        <table class="align-middle">
          <thead >
            <tr class="border-t border-b border-slate-200 grid grid-cols-6">
              <th>商品圖片</th>
              <th>商品名稱</th>
              <th>商品描述</th>
              <th>價錢</th>
              <th></th>
            </tr>
          </thead>
          <ListStyle></ListStyle>
          <ListStyle></ListStyle>
          <ListStyle></ListStyle>
        </table>
        
      </div>
    </div>
</template>

<style>
</style>
