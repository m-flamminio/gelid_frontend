import { GiLogicGateNor } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaBalanceScale } from "react-icons/fa";

const iconMap = new Map();

const style = {marginBottom: "4px", marginRight: "4px"}

iconMap.set("LOGIC", <GiLogicGateNor style={style}/>);
iconMap.set("BALANCE", <FaBalanceScale style={style}/>);
iconMap.set("PERFORMANCE", <CgPerformance style={style}/>);
iconMap.set("PRESENTATION", <TfiVideoClapper style={style}/>);

export default iconMap;
