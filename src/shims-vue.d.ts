// filepath: /Users/tim/Desktop/Web-Portfolio/src/shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }