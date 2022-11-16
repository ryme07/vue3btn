<template>
  <div>
    <VueButton :rounded="true" color="red" size="large" @click="arnaud" />
  </div>
</template>

<script setup lang="ts">
import VueButton from "@/components/VueButton.vue";

const arnaud = (): void => console.log('click');

</script>

