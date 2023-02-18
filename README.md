# `dayjs-calendar-month`

> ⏰ Unofficial Day.js plugin to get month calendar range

## Install

Install `dayjs` and the plugin with your favorite package manager:

```shell
npm add dayjs dayjs-calendar-month
```

## Usage

Extend `dayjs`:

```js
import dayjs from "dayjs"
// required to the plugin
import isBetween from "dayjs/plugin/isBetween"
import calendarMonth from "dayjs-calendar-month"

dayjs.extend(isBetween)
dayjs.extend(calendarMonth)

dayjs("2020-01-01").calendarMonth() // array of dayjs instances from 2019-12-29 to 2020-02-01
```
