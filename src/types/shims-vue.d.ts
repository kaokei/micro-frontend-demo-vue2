/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import VueRouter, { Route, RawLocation, NavigationGuard } from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    beforeRouteEnter?: NavigationGuard<V>;
    beforeRouteLeave?: NavigationGuard<V>;
    beforeRouteUpdate?: NavigationGuard<V>;
  }
}

declare module 'vue-router/types/router' {
  interface VueRouter {
    pushTopState: (to: RawLocation) => Promise<Route>;
    replaceTopState: (to: RawLocation) => Promise<Route>;
  }
}
