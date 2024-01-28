import { defineStore } from "pinia";

export const useNotificationStore = defineStore({
  id: "notifications",
  state: () => ({
    notifications: [],
  }),
  getters: {
    unreadNotifications() {
      return this.notifications.filter(
        (notification) => notification.status !== "reviewed"
      );
    },
  },
  actions: {
    addNotification(notification) {
      console.log("do add notification", notification);
      this.notifications.push(notification);
    },
    removeNotification(notification) {
      const index = this.notifications.indexOf(notification);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },
    markNotificationAsReviewed(notification) {
      notification.status = "reviewed";
    },
  },
});
