
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";

import WidgetLg from "../../components/widgetLg/WidgetLg";
import Detail from '../../components/Detail/detial';
import Linechart from "./Linechart";


export default function Home() {
  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      
      <div className="homeWidgets">
      
        <Detail/>
        {/* <WidgetLg/> */}
        {/* <Linechart/> */}
      </div>
    </div>
  );
}
