<script setup lang="ts">
import type { UseMouseEventExtractor } from "@vueuse/core";

const parentEl = useParentElement();
console.log(useMouse());
const mouseDefault = reactive(useMouse());

const extractor: UseMouseEventExtractor = (event) => {
  console.log(Touch);
  if (typeof Touch !== "undefined" && event instanceof Touch) return null;
  else return [event.offsetX, event.offsetY];
};

const mouseWithExtractor = reactive(
  useMouse({ target: parentEl, type: extractor }),
);
</script>

<template>
  <p>Basic Usage</p>
  <pre lang="yaml">{{ JSON.stringify(mouseDefault) }}</pre>
  <p>Extractor Usage</p>
  <pre lang="yaml">{{ JSON.stringify(mouseWithExtractor) }}</pre>
</template>
