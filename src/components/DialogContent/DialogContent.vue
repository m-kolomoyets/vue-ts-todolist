<script setup lang="ts">
import { DialogContent, DialogOverlay, DialogPortal, DialogTitle } from 'radix-vue'

const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent>
      <DialogTitle>
        {{ title }}
      </DialogTitle>
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

<style module></style>
