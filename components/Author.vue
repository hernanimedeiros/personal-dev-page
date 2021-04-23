<template>
    <!-- Author template -->
    <b-container>
        <NuxtLink :to="`/blog/author/${author.name}`">
        <img :src="author.img" />
        <div>
            <p> {{ author.name }} </p>
            <p> {{ author.bio }} </p>
        </div>
        </NuxtLink>
    </b-container>
</template>
