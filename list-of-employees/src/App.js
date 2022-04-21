import './App.css';
import AppInfo from "./components/AppInfo/AppInfo";
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from "./components/AppFilter/AppFilter";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import EmployeesAddForm from "./components/EmployeesAddForm/EmployeesAddForm";



function App() {

    const data = [
        {surname: "Makarenko", name: "Stepan", salary: 1200},
        {surname: "Miroshnichenko", name: "Sergej", salary: 800},
        {surname: "Petrenko", name: "Ivan", salary: 1600},
        {surname: "Maksymenko", name: "Vasyl", salary: 1100}
    ];


    return (
        <div className="App">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data = { data }/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;


