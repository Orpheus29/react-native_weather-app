import { DAYS, MONTHS } from './consts';

export const buildDate = () => {
  const d = new Date();
  const day = DAYS[d.getDay()];
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${day}, ${date}\n${month} ${year}`;
};
