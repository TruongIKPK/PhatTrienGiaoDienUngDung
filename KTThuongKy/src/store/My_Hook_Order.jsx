import { useContext } from "react";
import { MenuContext } from "./MenuContext";

export const My_Hook_Order = ()=>{
    return useContext(MenuContext);
}