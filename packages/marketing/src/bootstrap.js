import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

//Mount to start the app

const mount = (el,{ onNavigate, defaultHistory }) => {
 
const history = defaultHistory || createMemoryHistory();

 if(onNavigate) {
    history.listen (onNavigate);
 }

 ReactDOM.render(<App history={history}/>,el);

return {
    onParentNavigate( { pathname: nextPathname}) {
        const  { pathname } = history.location

        if(pathname !== nextPathname){
            history.push(nextPathname);
         }
    }
};
};
// In development and Isolation ,
//call mount Immediately

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
}

//We are running through the container,
//we should export the mount.

export { mount };