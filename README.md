# Storybook Addon Events

This [storybook](https://storybooks.js.org) ([source](https://github.com/storybookjs/storybook)) addon allows you to add events for your stories.

[Framework Support](https://storybook.js.org/docs/react/api/frameworks-feature-support)

[Storybook Addon Events Live Demo](https://z4o4z.github.io/storybook-addon-events/index.html)

### Getting Started

```sh
npm i --save-dev @storybook/addon-events event-emitter
```

within `.storybook/main.js`:

```js
module.exports = {
  addons: ["@storybook/addon-events"],
};
```

Then write your stories like this:

```js
import withEvents from "@storybook/addon-events";
import EventEmitter from "event-emitter";

import Logger from "./Logger";
import * as EVENTS from "./events";

const emitter = new EventEmitter();
const emit = emitter.emit.bind(emitter);

export default {
  title: "withEvents",
  decorators: [
    withEvents({
      emit,
      events: [
        {
          name: EVENTS.TEST_EVENT_1,
          title: "Test event 1",
          payload: 0,
        },
        {
          name: EVENTS.TEST_EVENT_2,
          title: "Test event 2",
          payload: "asdasdad asdasdasd",
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
      ],
    }),
  ],
};

export const defaultView = () => <Logger emitter={emitter} />;
```

## Credits

While this addon was part of the [Storybook monorepo](https://github.com/storybookjs/storybook), it received commits from the following authors:

> Aaron Reisman,
> Andrew Lisowski,
> Armand Abric,
> Brody McKee,
> Clément DUNGLER,
> Daniel Duan,
> Evgeniy Zaitsev,
> Filipp Riabchun,
> Gaëtan Maisse,
> Grey Baker,
> Hypnosphi,
> Jay Sherby,
> Jimmy Somsanith,
> Jon Palmer,
> Lynn Chyi,
> Michael Shilman,
> Michaël De Boey,
> Minh Nguyen,
> Norbert de Langen,
> Paul Rosania,
> Pavan Kumar Sunkara,
> Simen Bekkhus,
> Tom Coleman,
> Varun Vachhar,
