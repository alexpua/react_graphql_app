import {ApolloProvider} from "@apollo/client";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import client from './apollo/client';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </StrictMode>,
)
