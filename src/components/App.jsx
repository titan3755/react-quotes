import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Error from './Error'
import Loading from './Loading'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

const App = (props) => {
    const [reRender, setReRender] = useState(null)
    const [render, setRender] = useState('Loading')
    const [data, setData] = useState(null)
    const dataManager = async () => {
        try {
            let response = await axios.get('https://api.quotable.io/random')
            setData(response)
            setRender('Success')
        }
        catch (err) {
            setData(err)
            setRender('Error')
        }
    }
    useEffect(() => {
        dataManager()
    }, [reRender])
    if (render === 'Success') {
        return (
            <React.Fragment>
                <Content data={data} rerender={setReRender} />
            </React.Fragment>
        )
    }
    else if (render === 'Error') {
        return (
            <React.Fragment>
                <Error data={data} />
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Loading />
            </React.Fragment>
        )
    }
}

export default App
