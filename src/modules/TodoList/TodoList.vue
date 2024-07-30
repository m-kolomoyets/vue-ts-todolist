<script setup lang="ts">
import { SplitterGroup, SplitterPanel, DialogRoot, DialogTrigger } from 'radix-vue'
import { useTodoList } from './hooks/useTodoList'
import DialogContent from '@/components/DialogContent'

const [list, { total }] = useTodoList()
</script>

<template>
  <SplitterGroup id="splitter-root-group" direction="horizontal">
    <SplitterPanel
      id="splitter-todos-list-panel"
      :min-size="20"
      class="bg-white rounded-xl flex items-center justify-center"
    >
      <ul v-if="!!total">
        <li v-for="item in list" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
      <div v-else>
        <p>No items</p>
        <DialogRoot>
          <DialogTrigger> Add new one </DialogTrigger>
          <DialogContent title="New Todo">Hello there </DialogContent>
        </DialogRoot>
      </div>
    </SplitterPanel>
    <SplitterPanel id="splitter-metadata-panel" :min-size="20">
      <SplitterGroup id="splitter-metadata-group" direction="vertical">
        <SplitterPanel
          id="splitter-group-2-panel-1"
          class="bg-white rounded-xl flex items-center justify-center"
        >
          {{ total }}
        </SplitterPanel>
        <SplitterPanel
          id="splitter-group-2-panel-2"
          :min-size="20"
          class="bg-white rounded-xl flex items-center justify-center"
        >
          Tricky content will be here
        </SplitterPanel>
      </SplitterGroup>
    </SplitterPanel>
  </SplitterGroup>
</template>
