<template>
  <PageSection variant="light">
    <Title>Dropdown</Title>

    <Title class="example-heading" h="3">Basic</Title>
    <Dropdown v-model:open="open" text="Dropdown">
      <DropdownItem key="link">Link</DropdownItem>
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>
      <DropdownItem key="disabled link" disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem key="disabled action" disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator key="separator" />
      <DropdownItem key="separated link">Separated Link</DropdownItem>
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>
  </PageSection>
</template>

<script>
export default {
  name: 'DropdownPage',

  data() {
    return {
      open: true,
    };
  },
};
</script>
