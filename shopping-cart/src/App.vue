<script setup>

</script>

<template>
  <header class="bg-black text-white p-2 mb-3 ">
    <div class="wrapper">
      <nav class="flex justify-between">
        <RouterLink class="mr-4 text-yellow-200" to="/">shopping</RouterLink>
        <RouterLink class="mr-4 text-white" to="/CompleteShopping">CompleteShopping</RouterLink>
        <RouterLink class="mr-4 text-yellow" to="/ShoppingCart"><img src="@/assets/img/svgexport-1.svg" alt=""></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
