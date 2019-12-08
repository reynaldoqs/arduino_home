<template>
    <div class="overflow-hidden">
        <img class="w-full h-64 object-cover" v-bind:src="imgUrl" alt="Sunset in the mountains">
        <div class="px-4 py-3 pb-1 text-left flex justify-between">
            <div class="font-bold text-ls mb-2 leading-tight">{{title}}</div>
            <p class="text-xs leading-tight uppercase font-bold text-gray-600">
            {{description}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card',
    props:{
        imgUrl: String,
        title: String,
        description: String,
        tags: Array
    },
}
</script>