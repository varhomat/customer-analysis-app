const CustomerTable = ({ customers }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Zip code</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((customer) => 
                        <tr>
                            <td>{customer.nazev}</td>
                            <td>{customer.ulice + ', ' + customer.mesto}</td>
                            <td>{customer.psc}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default CustomerTable
