<template>
  <Page>
    <template #skeleton>
      <PageHeader show-nav-toggle managed-sidebar>
        <template #logo>
          <router-link :to="{name: 'home'}">
            <Brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px" />
          </router-link>
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
            <NavItem :to="{name: 'layouts'}">
              Layouts
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

    <router-view />
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
