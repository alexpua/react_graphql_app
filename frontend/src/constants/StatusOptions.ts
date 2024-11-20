export type StatusOption = {
  id: number;
  title: string;
  iconColor: string;
};
export const StatusOptions: StatusOption[] = [
  {
    id: 1,
    title: "Working",
    iconColor: "green",
  },
  {
    id: 2,
    title: "OnVacation",
    iconColor: "red",
  },
  {
    id: 3,
    title: "LunchTime",
    iconColor: "orange",
  },
  {
    id: 4,
    title: "BusinessTrip",
    iconColor: "purple",
  },
];
