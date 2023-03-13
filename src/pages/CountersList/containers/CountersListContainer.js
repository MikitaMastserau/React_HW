import { useState } from "react";

import { CountersListLayout } from "../CountersListLayout";

export const CountersListContainer = () => {
   const [counters, setCounters] = useState([]);

   const handleAddCounter = () => {
      setCounters([...counters, counters]);
   };

   const handleReset = () => {
      setCounters([]);
   };

   return <CountersListLayout counters={counters} handleAddCounter={handleAddCounter} handleReset={handleReset} />;
};