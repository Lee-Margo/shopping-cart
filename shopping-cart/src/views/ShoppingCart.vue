<script>
    import Items from "@/components/ShoppingCartItems.vue"
    export default {
        components:{
            Items,
        }
    }
</script>

<template>
    <div class="m-5">
        <div class="top">
            <span class="text-3xl font-bold">購物車確認</span>
        </div>
        <div class="mid">
            <table class="align-middle">
                <thead >
                    <tr class="border-t border-b border-slate-200 grid grid-cols-6">
                        <th></th>
                        <th>商品圖片</th>
                        <th>商品名稱</th>
                        <th>價錢</th>
                    </tr>
                </thead>
                <tbody class="border-b">
                    <Items></Items>
                    <Items></Items>
                </tbody>
            </table>
        </div>
        <div class="bottom mt-4">
            <div class="float-end text-2xl font-bold">商品數量: 0</div>
            <div class="clear-end float-end text-2xl font-bold mb-4">商品總金額: $0</div>
            <div class="clear-end flex justify-between">
                <button class="bg-[#8c5046] text-white py-1 px-4 rounded-md">回上頁繼續購買</button>

                <RouterLink to="/CheckOutPage"> 
                    <button class="bg-[#50468c] text-white py-1 px-4 rounded-md">確認購買</button> 
                </RouterLink>                         
            </div>
        </div>        
    </div>
</template>

<style></style>