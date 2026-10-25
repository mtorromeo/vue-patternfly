<template>
  <doc-page title="Content">
    <template #description>A <b>content</b> component contains a block of styled HTML content.</template>

    <template #apidocs>
      <component-info name="PfContent" />
    </template>

    <pre v-md>
      The `pf-content` component allows you to establish a block of HTML content and apply simple, built-in styling. `pf-content` can be used for any element supported by the `component` property (including `h1` through `h6`, `hr`, `p`, `a`, `small`, `blockquote`, and `pre`).

      You cannot nest other components within `pf-content`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `pf-content` component's properties to achieve the same results.

      For example, to create a level 1 heading, you should pass `component="h1"` to `pf-content`, instead of nesting a `pf-title` component within `pf-content`. Similarly, when you need to add a divider to a page, you should use `component="hr"` (which is styled as a divider), rather than using a separate `pf-divider` component.

      ## Differences from patternfly-react
      - `plain-list`, `visited` and `editorial` replace `isPlainList`, `isVisitedLink` and `isEditorial`.

      See [common differences from patternfly-react](#/).

      ## Examples

      HTML elements wrapped by `pf-content` are styled by the content component.
    </pre>

    <story-canvas title="Content as a wrapper">
      <pf-content>
        <pf-content component="p">
          Content with a component of type "p" still renders the same when wrapped with a Content.
        </pf-content>
        <p>If located within a wrapping Content, html elements are styled as well!</p>
      </pf-content>
    </story-canvas>

    <story-canvas title="Headings">
      <pf-content component="h1">Hello World</pf-content>
      <pf-content component="h2">Second level</pf-content>
      <pf-content component="h3">Third level</pf-content>
      <pf-content component="h4">Fourth level</pf-content>
      <pf-content component="h5">Fifth level</pf-content>
      <pf-content component="h6">Sixth level</pf-content>
    </story-canvas>

    <story-canvas title="Body">
      <pf-content component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
        nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
        erat vel, interdum mattis neque. Sub works as well!
      </pf-content>
      <pf-content component="p">
        Quisque ante lacus, malesuada ac auctor vitae, congue
        <pf-content component="a" href="#">non ante</pf-content>. Phasellus lacus ex, semper ac tortor nec, fringilla
        condimentum orci. Fusce eu rutrum tellus.
      </pf-content>
      <pf-content component="blockquote">
        Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit
        amet turpis.
      </pf-content>
      <pf-content component="small">Sometimes you need small text to display things like date created</pf-content>
    </story-canvas>

    <story-canvas title="Unordered list">
      <pf-content component="ul">
        <pf-content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</pf-content>
        <pf-content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</pf-content>
        <pf-content component="li">
          Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
          <pf-content component="ul">
            <pf-content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</pf-content>
            <pf-content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</pf-content>
          </pf-content>
        </pf-content>
        <pf-content component="li">Ut non enim metus.</pf-content>
      </pf-content>
    </story-canvas>

    <story-canvas title="Ordered list">
      <pf-content component="ol">
        <pf-content component="li">Donec blandit a lorem id convallis.</pf-content>
        <pf-content component="li">Cras gravida arcu at diam gravida gravida.</pf-content>
        <pf-content component="li">Integer in volutpat libero.</pf-content>
        <pf-content component="li">Donec a diam tellus.</pf-content>
        <pf-content component="li">Aenean nec tortor orci.</pf-content>
        <pf-content component="li">Quisque aliquam cursus urna, non bibendum massa viverra eget.</pf-content>
        <pf-content component="li">Vivamus maximus ultricies pulvinar.</pf-content>
      </pf-content>
    </story-canvas>

    <story-canvas title="Plain list">
      <pf-content component="h3">Plain unordered list</pf-content>
      <pf-content component="ul" plain-list>
        <pf-content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</pf-content>
        <pf-content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</pf-content>
        <pf-content component="li">Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</pf-content>
        <pf-content component="li">Ut non enim metus.</pf-content>
      </pf-content>
      <pf-content component="h3">Plain ordered list</pf-content>
      <pf-content component="ol" plain-list>
        <pf-content component="li">Donec blandit a lorem id convallis.</pf-content>
        <pf-content component="li">Cras gravida arcu at diam gravida gravida.</pf-content>
        <pf-content component="li">Integer in volutpat libero.</pf-content>
        <pf-content component="li">Aenean nec tortor orci.</pf-content>
        <pf-content component="li">Quisque aliquam cursus urna, non bibendum massa viverra eget.</pf-content>
        <pf-content component="li">Vivamus maximus ultricies pulvinar.</pf-content>
      </pf-content>
    </story-canvas>

    <story-canvas title="Description list">
      <pf-content component="dl">
        <pf-content component="dt">Web</pf-content>
        <pf-content component="dd">The part of the Internet that contains websites and web pages</pf-content>
        <pf-content component="dt">HTML</pf-content>
        <pf-content component="dd">A markup language for creating web pages</pf-content>
        <pf-content component="dt">CSS</pf-content>
        <pf-content component="dd">A technology to make HTML look better</pf-content>
      </pf-content>
    </story-canvas>

    <story-canvas title="Link and visited link">
      <pf-content>
        <pf-content component="h3">Link example</pf-content>
        <pf-content component="p">
          <pf-content component="a" visited href="#">Click to visit link</pf-content>
        </pf-content>
      </pf-content>
      <br />
      <pf-content visited>
        <pf-content component="h3">Link content example</pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">content link 1</pf-content>
        </pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">content link 2</pf-content>
        </pf-content>
        <pf-content component="p">
          <pf-content component="a" href="#">content link 3</pf-content>
        </pf-content>
      </pf-content>
    </story-canvas>

    <story-canvas title="Editorial content">
      <template #intro>
        <pre v-md>
          Editorial styling increases the font size of body text and small text by 1 tier, where body text becomes "lg" and small text becomes "md". To apply editorial styling, use `editorial`.
        </pre>
      </template>

      <pf-content component="h1" editorial>Example of editorial content via components</pf-content>
      <pf-content component="p" editorial>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
        nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
        erat vel, interdum mattis neque. Sub works as well!
      </pf-content>
      <br />
      <pf-content editorial>
        <h1>Example of editorial content via wrapper</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
          nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
          sollicitudin vel erat vel, interdum mattis neque. Sub works as well!
        </p>
      </pf-content>
    </story-canvas>
  </doc-page>
</template>
