// use hooks query from event service

import { useQuery } from "@/lib/query";
import EventService from "../services";

export const useSetInitialEventData = () => {
  const eventServices = new EventService();
  return useQuery("events", () => eventServices.setInitialEventData());
};
