function CustomerAPI() {
    const baseUrl = 'https://demo.flexibee.eu/v2/c/demo/adresar'

    return {
        get: (props) => {
            let urlParams = `.json?start=${props.page}&add-row-count=true`
            if(props.filter) {
                urlParams = `(psc begins '${props.filter}')` + urlParams
            }
    
            return fetch(baseUrl + urlParams)
                .then((response) => {
                    if(!response.ok) {   
                        throw new Error('Error occured while fetching customer data; status: ' + response.status)
                    }
                    
                    return response.json()
                })
                .catch(error => console.error(error))
        }    
    }
}

export default CustomerAPI;