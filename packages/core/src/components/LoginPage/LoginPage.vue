<template>
  <pf-background-image v-if="backgroundImgSrc" :src="backgroundImgSrc" />

  <pf-login>
    <template #header>
      <pf-login-header>
        <slot name="brand">
          <pf-brand v-if="brandImgSrc" :src="brandImgSrc" :alt="brandImgAlt" />
        </slot>
      </pf-login-header>
    </template>

    <template #footer>
      <pf-login-footer>
        <p>{{ textContent }}</p>
        <pf-list :variant="footerListVariants">
          <slot name="footerListItems" />
        </pf-list>
      </pf-login-footer>
    </template>

    <pf-login-main-header :title="title" :subtitle="subtitle">
      <template v-if="$slots.utilities" #utilities>
        <slot name="utilities" />
      </template>
    </pf-login-main-header>

    <pf-login-main-footer v-if="$slots.social || $slots.forgotCredentials || $slots.signup">
      <template v-if="$slots.social" #social>
        <slot name="social" />
      </template>
      <template v-if="$slots.forgotCredentials" #forgotCredentials>
        <slot name="forgotCredentials" />
      </template>
      <template v-if="$slots.signup" #signup>
        <slot name="signup" />
      </template>
    </pf-login-main-footer>

    <pf-login-main-body>
      <slot />
    </pf-login-main-body>
  </pf-login>
</template>

<script lang="ts" setup>
import PfLogin from './Login.vue';
import PfLoginMainHeader from './LoginMainHeader.vue';
import PfLoginMainBody from './LoginMainBody.vue';
import PfLoginMainFooter from './LoginMainFooter.vue';
import PfLoginHeader from './LoginHeader.vue';
import PfLoginFooter from './LoginFooter.vue';
import PfBrand from '../Brand.vue';
import PfList, { type ListVariant } from '../List/List.vue';
import PfBackgroundImage, { type BackgroundImageSrcMap } from '../BackgroundImage.vue';

defineProps<{
  /** Attribute that specifies the URL of the brand image for the login page */
  brandImgSrc?: string;
  /** Attribute that specifies the alt text of the brand image for the login page */
  brandImgAlt?: string;
  /** Attribute that specifies the URL of the background image for the login page */
  backgroundImgSrc?: string | BackgroundImageSrcMap;
  /** Attribute that specifies the alt text of the background image for the login page */
  backgroundImgAlt?: string;
  /** Content rendered inside of the text component of the login page */
  textContent?: string;
  /** Adds list variant styles for the footer list component of the login page. The only current value is'inline' */
  footerListVariants?: ListVariant.inline;
  /** Title for the login main body header of the login page */
  title: string;
  /** Subtitle for the login main body header of the login page */
  subtitle?: string;
}>();
</script>
