import React, { FC } from "react";
import { FormattedRelativeTime } from "react-intl";
import { useTime } from "../../../hooks";

import "./Countdown.sass";

import { Props, defaultData } from "./types";

const Countdown: FC<Props> = ({ data = defaultData }) => {
  const currentTime = useTime();

  const totalDiffInSecs = Math.round((data.time - currentTime.getTime()) / 1000);
  
  const totalDiffInWeeks = Math.round(totalDiffInSecs / 604800);
  const restDiffInDays = Math.round((totalDiffInSecs % 604800) / 86400);
  const restDiffInHours = Math.round(((totalDiffInSecs % 604800) % 86400) / 3600);
  const restDiffInMinutes = Math.round((((totalDiffInSecs % 604800) % 86400) % 3600) / 60);
  const restDiffInSecs = Math.round((((totalDiffInSecs % 604800) % 86400) % 3600) % 60);

  return (
    <div className="Countdown">
      <h3 style={{ whiteSpace: "pre" }}>{data.eventName + " \n⤷ " 
        + totalDiffInWeeks.toString().padStart(2, '0') + " Weeks "
        + restDiffInDays.toString().padStart(2, '0') + " Days "
        + restDiffInHours.toString().padStart(2, '0') + " Hours" // + ":" + restDiffInMinutes.toString().padStart(2, '0') + ":" + restDiffInSecs.toString().padStart(2, '0')
        }
      </h3>
    </div>
  );
};

export default Countdown;