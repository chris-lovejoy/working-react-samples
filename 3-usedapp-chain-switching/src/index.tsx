import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  Mainnet,
  Rinkeby,
  ArbitrumRinkeby,
  DAppProvider,
  Config,
} from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
    [ArbitrumRinkeby.chainId]: 'https://rinkeby.arbitrum.io/rpc',
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
);
