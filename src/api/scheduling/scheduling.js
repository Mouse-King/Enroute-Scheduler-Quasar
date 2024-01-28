import { addDoc, collection, db } from "boot/firebase";

export const SchedulingAPI = {
  InitSchedule: async (schedule) => {
    try {
      // Add the schedule data to the "schedules" collection
      const schedulesRef = collection(db, "schedules");
      await addDoc(schedulesRef, schedule);

      return {
        success: true,
        id: schedule.id,
        message: "Schedule initialized successfully!",
      };
    } catch (error) {
      console.error("Error initializing schedule:", error);
    }
  },
};
