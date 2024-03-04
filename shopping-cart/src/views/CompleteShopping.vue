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
        <div class="text-3xl font-bold">完成購買</div>
        <div class="border-b">
            <table class="align-middle">
                <thead >
                    <tr class="border-t border-b border-slate-200 grid grid-cols-5">
                        <th>商品圖片</th>
                        <th>商品名稱</th>
                        <th>價錢</th>
                        <th>數量</th>
                    </tr>
                </thead>
                <tbody class=" align-middle">
                    <tr class="grid grid-cols-5 py-2">
                        <td><img class="w-full" src="../assets/img/300x300.png" alt=""></td>
                        <td class="self-center text-center">Bytecard</td>
                        <td class="self-center text-center">$954</td>
                        <td class="self-center text-center">3</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">1</div>
        </div>
        <div></div>
        <div></div>
    </div>


</template>