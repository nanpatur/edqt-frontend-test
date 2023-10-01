import { Event } from "../models";
import exampleData from "./example.json";

export default class EventService {
  public async setInitialEventData() {
    try {
      // check if events data already exist
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      if (events.length) {
        console.log("Services: set initial event data already exist");
        return;
      }
      localStorage.setItem("events", JSON.stringify(exampleData));
      console.log("Services: set initial event data success");
    } catch (error) {
      throw error;
    }
  }

  public async getEvents() {
    try {
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      console.log("Services: get events success");
      return events;
    } catch (error) {
      throw error;
    }
  }

  public async getEvent(id: string) {
    try {
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      const event = events.find((event: Event) => event.id === id);
      console.log("Services: get event success");
      return event;
    } catch (error) {
      throw error;
    }
  }

  public async createEvent(event: Event) {
    try {
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      events.push(event);
      localStorage.setItem("events", JSON.stringify(events));
      console.log("Services: create event success");
    } catch (error) {
      throw error;
    }
  }

  public async updateEvent(event: Event) {
    try {
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      const eventIndex = events.findIndex(
        (event: Event) => event.id === event.id,
      );
      events[eventIndex] = event;
      localStorage.setItem("events", JSON.stringify(events));
      console.log("Services: update event success");
      return event;
    } catch (error) {
      throw error;
    }
  }

  public async deleteEvent(id: string) {
    try {
      const events = JSON.parse(localStorage.getItem("events") || "[]");
      const eventIndex = events.findIndex((event: Event) => event.id === id);
      events.splice(eventIndex, 1);
      localStorage.setItem("events", JSON.stringify(events));
      console.log("Services: delete event success");
    } catch (error) {
      throw error;
    }
  }
}
