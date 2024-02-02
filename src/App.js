import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate'

function App(props) {
  const response = [
    {
      itemName:"Nirma",
      itemDate:"203",
      itemMonth:"june",
      itemYear:"1998"
    },
    {
      itemName:"Nirma2",
      itemDate:"03",
      itemMonth:"JUly",
      itemYear:"2008"
    },
    {
      itemName:"Nirma3",
      itemDate:"23",
      itemMonth:"April",
      itemYear:"2022"
    }
  ];
  return (
    <div>
      <Item name={response[0].itemName}>Mai hu tumhara pahla elements</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">Hello Jee</div>
    </div>
  );
}

export default App;
