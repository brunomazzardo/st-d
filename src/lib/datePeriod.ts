import dayjs from "dayjs";

export function datePeriod(startAt: any, endAt: any) {
  startAt = dayjs(startAt);
  endAt = dayjs(endAt);

  if(startAt.year() === endAt.year()) {
    if (startAt.month() === endAt.month()) {
      return `${startAt.format("DD")} - ${endAt.format("DD MMM YYYY")}`
    }
    return `${startAt.format("DD MMM")} - ${endAt.format("DD MMM YYYY")}`
  }
  return `${startAt.format("DD MMM YYYY")} - ${endAt.format("DD MMM YYYY")}`

}