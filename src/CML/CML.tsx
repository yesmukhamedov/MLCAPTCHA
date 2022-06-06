import * as React from 'react'

import Paginator from './Paginator/Paginator'
import Tracker from './Tracker/Tracker'
import Verifier from './Verifier/Verifier'
const initialStoreValue = {
    status: 'OPEN'
};
export const Context = React.createContext(initialStoreValue);

class CML extends React.Component<any, any> {

    render() {

        const [context, setContext] = React.useState(initialStoreValue)

        return (
            <Context.Provider value={context}>
                <Paginator
                    children={''}
                />
                <Tracker
                    children={<></>}
                />
                <Verifier
                />
            </Context.Provider>
        );
    }
}
