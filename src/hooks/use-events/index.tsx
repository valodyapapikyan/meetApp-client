import { useContext } from "react";
import { EventContext } from "../../contexts/events";

export default function useEvents() {
  return useContext(EventContext);
}
