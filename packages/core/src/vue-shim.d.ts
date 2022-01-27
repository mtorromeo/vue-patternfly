declare module "*.vue" {
  import { DefineComponent } from 'vue';
  const Vue: DefineComponent<{}, {}, any>;
  export default Vue;
}
