<template>
  <doc-page title="Text input">
    <pf-title class="example-heading" h="3">
      Basic
    </pf-title>
    <pf-text-input v-model="text1" aria-label="text input example" />

    <pf-title class="example-heading" h="3">
      Disabled
    </pf-title>
    <pf-text-input disabled value="disabled text input example" aria-label="disabled text input example" />

    <pf-title class="example-heading" h="3">
      Read only
    </pf-title>
    <pf-text-input readonly value="read only text input example" aria-label="read only text input example" />

    <pf-title class="example-heading" h="3">
      Validation
    </pf-title>
    <pf-text-input required pattern="[0-9a-f]*" placeholder="hexadecimal value (does not validate)" aria-label="does not validate" :autovalidate="false" />
    <br>
    <pf-text-input required pattern="[0-9a-f]*" placeholder="hexadecimal value (validates on enter/submit)" aria-label="validates on enter/submit" autovalidate />
    <br>
    <pf-text-input required pattern="[0-9a-f]*" placeholder="hexadecimal value (validates on blur)" aria-label="validates on blur" autovalidate="blur" />
    <br>
    <pf-text-input v-model="text1" required pattern="[0-9a-f]*" placeholder="hexadecimal value (validates on change)" aria-label="validates on change" autovalidate="change" />
    <br>
    <pf-text-input required pattern="[0-9a-f]*" placeholder="hexadecimal value (validates on input)" aria-label="validates on input" autovalidate="input" />

    <pf-title class="example-heading" h="3">
      Select all
    </pf-title>
    <pf-text-input value="select all on click" aria-label="select-all" @focus="$event.target.select()" />

    <pf-title class="example-heading" h="3">
      Icon variants
    </pf-title>
    <pf-text-input aria-label="text input example" icon-variant="calendar" />
    <br>
    <pf-text-input aria-label="text input example" icon-variant="clock" />
    <br>
    <pf-text-input aria-label="text input example" icon-dimensions="24px 24px" icon-url="data:image/svg+xml;charset=utf8,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot;%3E%3Cpath fill=&quot;%23a18fff&quot; d=&quot;M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z&quot;/%3E%3C/svg%3E" />
  </doc-page>
</template>

<script>
export default {
  name: 'TextInputPage',

  data() {
    return {
      text1: '',
    };
  },
};
</script>
