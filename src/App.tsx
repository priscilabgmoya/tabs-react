import './App.css'; 
import TabsView from './components/Tabs/TabsView';
import { TabItems } from './components/Tabs/types/types';
function Content_1(){
  return <div>Content 1</div>
}
function Content_2(){
  return <div>Content 2</div>
}
function Content_3(){
  return <div>Content 3</div>
}
const items: TabItems[] = [
  {
    id: crypto.randomUUID(),
    title: "Tab 1", 
    content: Content_1
  },
  {
    id: crypto.randomUUID(),
    title: "Tab 2", 
    content: Content_2
  },
  {
    id: crypto.randomUUID(),
    title: "Tab 3", 
    content: Content_3
  }
]

function App() {
  function handleChange(item: TabItems) {
    console.log(item.title);
    
  }

  return (
    <>
     <TabsView items={items} onChange={handleChange}/>
    </>
  )
}

export default App;
