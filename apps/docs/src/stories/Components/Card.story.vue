<template>
  <define-kebab v-slot="{ label }">
    <pf-dropdown close-on-select position="right">
      <template #toggle>
        <pf-menu-toggle variant="plain" :aria-label="label">
          <template #icon>
            <ellipsis-vertical-icon />
          </template>
        </pf-menu-toggle>
      </template>
      <pf-dropdown-item component="button">Action</pf-dropdown-item>
      <pf-dropdown-item to="#" @click.prevent>Link</pf-dropdown-item>
      <pf-dropdown-item component="button" disabled>Disabled Action</pf-dropdown-item>
      <pf-dropdown-item to="#" disabled @click.prevent>Disabled Link</pf-dropdown-item>
      <pf-divider component="li" />
      <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      <pf-dropdown-item to="#" @click.prevent>Separated Link</pf-dropdown-item>
    </pf-dropdown>
  </define-kebab>

  <doc-page title="Card">
    <template #description
      >A <b>card</b> is a square or rectangular container that can contain any kind of content. Cards symbolize units of
      information, and each one acts as an entry point for users to access more details. For example, in dashboards and
      catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card
      views, or for positioning content on a page.</template
    >

    <template #apidocs>
      <component-info name="PfCard" />
      <component-info name="PfCardActions" />
      <component-info name="PfCardExpandableContent" />
      <component-info name="PfCardFooter" />
      <component-info name="PfCardHeader" />
      <component-info name="PfCardHeaderMain" />
      <component-info name="PfCardTitle" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The expanded state is controlled by `v-model:expanded` or managed internally with the prop `expandable`.
      - The `isFilled` prop of `pf-card-body` is replaced by `no-fill` with inverted behavior.
      - The `subtitle` prop of `pf-card-title` is replaced by the `subtitle` slot.
      - The `actions` prop of `pf-card-header` is replaced by the `actions` slot, and its `hasNoOffset` by the `actions-no-offset` prop.
      - The `selectableActions` prop of `pf-card-header` is replaced by props on `pf-card`:
        - `selectable-input` renders the input (`true` or `"hidden"` hides it visually, `"visible"` shows it), and is implied by `name`;
        - `selectable-single` renders a radio instead of a checkbox (`variant: 'single'`);
        - `selectable-attrs` sets attributes like `id`, `aria-label` and `aria-labelledby` on the input or on the clickable-only action;
        - `to` and `external` make a clickable-only card navigate to a link (`to`, `isExternalLink`);
        - the selected state is bound with `v-model:selected` (`isSelected`) and input changes are emitted with `@change`; single selectable cards sharing a `name` deselect each other.
      - A card is clickable with the `clickable` prop, an `@click` handler or `to`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic cards">
      <template #intro>
        <pre v-md>
          Basic cards typically have a `pf-card-title`, `pf-card-body` and `pf-card-footer`. You may omit these components as needed, but it is recommended to at least include a `pf-card-body` to provide details about the card item.
        </pre>
      </template>

      <pf-card ouia-id="BasicCard">
        <pf-card-title>Title</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Card with subtitle">
      <template #intro>
        <pre v-md>
          A basic card that also has a subtitle.
        </pre>
      </template>

      <pf-card ouia-id="CardSubtitle">
        <pf-card-title>
          Title
          <template #subtitle>Subtitle</template>
        </pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Card with subtitle and actions">
      <template #intro>
        <pre v-md>
          This card demonstrates having an image, action, and subtitle in a single card.
        </pre>
      </template>

      <pf-checkbox v-model="subtitleNoOffset" label="actions-no-offset" />
      <pf-card style="margin-top: 15px">
        <pf-card-header :actions-no-offset="subtitleNoOffset">
          <template #actions>
            <kebab label="Card subtitle example kebab toggle" />
            <pf-checkbox aria-label="card checkbox example" />
          </template>
          <pf-brand :src="PfLogo" alt="PatternFly logo" style="width: 300px" />
        </pf-card-header>
        <pf-card-title>
          Title
          <template #subtitle>Subtitle</template>
        </pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Secondary cards">
      <template #intro>
        <pre v-md>
          You can apply secondary background color styling to a card by setting the `variant` property to `secondary`.
        </pre>
      </template>

      <pf-card variant="secondary">
        <pf-card-title>Title</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Modifiers">
      <template #intro>
        <pre v-md>
          You can further modify the styling of the card's content by using the properties outlined below. In this example, you can enable each modifier by selecting its respective checkbox.

          Most modifiers can be used in combination with each other, except for `compact` and `large`, since they are contradictory.

          | Modifier    | Description                                                                          |
          | ----------- | ------------------------------------------------------------------------------------ |
          | compact     | Modifies the card to include compact styling. Should not be used with large.         |
          | large       | Modifies the card to be large. Should not be used with compact.                      |
          | full-height | Modifies the card so that it fills the total available height of its container.      |
          | plain       | Modifies the card to include plain styling, which removes the border and background. |
        </pre>
      </template>

      <div style="margin-bottom: 12px">
        <pf-checkbox v-for="(_, mod) in modifiers" :key="mod" v-model="modifiers[mod]" :label="mod" />
      </div>
      <div style="height: 15rem">
        <pf-card
          :compact="modifiers.compact"
          :large="modifiers.large"
          :full-height="modifiers.fullHeight"
          :plain="modifiers.plain"
        >
          <pf-card-title>Title</pf-card-title>
          <pf-card-body>Body</pf-card-body>
          <pf-card-footer>Footer</pf-card-footer>
        </pf-card>
      </div>
    </story-canvas>

    <story-canvas title="Header images and actions">
      <template #intro>
        <pre v-md>
          You can include header actions with the `actions` slot of `pf-card-header`. The following example includes an image using the [Brand](#/components/brand) component, and also includes a kebab dropdown and a checkbox in the `pf-card-header` actions.

          The `actions-no-offset` prop of `pf-card-header` is `false` by default. When it is `false`, a negative margin is applied to help align default-sized card titles with card actions.

          You may use `actions-no-offset` to remove this negative margin, which better aligns card actions in implementations that use large card titles or tall header images, for example.

          Select the "actions-no-offset" checkbox in the example below to illustrate this behavior.
        </pre>
      </template>

      <pf-checkbox v-model="imageNoOffset" label="actions-no-offset" />
      <pf-card style="margin-top: 15px">
        <pf-card-header :actions-no-offset="imageNoOffset">
          <template #actions>
            <kebab label="Card example kebab toggle" />
            <pf-checkbox v-model="imageChecked" aria-label="card checkbox example" />
          </template>
          <pf-brand :src="PfLogo" alt="PatternFly logo" style="width: 300px" />
        </pf-card-header>
        <pf-card-title>Title</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Title inline with images and actions">
      <template #intro>
        <pre v-md>
          Moving `pf-card-title` within the `pf-card-header` will style it inline with any images or actions.
        </pre>
      </template>

      <pf-card>
        <pf-card-header>
          <template #actions>
            <kebab label="Card title inline with images and actions example kebab toggle" />
            <pf-checkbox aria-label="card checkbox example" />
          </template>
          <pf-card-title>
            This is a really really really really really really really really really really long header
          </pf-card-title>
        </pf-card-header>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Card header without title">
      <template #intro>
        <pre v-md>
          Card actions can be placed in the card header even without a `pf-card-title`.

          Images can also be placed in the card header without a `pf-card-title`.
        </pre>
      </template>

      <pf-card>
        <pf-card-header>
          <template #actions>
            <kebab label="Card header without title example kebab toggle" />
            <pf-checkbox aria-label="card checkbox example" />
          </template>
        </pf-card-header>
        <pf-card-body>This is the card body. There are only actions in the card head.</pf-card-body>
      </pf-card>
    </story-canvas>

    <story-canvas title="Card with header that wraps">
      <pf-card>
        <pf-card-header wrap actions-no-offset>
          <template #actions>
            <pf-button variant="primary">Primary action</pf-button>
            <pf-button variant="secondary">Secondary action</pf-button>
            <pf-button variant="tertiary">Tertiary action</pf-button>
          </template>
          <pf-card-title>This is a longer card title that takes up more space</pf-card-title>
        </pf-card-header>
        <pf-card-body>This is the card body</pf-card-body>
      </pf-card>
    </story-canvas>

    <story-canvas title="With HTML heading element">
      <template #intro>
        <pre v-md>
          You may use the `component` property to place the card's title within an HTML heading element.
        </pre>
      </template>

      <pf-card>
        <pf-card-title component="h4">Title within an &lt;h4&gt; element</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="With no footer">
      <pf-card>
        <pf-card-title>Title</pf-card-title>
        <pf-card-body>This card has no footer</pf-card-body>
      </pf-card>
    </story-canvas>

    <story-canvas title="With no title">
      <pf-card>
        <pf-card-body>This card has no title</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="With only a content section">
      <pf-card>
        <pf-card-body>Body</pf-card-body>
      </pf-card>
    </story-canvas>

    <story-canvas title="With multiple body sections">
      <template #intro>
        <pre v-md>
          You may use multiple body sections to visually separate blocks of content.
        </pre>
      </template>

      <pf-card>
        <pf-card-title>Title</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-body>Body</pf-card-body>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="With a primary body section that fills">
      <template #intro>
        <pre v-md>
          `pf-card-body` sections fill the available height of the card by default. Set `no-fill` to disable this behavior for one or more body sections. The remaining available height of the card will be split between any `pf-card-body` section that does not set `no-fill`.

          A common use case of this is to set `no-fill` on all but one body section, so that a primary body section fills the available space of the card as seen in the example below. This example has 3 `pf-card-body` sections, two of which set `no-fill`. The third `pf-card-body` fills the remaining height of the card.
        </pre>
      </template>

      <pf-card style="min-height: 30em">
        <pf-card-title>Title</pf-card-title>
        <pf-card-body no-fill>Body pf-m-no-fill</pf-card-body>
        <pf-card-body no-fill>Body pf-m-no-fill</pf-card-body>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Selectable">
      <template #intro>
        <pre v-md>
          A selectable card can be selected by clicking anywhere within the card.

          You must avoid rendering any other interactive content within the `pf-card` when it is meant to be selectable only. Refer to the actionable and selectable example if you need a card that is both selectable and has other interactive, actionable content.
        </pre>
      </template>

      <pf-checkbox v-model="selectableSecondary" label="Secondary card styling" />
      <pf-checkbox v-model="selectableHidden" label="Hide checkbox" />
      <pf-gallery gutter style="margin-top: 15px">
        <pf-card
          v-for="(card, i) in selectableCards"
          :id="`selectable-card-example-${i + 1}`"
          :key="i"
          v-model:selected="card.selected"
          selectable
          :selectable-input="selectableHidden ? 'hidden' : 'visible'"
          :name="`selectable-card-input-${i + 1}`"
          :selectable-attrs="{ 'aria-labelledby': `selectable-card-example-${i + 1}` }"
          :disabled="card.disabled"
          :variant="selectableSecondary ? 'secondary' : 'default'"
        >
          <pf-card-header actions-no-offset>
            <pf-card-title>{{ card.title }}</pf-card-title>
          </pf-card-header>
          <pf-card-body>{{
            card.disabled ? 'This card is selectable but disabled.' : 'This card is selectable.'
          }}</pf-card-body>
        </pf-card>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Single selectable">
      <template #intro>
        <pre v-md>
          When a group of single selectable cards are related, you must pass the same `name` property to each card and set `selectable-single`.
        </pre>
      </template>

      <pf-checkbox v-model="singleHidden" label="Hide radio button" />
      <pf-gallery gutter style="margin-top: 15px">
        <pf-card
          v-for="(card, i) in singleCards"
          :id="`single-selectable-card-example-${i + 1}`"
          :key="i"
          selectable
          v-model:selected="card.selected"
          :selectable-input="singleHidden ? 'hidden' : 'visible'"
          selectable-single
          name="single-selectable-card-example"
          :selectable-attrs="{ 'aria-labelledby': `single-selectable-card-example-${i + 1}` }"
          :disabled="card.disabled"
        >
          <pf-card-header actions-no-offset>
            <pf-card-title>{{ card.title }}</pf-card-title>
          </pf-card-header>
          <pf-card-body>{{
            card.disabled ? 'This card is single selectable but disabled.' : 'This card is single selectable.'
          }}</pf-card-body>
        </pf-card>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Actionable">
      <template #intro>
        <pre v-md>
          An actionable card can perform an action or navigate to a link by clicking anywhere within the card. To open a link in a new tab or window, pass the `external` property.

          You can pass the `clicked` property to `pf-card` to convey that a card is the currently clicked one, such as when clicking a card would open a primary-detail view. This must not be used simply for "selection" of a card, and you should instead use a selectable card or single selectable card.

          When a card is meant to be actionable only, you must avoid rendering any other interactive content within the `pf-card`, similar to selectable cards.
        </pre>
      </template>

      <pf-checkbox v-model="clickableSecondary" label="secondary styling" />
      <pf-gallery gutter style="margin-top: 15px">
        <pf-card
          :variant="clickableSecondary ? 'secondary' : 'default'"
          :selectable-attrs="{ 'aria-labelledby': 'clickable-card-example-title-1' }"
          @click="log('First card in actionable example clicked')"
        >
          <pf-card-header>
            <pf-card-title id="clickable-card-example-title-1">First card in the actionable example</pf-card-title>
          </pf-card-header>
          <pf-card-body>This card performs an action on click.</pf-card-body>
        </pf-card>
        <pf-card
          to="#"
          :variant="clickableSecondary ? 'secondary' : 'default'"
          :selectable-attrs="{ 'aria-labelledby': 'clickable-card-example-title-2' }"
        >
          <pf-card-header>
            <pf-card-title id="clickable-card-example-title-2">Second card in the actionable example</pf-card-title>
          </pf-card-header>
          <pf-card-body>This card can navigate to a link on click.</pf-card-body>
        </pf-card>
        <pf-card
          disabled
          :variant="clickableSecondary ? 'secondary' : 'default'"
          :selectable-attrs="{ 'aria-labelledby': 'clickable-card-example-title-3' }"
          @click="log('Third card in actionable example clicked')"
        >
          <pf-card-header>
            <pf-card-title id="clickable-card-example-title-3">Third card in the actionable example</pf-card-title>
          </pf-card-header>
          <pf-card-body>This card is clickable but disabled.</pf-card-body>
        </pf-card>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Actionable and selectable">
      <template #intro>
        <pre v-md>
          A card can be selectable and have additional interactive content by passing both the `clickable` and `selectable` properties to `pf-card`. The following example shows how the actionable functionality can be rendered anywhere within a selectable card.

          When passing interactive content to an actionable and selectable card that is disabled, you should also ensure the interactive content is disabled as well, if applicable.
        </pre>
      </template>

      <pf-checkbox v-model="clickableSelectableSecondary" label="secondary styling" />
      <pf-gallery gutter style="margin-top: 15px">
        <pf-card
          id="clickable-selectable-card-example-1"
          v-model:selected="clickableSelected[0]"
          clickable
          selectable
          selectable-input="visible"
          name="clickable-selectable-card-input-1"
          :selectable-attrs="{ 'aria-labelledby': 'clickable-selectable-card-example-1' }"
          :clicked="clickableClicked"
          :variant="clickableSelectableSecondary ? 'secondary' : 'default'"
        >
          <pf-card-header actions-no-offset>
            <pf-card-title>
              <pf-button variant="link" inline @click="clickableClicked = !clickableClicked">First card</pf-button>
            </pf-card-title>
          </pf-card-header>
          <pf-card-body>This card performs an action upon clicking the card title and is selectable.</pf-card-body>
        </pf-card>
        <pf-card
          id="clickable-selectable-card-example-2"
          v-model:selected="clickableSelected[1]"
          clickable
          selectable
          selectable-input="visible"
          name="clickable-selectable-card-input-2"
          :selectable-attrs="{ 'aria-labelledby': 'clickable-selectable-card-example-2' }"
          :variant="clickableSelectableSecondary ? 'secondary' : 'default'"
        >
          <pf-card-header actions-no-offset>
            <pf-card-title>Second Card</pf-card-title>
          </pf-card-header>
          <pf-card-body>
            This card is selectable and has a link in the card body that navigates to
            <pf-button variant="link" inline component="a" href="#">Patternfly</pf-button>.
          </pf-card-body>
        </pf-card>
        <pf-card
          id="clickable-selectable-card-example-3"
          v-model:selected="clickableSelected[2]"
          clickable
          selectable
          selectable-input="visible"
          disabled
          name="clickable-selectable-card-input-3"
          :selectable-attrs="{ 'aria-labelledby': 'clickable-selectable-card-example-3' }"
          :variant="clickableSelectableSecondary ? 'secondary' : 'default'"
        >
          <pf-card-header actions-no-offset>
            <pf-card-title>
              <pf-button disabled variant="link" inline component="a" href="https://www.patternfly.org/"
                >Third card</pf-button
              >
            </pf-card-title>
          </pf-card-header>
          <pf-card-body>This card is clickable and selectable, but disabled.</pf-card-body>
        </pf-card>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Expandable cards">
      <template #intro>
        <pre v-md>
          A card can be made expandable with `v-model:expanded` or the `expandable` property. In the collapsed state, only the card header is shown, and the user can click the caret to view the rest of the card content.

          Place any content that you want to be hidden within the `pf-card-expandable-content` component.
        </pre>
      </template>

      <div style="margin-bottom: 12px">
        <pf-checkbox v-model="toggleRightAligned" label="toggle-right-aligned" />
      </div>
      <pf-card id="expandable-card" v-model:expanded="expanded">
        <pf-card-header
          :toggle-right-aligned="toggleRightAligned"
          :toggle-button-attrs="{
            id: 'toggle-button1',
            'aria-label': 'Details',
            'aria-labelledby': 'expandable-card-title toggle-button1',
          }"
        >
          <template #actions>
            <kebab label="Card expandable example kebab toggle" />
            <pf-checkbox aria-label="card checkbox example" />
          </template>
          <pf-card-title>Title</pf-card-title>
        </pf-card-header>
        <pf-card-expandable-content>
          <pf-card-body>Body</pf-card-body>
          <pf-card-footer>Footer</pf-card-footer>
        </pf-card-expandable-content>
      </pf-card>
    </story-canvas>

    <story-canvas title="Expandable with icon">
      <template #intro>
        <pre v-md>
          An image can be placed in the card header to show users an icon beside the expansion caret.
        </pre>
      </template>

      <pf-card id="expandable-card-icon" expandable>
        <pf-card-header :toggle-button-attrs="{ id: 'toggle-button2', 'aria-label': 'Patternfly Details' }">
          <template #actions>
            <kebab label="Card expandable with icon example kebab toggle" />
            <pf-checkbox aria-label="card checkbox example" />
          </template>
          <img :src="PfIconLogo" alt="PatternFly logo" width="27px" />
        </pf-card-header>
        <pf-card-expandable-content>
          <pf-card-body>Body</pf-card-body>
          <pf-card-footer>Footer</pf-card-footer>
        </pf-card-expandable-content>
      </pf-card>
    </story-canvas>

    <story-canvas title="Card with dividers">
      <template #intro>
        <pre v-md>
          Dividers can be placed between sections of the card.
        </pre>
      </template>

      <pf-card ouia-id="CardWithDividers">
        <pf-card-title>Title</pf-card-title>
        <pf-divider />
        <pf-card-body>Body</pf-card-body>
        <pf-divider />
        <pf-card-body>Body</pf-card-body>
        <pf-divider />
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <pre v-md>
      ## Cards as tiles

      Sets of selectable cards can be used as tiles, which are static options that users can select.

      They can be either single selectable or multi selectable, by setting the `selectable-single` property. The radio or checkbox is visually hidden by default with `selectable-input`; set it to `"visible"` to show it.
    </pre>

    <story-canvas title="Single selectable tiles">
      <template #intro>
        <pre v-md>
          To prevent users from selecting more than 1 tile in a set, set `selectable-single`.
        </pre>
      </template>

      <pf-gallery gutter>
        <pf-card
          v-for="i in 3"
          :id="`tile-example-${i}`"
          :key="i"
          selectable
          selectable-input
          selectable-single
          v-model:selected="tileSelected[i - 1]"
          name="tile-example"
          :selectable-attrs="{ 'aria-labelledby': `tile-example-${i}` }"
          :disabled="i === 3"
        >
          <pf-card-header>
            <pf-flex gap="sm" align-items="center">
              <plus-icon />
              <b>Tile header{{ i === 3 ? ' (disabled)' : '' }}</b>
            </pf-flex>
          </pf-card-header>
          <pf-card-body>Tile content and description</pf-card-body>
        </pf-card>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Multi selectable tiles">
      <template #intro>
        <pre v-md>
          To allow users to select more than 1 tile in a set, leave `selectable-single` unset.
        </pre>
      </template>

      <pf-gallery gutter>
        <pf-card
          v-for="i in 3"
          :id="`multi-tile-example-${i}`"
          :key="i"
          v-model:selected="multiTileSelected[i - 1]"
          selectable
          selectable-input
          :name="`multi-tile-${i}`"
          :selectable-attrs="{ 'aria-labelledby': `multi-tile-example-${i}` }"
          :disabled="i === 3"
        >
          <pf-card-header>
            <pf-flex gap="sm" align-items="center">
              <plus-icon />
              <b>Tile header{{ i === 3 ? ' (disabled)' : '' }}</b>
            </pf-flex>
          </pf-card-header>
          <pf-card-body>Tile content and description</pf-card-body>
        </pf-card>
      </pf-gallery>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import PfLogo from '@patternfly/patternfly/assets/images/PF-HorizontalLogo-Color.svg';
