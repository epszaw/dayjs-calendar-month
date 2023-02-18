import { test, expect } from "vitest"
import dayjs from "dayjs"
import IsBetweenPlugin from "dayjs/plugin/isBetween"
import CalendarMonthPlugin from "./index"

dayjs.extend(IsBetweenPlugin)
dayjs.extend(CalendarMonthPlugin)

test("calendar month multiple of seven", () => {
  expect(dayjs("2020-01-01").calendarMonth().length % 7).toBe(0)
})

test("first day of calendar is the first day of the first week of month", () => {
  const calendar = dayjs("2020-01-01").calendarMonth()

  expect(calendar[0].valueOf()).toBe(dayjs("2019-12-29 00:00:00").valueOf())
})

test("last day of calendar is the last day of the last week of month", () => {
  const calendar = dayjs("2020-01-01").calendarMonth()

  expect(calendar[calendar.length - 1].valueOf()).toBe(
    dayjs("2020-02-01 00:00:00").valueOf()
  )
})
