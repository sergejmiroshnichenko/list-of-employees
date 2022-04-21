import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
import './EmployeesList.css'

const EmployeesList = ({ data }) => {

    const elements = data.map(item => {
        return(
            <EmployeesListItem name={item.name} surname={item.surname} salary={item.salary}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;