export default (o, c) => {
  const proto = c.prototype

  proto.calendarMonth = function () {
    const start = this.startOf("month").startOf("week")
    const end = this.endOf("month").endOf("week")
    const days = []
    let i = start.clone()

    while (i.isBetween(start.subtract(1, "second"), end)) {
      days.push(i.startOf("day"))
      i = i.add(1, "day")
    }

    return days
  }
}
