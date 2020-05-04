import dayjs from "dayjs"

const isAfter = (d1: any, d2: any, same?: boolean, granularity?: any) => {
  d1 = dayjs(d1);
  d2 = dayjs(d2);
  if(d1.isAfter(d2, granularity))
    return true;
  return !!(same && d1.isSame(d2, granularity));

};

const isBefore = (d1: any, d2: any, same?: boolean, granularity?: any) => {
  d1 = dayjs(d1);
  d2 = dayjs(d2);
  if(d1.isBefore(d2, granularity))
    return true;
  return !!(same && d1.isSame(d2, granularity));

};

export {
  isAfter, isBefore
}