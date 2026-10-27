import type { App } from 'vue';

import PfActionsColumn from './ActionsColumn.vue';
import PfCaption from './Caption.vue';
import PfExpandableRowContent from './ExpandableRowContent.vue';
import PfHeaderCellInfoWrapper from './HeaderCellInfoWrapper.vue';
import PfInnerScrollContainer from './InnerScrollContainer.vue';
import PfOuterScrollContainer from './OuterScrollContainer.vue';
import PfTable from './Table.vue';
import PfTableText from './TableText.vue';
import PfTbody from './Tbody.vue';
import PfTd from './Td.vue';
import PfTfoot from './Tfoot.vue';
import PfTh from './Th.vue';
import PfThead from './Thead.vue';
import PfTr from './Tr.vue';
import PfTreeRowWrapper from './TreeRowWrapper.vue';

export {
  PfActionsColumn,
  PfCaption,
  PfExpandableRowContent,
  PfHeaderCellInfoWrapper,
  PfInnerScrollContainer,
  PfOuterScrollContainer,
  PfTable,
  PfTableText,
  PfTbody,
  PfTd,
  PfTfoot,
  PfTh,
  PfThead,
  PfTr,
  PfTreeRowWrapper,
};

export function install(app: App) {
  app.component('PfActionsColumn', PfActionsColumn);
  app.component('PfCaption', PfCaption);
  app.component('PfExpandableRowContent', PfExpandableRowContent);
  app.component('PfHeaderCellInfoWrapper', PfHeaderCellInfoWrapper);
  app.component('PfInnerScrollContainer', PfInnerScrollContainer);
  app.component('PfOuterScrollContainer', PfOuterScrollContainer);
  app.component('PfTable', PfTable);
  app.component('PfTableText', PfTableText);
  app.component('PfTbody', PfTbody);
  app.component('PfTd', PfTd);
  app.component('PfTfoot', PfTfoot);
  app.component('PfTh', PfTh);
  app.component('PfThead', PfThead);
  app.component('PfTr', PfTr);
  app.component('PfTreeRowWrapper', PfTreeRowWrapper);
}

const plugin = {
  install,
};

declare module 'vue' {
  export interface GlobalComponents {
    PfActionsColumn: typeof PfActionsColumn;
    PfCaption: typeof PfCaption;
    PfExpandableRowContent: typeof PfExpandableRowContent;
    PfHeaderCellInfoWrapper: typeof PfHeaderCellInfoWrapper;
    PfInnerScrollContainer: typeof PfInnerScrollContainer;
    PfOuterScrollContainer: typeof PfOuterScrollContainer;
    PfTable: typeof PfTable;
    PfTableText: typeof PfTableText;
    PfTbody: typeof PfTbody;
    PfTd: typeof PfTd;
    PfTfoot: typeof PfTfoot;
    PfTh: typeof PfTh;
    PfThead: typeof PfThead;
    PfTr: typeof PfTr;
    PfTreeRowWrapper: typeof PfTreeRowWrapper;
  }
}

export default plugin;
