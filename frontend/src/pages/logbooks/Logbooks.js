import React, { useState } from "react";
import LogbookDisplay from "../../components/logbooks/LogbookDisplay";

const Logbooks = () => {
  return (
    <div className="flex rounded-lg bg-white min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <LogbookDisplay />
    </div>
  );
};

export default Logbooks;
