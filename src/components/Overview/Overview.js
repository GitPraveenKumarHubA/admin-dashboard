import React from "react";
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";
import InfoCard from "./InfoCard";

function Overview() {
  return (
    <>
      <InfoCard
        title="Earnings (Monthly)"
        desc="$40,000"
        icon={<FaCalendar className="icon" />}
        border_left="border-left-primary"
      />

      <InfoCard
        title="Earnings (Annual)"
        desc="$215,000"
        icon={<FaDollarSign className="icon" />}
        border_left="border-left-success"
      />

      <InfoCard
        title="Tasks"
        desc="50%"
        icon={<FaClipboardList className="icon" />}
        border_left="border-left-info"
      />

      <InfoCard
        title="Pending requests"
        desc="18"
        icon={<FaComments className="icon" />}
        border_left="border-left-warning"
      />
    </>
  );
}

export default Overview;
