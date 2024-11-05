<template>
  <div>
    <template v-if="isExternal">
      <!-- External Link -->
      <a :href="to" target="_blank" rel="noopener noreferrer" class="app-link">
        <slot></slot>
      </a>
    </template>
    <template v-else>
      <!-- Internal Link -->
      <RouterLink :to="to" class="app-link">
        <slot></slot>
      </RouterLink>
    </template>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    isExternal() {
      return typeof this.to === 'string' && (this.to.startsWith('http') || this.to.startsWith('https'));
    },
  },
};
</script>