<template>
  <Page>
    <template #skeleton>
      <PageHeader show-nav-toggle managed-sidebar>
        <template #logo>
          <Brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px" />
        </template>
        <PageHeaderTools>
          <PageHeaderToolsGroup>
            <PageHeaderToolsItem visibility-xs="hidden">header-tools</PageHeaderToolsItem>
          </PageHeaderToolsGroup>
        </PageHeaderTools>
      </PageHeader>
      <PageSidebar nav="Navigation" nav-open managed-sidebar>
        <Nav @select="handleSelect">
          <NavGroup title="Group title 1">
            <NavItem href="#grouped-1" item-id="grp-1_itm-1" :active="activeItem === 'grp-1_itm-1'">
              Link 1
            </NavItem>
            <NavItem href="#grouped-2" item-id="grp-1_itm-2" :active="activeItem === 'grp-1_itm-2'">
              Link 2
            </NavItem>
            <NavItem href="#grouped-3" item-id="grp-1_itm-3" :active="activeItem === 'grp-1_itm-3'">
              Link 3
            </NavItem>
          </NavGroup>
          <NavGroup title="Group title 2">
            <NavItem href="#grouped-4" item-id="grp-2_itm-1" :active="activeItem === 'grp-2_itm-1'">
              Link 1
            </NavItem>
            <NavItem href="#grouped-5" item-id="grp-2_itm-2" :active="activeItem === 'grp-2_itm-2'">
              Link 2
            </NavItem>
            <NavItem href="#grouped-6" item-id="grp-2_itm-3" :active="activeItem === 'grp-2_itm-3'">
              Link 3
            </NavItem>
          </NavGroup>
          <NavList>
            <NavExpandable title="Expandable 3" group-id="grp-3" :active="activeGroup === 'grp-3'" expanded managed>
              <NavItem
                href="#expandable-1"
                group-id="grp-3"
                item-id="grp-3_itm-1"
                :active="activeItem === 'grp-3_itm-1'"
              >
                Subnav Link 1
              </NavItem>
              <NavItemSeparator />
              <NavItem group-id="grp-3" item-id="grp-3_itm-2" :active="activeItem === 'grp-3_itm-2'">
                Subnav Link 2
              </NavItem>
              <NavItem href="#expandable-3" group-id="grp-3" item-id="grp-3_itm-3" :active="activeItem === 'grp-3_itm-3'">
                Subnav Link 3
              </NavItem>
            </NavExpandable>
            <NavExpandable title="Expandable 4" group-id="grp-4" :active="activeGroup === 'grp-4'" expanded managed>
              <NavItem
                group-id="grp-4"
                item-id="own-item-handler"
                :active="activeItem === 'own-item-handler'"
                @select="handleItemOnclick"
              >
                Custom onClick
              </NavItem>
              <NavItem
                href="#expandable-4"
                group-id="grp-4"
                item-id="grp-4_itm-1"
                :active="activeItem === 'grp-4_itm-1'"
              >
                Subnav Link 1
              </NavItem>
              <NavItem
                href="#expandable-5"
                group-id="grp-4"
                item-id="grp-4_itm-2"
                :active="activeItem === 'grp-4_itm-2'"
              >
                Subnav Link 2
              </NavItem>
              <NavItem
                href="#expandable-6"
                group-id="grp-4"
                item-id="grp-4_itm-3"
                :active="activeItem === 'grp-4_itm-3'"
              >
                Subnav Link 3
              </NavItem>
            </NavExpandable>
          </NavList>
        </Nav>
      </PageSidebar>
    </template>

    <PageSection variant="light">Test Light</PageSection>
    <PageSection>Test Default</PageSection>
    <PageSection variant="dark">Test Dark</PageSection>
    <PageSection variant="darker" padding-xl="no-padding">Test Darker</PageSection>

    <h2 class="pf-c-title pf-m-4xl">Bullseye Layout</h2>
    <Bullseye>
      Bullseye ◎ layout
    </Bullseye>

    <h2 class="pf-c-title pf-m-4xl">Flex Layout</h2>
    <Flex justify-content="space-between">
      <FlexItem align-self-sm="flex-start">Flex 1</FlexItem>
      <FlexItem align-self-sm="flex-start" :grow-md="grow">Flex 2</FlexItem>
    </Flex>

    <label><input type="checkbox" v-model="grow"> grow flex 2</label>

    <Flex>
      <Flex flex="1">
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex flex="1">
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex flex="1">
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
    </Flex>

    <h2 class="pf-c-title pf-m-4xl">Gallery Layout</h2>
    <Gallery gutter>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
    </Gallery>

    <h2 class="pf-c-title pf-m-4xl">Grid Layout</h2>
    <Grid gutter>
      <GridItem span="8">span = 8</GridItem>
      <GridItem span="4" row-span="2">
        span = 4, rowSpan = 2
      </GridItem>
      <GridItem span="2" row-span="3">
        span = 2, rowSpan = 3
      </GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="4">span = 4</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="4">span = 4</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="4">span = 4</GridItem>
      <GridItem span="4">span = 4</GridItem>
    </Grid>

    <h2 class="pf-c-title pf-m-4xl">Level Layout</h2>
    <Level gutter>
      <LevelItem>Level Item</LevelItem>
      <LevelItem>Level Item</LevelItem>
      <LevelItem>Level Item</LevelItem>
    </Level>

    <h2 class="pf-c-title pf-m-4xl">Split Layout</h2>
    <Split gutter>
      <SplitItem>content</SplitItem>
      <SplitItem filled>pf-m-fill</SplitItem>
      <SplitItem>content</SplitItem>
    </Split>

    <h2 class="pf-c-title pf-m-4xl">Stack Layout</h2>
    <Stack gutter>
      <StackItem>content</StackItem>
      <StackItem filled>pf-m-fill</StackItem>
      <StackItem>content</StackItem>
    </Stack>
  </Page>
</template>

<script>
import '@patternfly/patternfly/patternfly.css';
// import '@patternfly/patternfly/patternfly-base.css';
// import '@patternfly/patternfly/base/patternfly-common.css';
// import '@patternfly/patternfly/base/patternfly-fa-icons.css';
// import '@patternfly/patternfly/base/patternfly-fonts.css';
// import '@patternfly/patternfly/base/patternfly-globals.css';
// import '@patternfly/patternfly/base/patternfly-icons.css';
// import '@patternfly/patternfly/base/patternfly-pf-icons.css';
// import '@patternfly/patternfly/base/patternfly-shield-inheritable.css';
// import '@patternfly/patternfly/base/patternfly-shield-noninheritable.css';
// import '@patternfly/patternfly/base/patternfly-themes.css';
// import '@patternfly/patternfly/base/patternfly-variables.css';

export default {
  name: "App",

  data() {
    return {
      grow: false,
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1',
    };
  },

  methods: {
    handleSelect(e, groupId, itemId) {
      this.activeGroup = groupId;
      this.activeItem = itemId;
    },

    handleItemOnclick(e, groupId, itemId) {
      alert(itemId);
    },
  },
};
</script>
