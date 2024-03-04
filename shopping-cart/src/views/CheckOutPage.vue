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
        <div class="text-3xl font-bold mb-2">購買確認及填寫資訊</div>
        <div class="product border-b">
            <table class="align-middle">
                <thead class="lg:invisible">
                    <tr class="border-t border-slate-200 grid grid-cols-5">
                        <th>商品圖片</th>
                        <th>商品名稱</th>
                        <th>價錢</th>
                        <th>數量</th>
                    </tr>
                </thead>
                <tbody class="align-middle border-t">
                    <tr class="grid grid-cols-5 py-2">
                        <td><img class="w-full" src="../assets/img/300x300.png" alt=""></td>
                        <td class="self-center text-center">Bytecard</td>
                        <td class="self-center text-center">$954</td>
                        <td class="self-center text-center">3</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center mb-2">1</div>
        </div>
        <form class="grid grid-rows-7 m-4">
            <label for="name" class="form">姓名</label>
            <input type="text" id="name" name="name" class="input"><br>   
            
            <label for="number" class="form">電話</label>
            <input type="tel" id="number" name="number" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" class="input"><br>            
            
            <label for="address" class="form">地址</label>
            <input type="text" id="address" name="address" class="input"><br>            
            
            <label for="email" class="form">電子信箱</label>
            <input type="email" id="email" name="email" class="input"><br> 
            <div class="grid grid-rows-4">
                <span class="form">付款方式</span>
                <div class="flex">
                    <span class="mr-12">
                        <input type="radio" id="credit" name="payment" value="credit" >
                        <label for="credit" >信用卡</label>                       
                    </span>
                    <input type="radio" id="cash" name="payment" value="cash">
                    <label for="cash">貨到付款</label>
                </div>
                <span class="form">運送方式</span>
                <div class="flex">
                    <span class="mr-12">
                        <input type="radio" id="home" name="deliver" value="home">
                        <label for="home">宅配</label><br>
                    </span>
                    <span>
                        <input type="radio" id="convinience" name="deliver" value="convinience">
                        <label for="convinience">超商取貨</label><br>
                    </span>
                </div>
            </div>
        </form>
        <div class="bottom">
            <div class="float-end text-2xl font-bold">商品數量: 0</div>
            <div class="clear-end float-end text-2xl font-bold mb-4">商品總金額: $0</div>
            <div class="clear-end flex justify-between">
                <button class="bg-[#8c5046] text-white py-1 px-4 rounded-md">回上頁繼續購買</button>
                <RouterLink class="mr-4 text-white" to="/CompleteShopping">
                    <button class="bg-[#50468c] text-white py-1 px-4 rounded-md">確認購買</button> 
                </RouterLink>               
            </div>
        </div>      
    </div>
</template>

<style>
.form{
    @apply text-lg font-bold mb-3
}
.input{
    @apply border border-slate-400 py-1
}

</style>