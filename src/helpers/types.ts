export type Age = {
  years: string;
  months: string;
  days: string;
};

export type Birthday = {
  day: string;
  month: string;
  year: string;
};

export function getAge(): Age {
  return {
    years: "",
    months: "",
    days: "",
  };
}

export function getBirthday(): Birthday {
  return {
    day: "",
    month: "",
    year: "",
  };
}
