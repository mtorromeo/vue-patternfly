import type { App } from 'vue';

import PfTable from './Table.vue';
import PfTbody from './Tbody.vue';
import PfTd from './Td.vue';
import PfTh from './Th.vue';
import PfThead from './Thead.vue';
import PfTr from './Tr.vue';

export {
  PfTable,
  PfTbody,
  PfTd,
  PfTh,
  PfThead,
  PfTr,
};

export function install(app: App) {
  app.component('PfTable', PfTable);
  app.component('PfTbody', PfTbody);
  app.component('PfTd', PfTd);
  app.component('PfTh', PfTh);
  app.component('PfThead', PfThead);
  app.component('PfTr', PfTr);
}

const plugin = {
  install,
};

declare module 'vue' {
  export interface GlobalComponents {
    Pftable: typeof PfTable;
    PfTbody: typeof PfTbody;
    PfTd: typeof PfTd;
    PfTh: typeof PfTh;
    PfThead: typeof PfThead;
    PfTr: typeof PfTr;
  }
}

export default plugin;
