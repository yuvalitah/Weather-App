import { unitSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

export const useUnit = () => useSelector(unitSelector);
