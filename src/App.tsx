import { useEffect, useState } from "react"
import { getData } from "./api/api";
import { EmployeeData } from "./types";

function getFilteredItems(query:string, items:EmployeeData[]){
  console.log("inside the filter function")
  if(!query){
    return items
  }
  return items.filter((employee:EmployeeData) => employee.first_name.includes(query))
}

function App() {
  const [employeeData, setEmployeeData] = useState<EmployeeData[] | null>(null);
  const [query, setQuery] = useState<string>("")
  useEffect(()=>{
    async function startFetch(){
      const result = await getData();
      if(!ignore){
        setEmployeeData(result);
      }
    }
    let ignore = false;
    startFetch();
    return () =>{
      ignore = true;
    }
  },[])
  let filteredEmployeeList 
  if(employeeData){
    filteredEmployeeList = getFilteredItems(query, employeeData);
  }

  return (
    <>
      <input type="text" onChange={(e) => setQuery(e.target.value)} /> 
      {filteredEmployeeList?.map((employee) => <div>{employee.first_name}</div>)}
    </>
  )
}

export default App
