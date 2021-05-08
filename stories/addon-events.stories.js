import React from "react";
import EventEmitter from "eventemitter3";

import withEvents from "../src/index";
import Logger from "./Logger";

const EVENTS = {
  TEST_EVENT_1: "test-event-1",
  TEST_EVENT_2: "test-event-2",
  TEST_EVENT_3: "test-event-3",
  TEST_EVENT_4: "test-event-4",
};

const emitter = new EventEmitter();
const emit = emitter.emit.bind(emitter);

const eventHandler = (name) => (payload) =>
  emit(Logger.LOG_EVENT, { name, payload });

Object.keys(EVENTS).forEach((event) =>
  emitter.on(EVENTS[event], eventHandler(EVENTS[event]))
);

const events = [
  {
    name: EVENTS.TEST_EVENT_1,
    title: "Test event 1",
    payload: 0,
  },
  {
    name: EVENTS.TEST_EVENT_2,
    title: "Test event 2",
    payload: "Test event 2",
  },
  {
    name: EVENTS.TEST_EVENT_3,
    title: "Test event 3",
    payload: {
      string: "value",
      number: 123,
      array: [1, 2, 3],
      object: {
        string: "value",
        number: 123,
        array: [1, 2, 3],
      },
    },
  },
  {
    name: EVENTS.TEST_EVENT_4,
    title: "Test event 4",
    payload: [
      {
        string: "value",
        number: 123,
        array: [1, 2, 3],
      },
      {
        string: "value",
        number: 123,
        array: [1, 2, 3],
      },
      {
        string: "value",
        number: 123,
        array: [1, 2, 3],
      },
    ],
  },
];

export default {
  title: "Addons/Events",
  decorators: [withEvents({ emit, events })],
  parameters: {
    options: {
      selectedPanel: "storybook/events/panel",
    },
  },
};

export const logger = () => <Logger emitter={emitter} />;
logger.storyName = "Logger";
