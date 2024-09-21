"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

function page() {
  const { inCompleteTasks } = useGlobalState();

  return <Tasks title="Incomplete Tasks" tasks={inCompleteTasks} />;
}

export default page;
