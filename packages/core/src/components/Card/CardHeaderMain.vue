<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfCardHeaderMain',

  render() {
    return h('div', {}, this.$slots);
  },
});
</script>
