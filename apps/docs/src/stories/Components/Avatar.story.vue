<template>
  <doc-page title="Avatar">
    <template #description
      >An <b>avatar</b> is a visual used to represent a user. It may contain an image or a placeholder
      graphic.</template
    >

    <template #apidocs>
      <component-info name="PfAvatar" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - Custom content goes in the default slot (`children`).

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic usage">
      <template #intro>
        <pre v-md>
          Pass in the `src` property to apply an image for the avatar, or use the default slot for custom content such as icons or svg elements.
        </pre>
      </template>

      <div class="avatars">
        <pf-avatar :src="avatarImg" alt="Basic avatar with image" />
        <pf-avatar alt="Basic avatar with children">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <g>
              <rect width="48" height="48" fill="#147878"></rect>
              <rect x="36" y="42" width="6" height="6" fill="#004D4D"></rect>
              <rect x="6" y="42" width="6" height="6" fill="#004D4D"></rect>
              <rect x="12" y="36" width="24" height="6" fill="#004D4D"></rect>
              <rect x="18" y="30" width="12" height="6" fill="#004D4D"></rect>
              <rect width="6" height="24" transform="matrix(-1 0 0 1 48 12)" fill="#004D4D"></rect>
              <rect width="6" height="6" transform="matrix(-1 0 0 1 42 30)" fill="#004D4D"></rect>
              <rect width="6" height="6" transform="matrix(-1 0 0 1 36 24)" fill="#004D4D"></rect>
              <rect width="6" height="6" transform="matrix(-1 0 0 1 42 18)" fill="#004D4D"></rect>
              <rect width="6" height="6" transform="matrix(-1 0 0 1 36 12)" fill="#004D4D"></rect>
              <rect width="6" height="6" transform="matrix(-1 0 0 1 42 6)" fill="#004D4D"></rect>
              <rect x="18" width="12" height="12" fill="#004D4D"></rect>
              <rect x="6" y="30" width="6" height="6" fill="#004D4D"></rect>
              <rect x="12" y="24" width="6" height="6" fill="#004D4D"></rect>
              <rect x="6" y="18" width="6" height="6" fill="#004D4D"></rect>
              <rect x="12" y="12" width="6" height="6" fill="#004D4D"></rect>
              <rect x="6" y="6" width="6" height="6" fill="#004D4D"></rect>
              <rect y="12" width="6" height="24" fill="#004D4D"></rect>
            </g>
          </svg>
        </pf-avatar>
      </div>
    </story-canvas>

    <story-canvas title="Color modifiers">
      <template #intro>
        <pre v-md>
          Color modifiers add visual interest and automatically include a border. The available colors are: "red," "orangered," "orange," "yellow," "green," "teal," "blue," "purple," and "gray".
        </pre>
      </template>

      <div class="avatars">
        <pf-avatar v-for="color in colors" :key="color" :color="color" :alt="`${color} avatar`">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 36 36">
            <path
              fill="currentColor"
              d="M17.7,20.1c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4,6.4,2.9,6.4,6.4-2.8,6.4-6.4,6.4Z"
            />
            <path
              fill="currentColor"
              d="M30.6,36c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4,1.2-3.4,2.6-1.7,1.9-2.6,7.1-3,10.9h25.2Z"
            />
          </svg>
        </pf-avatar>
      </div>
    </story-canvas>

    <story-canvas title="With initials">
      <template #intro>
        <pre v-md>
          An avatar can display initials by using the `initials` property. It's recommended to pass only a single initial to ensure the text fits inside of the avatar.
        </pre>
      </template>

      <div class="avatars">
        <pf-avatar alt="non-color avatar with initial C" bordered initials="C" />
        <pf-avatar
          v-for="color in colors"
          :key="color"
          :color="color"
          :alt="`${color} avatar with initial C`"
          initials="C"
        />
      </div>
    </story-canvas>

    <story-canvas title="Bordered">
      <template #intro>
        <pre v-md>
          A border can be applied by passing the `bordered` property to a non-colorful avatar.
        </pre>
      </template>

      <div class="avatars">
        <pf-avatar alt="Avatar with border" bordered>
          <robot-icon />
        </pf-avatar>
      </div>
    </story-canvas>

    <story-canvas title="Size variations">
      <template #intro>
        <pre v-md>
          An avatar can be rendered at different sizes by passing the `size` property. The available sizes are: "sm," "md" (the default size), "lg," and "xl".
        </pre>
      </template>

      <div class="avatars">
        <pf-avatar alt="small red avatar with initial C" initials="C" color="red" size="sm" />
        <pf-avatar alt="medium red avatar with initial C" initials="C" color="red" size="md" />
        <pf-avatar alt="large red avatar with initial C" initials="C" color="red" size="lg" />
        <pf-avatar alt="extra large red avatar with initial C" initials="C" color="red" size="xl" />
      </div>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
.avatars {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pf-t--global--spacer--sm);
  align-items: end;
}
</style>

<script lang="ts" setup>
import avatarImg from '@patternfly/patternfly/assets/images/img_avatar-light.svg';
import RobotIcon from '@vue-patternfly/icons/robot-icon';

const colors = ['red', 'orangered', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'gray'] as const;
</script>
