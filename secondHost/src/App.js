import React, { useState, useEffect} from "react";
import { loadRemoteEntry } from "../loadRemoteEntry";
import { loadRemoteModule } from "../loadRemoteModule";
const App = () => {
    const [RemoteComponnet, setRemoteComponent] = useState(null)

    useEffect(() => {
        const loadComponent = async () => {
            try{
                await loadRemoteEntry('https://aajibade-mdsol.github.io/remote_json/remote.json')
                const module = await loadRemoteModule('remoteApp', './Component')
                setRemoteComponent(module.default)
            } catch(err) {
                console.error('Failed to load remore component', err)
            }
        }
        loadComponent()
    }, [])
    console.log(RemoteComponnet)
  return <h1>Hello React</h1>;
};

export default App;