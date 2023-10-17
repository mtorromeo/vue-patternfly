import { defineStore } from 'pinia';
import type { Props as AlertProps } from '@vue-patternfly/core/components/Alert/Alert.vue';

let globalId = 0;

interface Notification {
  title: AlertProps['title'];
  text?: string | undefined;
  variant?: AlertProps['variant'] | undefined;
}

type RegisteredNotification = Notification & { id: number; };

export const useAlertsStore = defineStore('alerts', {
  state() {
    return { notifications: [] as RegisteredNotification[] };
  },

  actions: {
    add({
      title,
      text = undefined,
      variant = undefined,
    }: Notification = {
      title: '',
    },
    ) {
      const messageObj: RegisteredNotification = {
        id: ++globalId,
        title,
        text,
        variant,
      };

      this.notifications.push(messageObj);
    },

    update({ id, ...data }: Partial<Notification> & { id: number; }) {
      const index = this.notifications.findIndex(m => m.id == id);
      if (typeof index !== 'undefined') {
        Object.assign(this.notifications[index], data);
      }
    },

    delete(id: number) {
      this.notifications = this.notifications.filter(m => m.id !== id);
    },

    clear() {
      this.$reset();
    },
  },
});
