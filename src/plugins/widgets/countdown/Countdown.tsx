import React, { FC } from "react";
import { FormattedRelativeTime } from "react-intl";
import { useTime } from "../../../hooks";

import "./Countdown.sass";

import { Props, defaultData } from "./types";

const Countdown: FC<Props> = ({ data = defaultData }) => {
  const currentTime = useTime();

  let totalDiffInSecs = Math.round((data.time - currentTime.getTime()) / 1000);
  let passed = false;
  
  let comingSoon = totalDiffInSecs > 0 && totalDiffInSecs < 604800; // deadline coming soon (less than one week)

  if (totalDiffInSecs < 0) { // deadline passed
    totalDiffInSecs = -totalDiffInSecs;
    passed = true;
  }

  const totalDiffInWeeks = Math.floor(totalDiffInSecs / 604800);
  const restDiffInDays = Math.floor((totalDiffInSecs % 604800) / 86400);
  const restDiffInHours = Math.floor(((totalDiffInSecs % 604800) % 86400) / 3600);
  //const restDiffInMinutes = Math.floor((((totalDiffInSecs % 604800) % 86400) % 3600) / 60);
  //const restDiffInSecs = Math.floor((((totalDiffInSecs % 604800) % 86400) % 3600) % 60);

  return (
    <div className={ "Countdown" + (comingSoon ? " Soon" : "") + (passed ? " Passed" : "") }>
      <h3 style={{ whiteSpace: "pre" }}><a href={data.eventLink} target="_blank">{data.eventName}</a>{" \n⤷ " 
        + (passed ? "Passed! " : "")
        + totalDiffInWeeks.toString().padStart(2, '0') + " Weeks "
        + restDiffInDays.toString().padStart(2, '0') + " Days "
        + restDiffInHours.toString().padStart(2, '0') + " Hours" // + ":" + restDiffInMinutes.toString().padStart(2, '0') + ":" + restDiffInSecs.toString().padStart(2, '0')
        }
      </h3>
    </div>
  );
};

export default Countdown;