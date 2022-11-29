import "./App.scss";
import { useState, useEffect } from "react"
import CustomerTable from "./components/CustomerTable/CustomerTable";
import CustomerAPI from "./api/CustomerAPI.js";

function App() {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [customers, setCustomers] = useState([])

  const customerAPI = CustomerAPI();

  useEffect(() => {
    customerAPI.get({page, filter})
      .then((customers) => setCustomers(customers.winstrom.adresar))
  }, [page, filter])

  return (
    <div className="container">
      <h1>Customer analysis application</h1>
      <CustomerTable 
        customers={customers}
      />
    </div>
  );
}

export default App;
