<script>
import { h } from 'vue';

export default {
  name: 'PfCardHeaderMain',

  render() {
    return h('div', {}, this.$slots);
  },
};
</script>
