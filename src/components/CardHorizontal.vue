<template>
<div class="text-left max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 bg-black lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{backgroundImage: `url(${imgUrl})`}"   title="Woman holding a mug">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                {{extra}}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">{{title}}</div>
            <p class="text-gray-700 text-base">{{description}}</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'card-h',
    props: {
        imgUrl: String,
        title: String,
        description: String,
        extra: String
    }
}
</script>