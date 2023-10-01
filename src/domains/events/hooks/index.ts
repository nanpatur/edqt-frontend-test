// use hooks query from event service

import { useQuery } from "@/utils/query";
import EventService from "../services";

export const useSetInitialEventData = () => {
  const eventServices = new EventService();
  return useQuery("events", () => eventServices.setInitialEventData());
};
