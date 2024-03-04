<script>
import Items from "@/components/ShoppingCartItems.vue"
export default {
    components: {
        Items,
    }
}
</script>

<template>
    <div class="m-5">
        <div class="text-3xl font-bold mb-2">完成購買</div>
        <div class="border-b">
            <table class="align-middle">
                <thead >
                    <tr class="border-t border-b border-slate-200 grid grid-cols-6">
                        <th></th>
                        <th>商品圖片</th>
                        <th>商品名稱</th>
                        <th>價錢</th>
                        <th>數量</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class=" align-middle">
                    <tr class="grid grid-cols-6 py-2">
                        <td></td>
                        <td><img class="w-full" src="../assets/img/300x300.png" alt=""></td>
                        <td class="self-center text-center">Bytecard</td>
                        <td class="self-center text-center">$954</td>
                        <td class="self-center text-center">3</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">1</div>
        </div>
        <div class="mt-8 border-b">
            <table class="align-middle">
                <thead>
                    <tr class="border-t border-b border-slate-200 grid grid-cols-8">
                        <th></th>
                        <th>姓名</th>
                        <th>電話</th>
                        <th>地址</th>
                        <th>付款方式</th>
                        <th>電子信箱</th>
                        <th>運送方式</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class=" align-middle text-wrap">
                    <tr class="grid grid-cols-8 py-10">
                        <td></td>
                        <td class="self-center text-center">李依宸</td>
                        <td class="self-center text-center">09123456789</td>
                        <td class="self-center text-center">台中市</td>
                        <td class="self-center text-center">信用卡</td>
                        <td class="self-center text-center">margo123456@gmail.com</td>
                        <td class="self-center text-center">超商取貨</td>          
                        <td></td>             
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <button type="button" class="w-full text-center bg-[#50468C] text-white rounded-md">回首頁</button>


</template>