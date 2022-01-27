declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Vue: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default Vue;
}
