<script lang="ts">
import { defineComponent } from 'vue';

let currentId = 0;

export default defineComponent({
  props: {
    prefix: {
      type: String,
      default: 'pf-random-id-',
    },
  },

  render() {
    const id = `${this.prefix}${currentId++}`;
    return this.$slots.default({
      id,
    });
  },
});
</script>
