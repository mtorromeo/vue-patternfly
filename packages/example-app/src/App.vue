<template>
  <pf-page managed-sidebar>
    <template #skeleton>
      <pf-page-header show-nav-toggle>
        <template #logo>
          <router-link :to="{name: 'home'}">
            <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" />
          </router-link>
        </template>

        <pf-page-header-tools>
          <pf-page-header-tools-group>
            <pf-page-header-tools-item visibility-xs="hidden">
              header-tools
            </pf-page-header-tools-item>
          </pf-page-header-tools-group>
        </pf-page-header-tools>
      </pf-page-header>

      <pf-page-sidebar nav="PfNavigation" nav-open>
        <pf-nav @select="handleSelect">
          <pf-nav-group title="Overview">
            <pf-nav-item :to="{name: 'layouts'}">
              Layouts
            </pf-nav-item>
          </pf-nav-group>
          <pf-nav-group title="Components">
            <pf-nav-item :to="{name: 'alert'}">
              Alert
            </pf-nav-item>
            <pf-nav-item :to="{name: 'alert-group'}">
              Alert group
            </pf-nav-item>
            <pf-nav-item :to="{name: 'badge'}">
              Badge
            </pf-nav-item>
            <pf-nav-item :to="{name: 'button'}">
              Button
            </pf-nav-item>
            <pf-nav-item :to="{name: 'chipgroup'}">
              Chip group
            </pf-nav-item>
            <pf-nav-item :to="{name: 'dropdown'}">
              Dropdown
            </pf-nav-item>
            <pf-nav-item :to="{name: 'label'}">
              Label
            </pf-nav-item>
            <pf-nav-item :to="{name: 'pagination'}">
              Pagination
            </pf-nav-item>
            <pf-nav-item :to="{name: 'spinner'}">
              Spinner
            </pf-nav-item>
            <pf-nav-item :to="{name: 'switch'}">
              Switch
            </pf-nav-item>
            <pf-nav-item :to="{name: 'title'}">
              Title
            </pf-nav-item>
            <pf-nav-item :to="{name: 'text-input'}">
              TextInput
            </pf-nav-item>
            <pf-nav-item :to="{name: 'toolbar'}">
              Toolbar
            </pf-nav-item>
          </pf-nav-group>
          <pf-nav-list>
            <pf-nav-expandable title="Expandable 3" group-id="grp-3" :active="activeGroup === 'grp-3'" expanded managed>
              <pf-nav-item
                href="#expandable-1"
                group-id="grp-3"
                item-id="grp-3_itm-1"
                :active="activeItem === 'grp-3_itm-1'"
              >
                Subnav Link 1
              </pf-nav-item>
              <pf-nav-item-separator />
              <pf-nav-item group-id="grp-3" item-id="grp-3_itm-2" :active="activeItem === 'grp-3_itm-2'">
                Subnav Link 2
              </pf-nav-item>
              <pf-nav-item href="#expandable-3" group-id="grp-3" item-id="grp-3_itm-3" :active="activeItem === 'grp-3_itm-3'">
                Subnav Link 3
              </pf-nav-item>
            </pf-nav-expandable>
            <pf-nav-expandable title="Expandable 4" group-id="grp-4" :active="activeGroup === 'grp-4'" expanded managed>
              <pf-nav-item
                group-id="grp-4"
                item-id="own-item-handler"
                :active="activeItem === 'own-item-handler'"
                @select="handleItemOnclick"
              >
                Custom onClick
              </pf-nav-item>
              <pf-nav-item
                href="#expandable-4"
                group-id="grp-4"
                item-id="grp-4_itm-1"
                :active="activeItem === 'grp-4_itm-1'"
              >
                Subnav Link 1
              </pf-nav-item>
              <pf-nav-item
                href="#expandable-5"
                group-id="grp-4"
                item-id="grp-4_itm-2"
                :active="activeItem === 'grp-4_itm-2'"
              >
                Subnav Link 2
              </pf-nav-item>
              <pf-nav-item
                href="#expandable-6"
                group-id="grp-4"
                item-id="grp-4_itm-3"
                :active="activeItem === 'grp-4_itm-3'"
              >
                Subnav Link 3
              </pf-nav-item>
            </pf-nav-expandable>
          </pf-nav-list>
        </pf-nav>
      </pf-page-sidebar>
    </template>

    <router-view />
  </pf-page>
  <!-- -->
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
