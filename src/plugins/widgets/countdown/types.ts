import { API } from "../../types";

type Data = {
    time: number;
    eventName: string;
  };
  
export type Props = API<Data>;

export const defaultData: Data = { time: Date.now(), eventName: "Your event name." };