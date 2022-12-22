import { useContext } from "react";
import { FormDataContext } from "../../contexts/form";


export default function useFormData() {
  return useContext(FormDataContext);
}