import PfIconLogo from '@patternfly/patternfly/assets/images/PF-IconLogo.svg';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import PlusIcon from '@vue-patternfly/icons/plus-icon';

const [DefineKebab, Kebab] = createReusableTemplate<{ label: string }>();

const subtitleNoOffset = ref(false);
const imageNoOffset = ref(false);
const imageChecked = ref(false);

const modifiers = reactive({
  compact: false,
  large: false,
  fullHeight: false,
  plain: false,
});

const selectableSecondary = ref(false);
const selectableHidden = ref(false);
const selectableCards = reactive([
  { title: 'First card', selected: false, disabled: false },
  { title: 'Second card', selected: false, disabled: false },
  { title: 'Third card', selected: false, disabled: true },
]);

const singleHidden = ref(false);
const singleCards = reactive([
  { title: 'First card', selected: false, disabled: false },
  { title: 'Second card', selected: false, disabled: false },
  { title: 'Third card', selected: false, disabled: true },
]);

const clickableSecondary = ref(false);
const clickableSelectableSecondary = ref(false);
const clickableClicked = ref(false);
const clickableSelected = reactive([false, false, false]);

const expanded = ref<boolean | undefined>(false);
const toggleRightAligned = ref(false);

const tileSelected = reactive([false, false, false]);
const multiTileSelected = reactive([false, false, false]);

function log(message: string) {
  // eslint-disable-next-line no-console
  console.log(message);
}
</script>
