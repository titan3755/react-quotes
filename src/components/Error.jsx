import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

const Error = (props) => {
    return (
        <React.Fragment>
            <div className="error">
                <h4>An error has occured while connecting to API! Refresh the page to try again or check your internet connection. If everything is ok, then it's a problem on our side 😁</h4>
                <br />
                <h4 className="err-code"><code>{String(props.data)}</code></h4>
            </div>
        </React.Fragment>
    )
}

export default Error