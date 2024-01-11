import { format, parseISO } from "date-fns";
import React, { FC } from "react";

import { Props, defaultData } from "./types";

function formatDateTime(time: number) {
    return format(time, "yyyy-MM-dd\'T\'HH:mm");
}

function parseDateTime(formattedTime: string) {
    return parseISO(formattedTime).getTime();
}

const CountdownSettings: FC<Props> = ({ data = defaultData, setData }) => (
    <div className="CountdownSettings">
      <label>
        Event Name
        <textarea
          rows={3}
          value={data.eventName}
          onChange={(event) => setData({ time: data.time, eventName: event.target.value })}
        />
      </label>
      <label>
        Date Time <br/>
        <input 
          type="datetime-local"
          value={formatDateTime(data.time)}
          onChange={(event) => setData({ time: parseDateTime(event.target.value), eventName: data.eventName })}
        />
      </label>
    </div>
  );
  
  export default CountdownSettings;
  