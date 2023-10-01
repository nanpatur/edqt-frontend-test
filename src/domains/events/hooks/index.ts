import { useMutation, useQuery } from "@/lib/query";
import EventService from "../services";
import { Event } from "../models";
import { MutationConfig } from "@/lib/query/types";

export const useSetInitialEventData = () => {
  const eventServices = new EventService();
  return useQuery("useSetInitialEventData", () =>
    eventServices.setInitialEventData(),
  );
};

export const useGetEvent = (id: string) => {
  const eventServices = new EventService();
  return useQuery("useGetEvent" + id, () => eventServices.getEvent(id));
};

export const useUpdateEvent = (config: MutationConfig<Event>) => {
  const eventServices = new EventService();
  return useMutation(
    (event: Event) => eventServices.updateEvent(event),
    config,
  );
};
