import { useState } from "react";
import { TabItems } from "./types/types";

interface TabsViewProps {
  items: TabItems[];
  onChange: (item: TabItems) => void;
}
interface TabViewProps{
  index: number; 
  active: boolean; 
  item: TabItems; 
  onClick:  (index: number) => void;
}
function TabsView(props: TabsViewProps) {
  const [selected, setSelected] = useState<number | null>(
    props.items.length > 0 ? 0 : null
  );
   function handleClick(index: number){
    setSelected(index);
   }
  if (selected === null) return null;
  return (
    <div>
      <h1>hola mundito!</h1>
      <div className="containerTabs">
        {props.items.map((item, index) => {
          return <TabView key={index} index={index} item={item} active= {index === selected} onClick={handleClick}/>;
        })}
      </div>
      <div>
        <div>
          {props.items.map((item, index) => {
            return <>{selected === index && <item.content />}</>;
          })}
        </div>
      </div>
    </div>
  );
}
function TabView(props:TabViewProps ){
  return props.active ? (
    <div className="tabActive">{props.item.title}</div>
  ) : (
    <button onClick={() => {props.onClick(props.index)}}>{props.item.title}</button>
  ); 
}
export default TabsView;
