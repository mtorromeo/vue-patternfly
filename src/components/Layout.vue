<template>
<div :class="{
  'pf-layout-flex': display == 'flex',
  'pf-layout-grid': display == 'grid',
}">
  <nav v-if="!disabled" class="navbar" :class="{
      'navbar-pf': horizontal,
      'navbar-pf-vertical': !horizontal,
    }" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" v-if="collapsable" @click="collapsed = !collapsed">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <slot name="brand"/>
    </div>

    <div class="collapse navbar-collapse navbar-collapse-1">
      <ul v-if="horizontal" class="nav navbar-nav navbar-primary" :class="{'persistent-secondary': horizontalSecondary}">
        <slot name="horizontal-menu"/>
      </ul>

      <ul class="nav navbar-nav" :class="{
        'navbar-utility': horizontal,
        'navbar-right': !horizontal,
        'navbar-iconic': !horizontal,
      }">
        <slot name="utility-menu"/>
      </ul>
    </div>
  </nav>

  <div v-if="!disabled && !horizontal" class="nav-pf-vertical nav-pf-vertical-with-sub-menus" :class="{
      collapsed: collapsed,
      hidden: mobile,
      'hidden-icons-pf': !icons,
      'show-mobile-nav': mobile && !collapsed,
      'secondary-visible-pf': secondaryMenus && !tertiaryMenus && !tablet,
      'show-mobile-secondary': secondaryMenus && !tertiaryMenus && mobile,
      'hover-secondary-nav-pf': secondaryMenus || tertiaryMenus,
      'tertiary-visible-pf': tertiaryMenus && !tablet,
      'show-mobile-tertiary': tertiaryMenus && mobile,
      'hover-tertiary-nav-pf': tertiaryMenus,
    }">
    <ul class="list-group">
      <slot name="vertical-menu"/>
    </ul>
  </div>

  <div class="pf-layout-container" :class="{
      'hidden-nav': mobile,
      'container-flex': !disabled && display == 'flex',
      'container-fluid': !disabled && !nomargin,
      'collapsed-nav': !disabled && collapsed,
      'container-pf-nav-pf-vertical': !disabled && !horizontal,
      'hidden-icons-pf': !disabled && !icons,
    }">
    <slot/>

    <modals-target/>
  </div>
</div>
</template>

<script>
import {PortalTarget} from 'portal-vue';
import ModalsTarget from './ModalsTarget.vue';

export default {
  name: 'pf-layout',

  components: {
    ModalsTarget,
    /* eslint-disable-next-line vue/no-unused-components */
    PortalTarget,
  },

  props: {
    display: {
      type: String,
      default: 'block',
      validator: display => ['block', 'flex', 'grid'].indexOf(display) >= 0,
    },

    icons: Boolean,
    horizontal: Boolean,
    collapsable: Boolean,
    disabled: Boolean,
    nomargin: Boolean,
    horizontalSecondary: Boolean,
  },

  data() {
    return {
      collapsed: false,
      secondaryMenus: 0,
      tertiaryMenus: 0,
      width: 1200,
    };
  },

  mounted() {
    window.addEventListener('resize', this.resize);
    this.resize();
  },

  destroyed() {
    window.removeEventListener('resize', this.resize);
  },

  computed: {
    desktop() {
      return this.width >= 1200;
    },

    tablet() {
      return this.width < 1200 && this.width >= 768;
    },

    mobile() {
      return this.width < 768;
    },
  },

  methods: {
    resize() {
      const html = document.documentElement;
      this.width = html.offsetWidth;
    },

    updateHtmlClasses() {
      const html = document.documentElement;
      html.classList.add('transitions');
      if (this.disabled) {
        html.classList.remove('layout-pf');
        html.classList.remove('layout-pf-fixed');
        html.classList.remove('layout-pf-fixed-grid');
      } else {
        html.classList.add('layout-pf');
        if (this.horizontal) {
          html.classList.remove('layout-pf-fixed');
          html.classList.remove('layout-pf-fixed-grid');
        } else {
          html.classList.add('layout-pf-fixed');
          if (this.display == 'grid') {
            html.classList.add('layout-pf-fixed-grid');
          } else {
            html.classList.remove('layout-pf-fixed-grid');
          }
        }
      }
    },
  },

  watch: {
    horizontal: {
      handler() {
        this.updateHtmlClasses();
      },
      immediate: true,
    },

    disabled() {
      this.updateHtmlClasses();
    },

    display() {
      this.updateHtmlClasses();
    },

    desktop() {
      if (!this.desktop) {
        this.collapsed = true;
      }
    },

    mobile() {
      if (this.mobile) {
        this.collapsed = true;
      }
    },

    collapsed() {
      this.$emit('update:collapsed', this.collapsed);
    },
  },
};
</script>

<style>
.layout-pf .pf-layout-container {
  position: relative;
  height: 100%;
}

nav.navbar-pf > .collapse .navbar-right:last-child,
nav.navbar-pf-vertical > .collapse .navbar-right:last-child {
  margin-right: 0;
}

.layout-pf.layout-pf-fixed.layout-pf-fixed-grid body {
  padding-top: 0;
}

.layout-pf.layout-pf-fixed.transitions .nav-pf-vertical {
  transition: all .2s cubic-bezier(.35,0,.25,1);
}

.layout-pf.layout-pf-fixed .container-pf-nav-pf-vertical {
  margin-left: 200px;
}

.pf-layout-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

.layout-pf-fixed .pf-layout-grid {
  grid-template-columns: auto 1fr;
}

.pf-layout-grid > .navbar {
  grid-column: 1;
  grid-row: 1;
}

.layout-pf-fixed .pf-layout-grid > .navbar {
  position: inherit;
  grid-column: 1 / 3;
}

.pf-layout-grid > .nav-pf-vertical {
  position: inherit;
  grid-column: 1;
  grid-row: 2;
}

.pf-layout-grid > .pf-layout-container {
  height: auto;
}

.layout-pf .pf-layout-grid > .pf-layout-container,
.layout-pf .pf-layout-flex > .pf-layout-container,
.layout-pf.layout-pf-fixed .pf-layout-grid > .pf-layout-container,
.layout-pf.layout-pf-fixed .pf-layout-flex > .pf-layout-container {
  overflow: auto;
  margin-right: 0;
}

.layout-pf .pf-layout-grid > .pf-layout-container,
.layout-pf.layout-pf-fixed .pf-layout-grid > .pf-layout-container {
  margin-left: 0;
}

.pf-layout-flex,
.container-flex {
  display: flex;
  flex-direction: column;
}

.pf-layout-flex {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.pf-layout-flex > .navbar {
  flex-shrink: 0;
  position: relative;
}

.pf-layout-flex > .container-flex {
  flex-grow: 1;
}

.navbar-header .navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-header .navbar-brand img,
.navbar-header .navbar-brand svg {
  display: inline-block;
  margin-right: 1em;
}

.navbar-pf-vertical .navbar-brand-name {
  font-size: 18px;
  line-height: 35px;
}

.navbar-pf .navbar-brand-name {
  padding: 7px 0;
}

.navbar-pf .navbar-primary.persistent-secondary {
  display: flex;
}

.navbar-pf .navbar-nav > .list-group-item {
  padding: 0;
  background-color: initial;
  border: none;
}

@media (min-width: 768px) {
  .navbar-pf .navbar-brand-name {
    padding: 3px 0;
  }
}
</style>
