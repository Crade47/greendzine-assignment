import { useEffect, useState } from "react";
import { getData } from "./api/api";
import { EmployeeData } from "./types";
import ListItem from "./components/ListItem";
import searchIcon from "./assets/search-icon.png"

function getFilteredItems(query: string, items: EmployeeData[]) {
  if (!query) {
    return items;
  }
  return items.filter((employee: EmployeeData) =>
    employee.first_name.includes(query)
  );
}

function App() {
  const [employeeData, setEmployeeData] = useState<EmployeeData[] | null>(null);
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    async function startFetch() {
      const result = await getData();
      if (!ignore) {
        setEmployeeData(result);
      }
    }
    let ignore = false;
    startFetch();
    return () => {
      ignore = true;
    };
  }, []);
  let filteredEmployeeList;
  if (employeeData) {
    filteredEmployeeList = getFilteredItems(query, employeeData);
  }

  return (
    <>
      <h1 className="heading">Employee List</h1>
      <section className="container">
        <div className="search_container">
          <input
            type="text"
            className="search_bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <img width="25" height="25" className="search_icon"  src={searchIcon} alt="search--v1"/>
        </div>

        <section className="employee_list_container">
          {filteredEmployeeList?.map(
            ({ id, avatar, email, first_name, last_name }) => (
              <ListItem
                key={id}
                id={id}
                avatar={avatar}
                email={email}
                first_name={first_name}
                last_name={last_name}
              />
            )
          )}
        </section>
      </section>
    </>
  );
}

export default App;
