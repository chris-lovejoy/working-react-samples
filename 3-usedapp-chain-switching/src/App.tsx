import React from 'react';
import logo from './logo.svg';
import './App.css';


import {
  useEtherBalance,
  useEthers,
  ArbitrumRinkeby,
  Rinkeby,
} from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

interface LayoutProps {
  chain?: number;
  networkName?: string;
  account?: string | null;
}

const WalletPanel: React.FC<LayoutProps> = ( {chain, networkName, account} ) => {

  const etherBalance = useEtherBalance(account, {chainId: chain});

  return(
    <>
      {networkName} (chain {chain})
      <p>Wallet Id: {account}</p>
      <p>Balance: {formatEther(etherBalance || 0)}</p>
    </>
  )
}

// {account && <p>Account: {account}</p>}
// {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}


function App() {

  const { chainId, activateBrowserWallet, switchNetwork, account } = useEthers()

  return (
    <div className="App">
      <header className="App-header">
        {!account && <button onClick={() => activateBrowserWallet()}>Connect</button>}
      
        {chainId !== Rinkeby.chainId && <button onClick={() => switchNetwork(Rinkeby.chainId)}>Switch to Rinkeby</button>}
        {chainId !== 421611 && <button onClick={() => switchNetwork(421611)}>Switch to Arbitrum Rinkeby</button>}

        <br/><br></br>

        <WalletPanel chain={Rinkeby.chainId} networkName="Rinkeby" account={account}/>
        <br></br><br></br>
        <WalletPanel chain={ArbitrumRinkeby.chainId} networkName="ArbitrumRinkeby" account={account}/>
      
      </header>
    </div>
  );
}

export default App;
