import {HomePage} from "./Pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminPage} from "./Pages/AdminPage/AdminPage";
import {Test} from "./Pages/ChannelPage/Test";
import {ChannelPage} from "./Pages/ChannelPage/ChannelPage";
import {useRecoilState, useRecoilValue} from "recoil";
import {canLoadConfigState} from "./Atoms/CanLoadConfigState.jsx";
import {useEffect, useState} from "react";
import Web3 from "web3";
import Marketplace from "./contracts/Marketplace.json";
import MarketplaceAddress from "./contracts/Marketplace-address.json";
import NFT from "./contracts/NFT.json";
import NFTAddress from "./contracts/NFT-address.json";
import {listedItemsState} from "./Atoms/ListedItems.jsx";

export default function App() {
    const canLoadConfig = useRecoilValue(canLoadConfigState);
    const [account, setAccount] = useState();
    const [nft, setNFT] = useState();
    const [marketplace, setMarketplace] = useState();
    const [, setListedItems] = useRecoilState(listedItemsState);

    const initWeb3 = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setAccount(accounts[0]);
        await loadContracts(web3Instance);
    };

    const loadContracts = async (web3Instance) => {
        const maketplace = await getContract(web3Instance, Marketplace.abi, MarketplaceAddress.address);
        setMarketplace(maketplace);
        const nft = await getContract(web3Instance, NFT.abi, NFTAddress.address);
        setNFT(nft);
    }

    const getContract = async (web3Instance, abi, address) => {
        return new web3Instance.eth.Contract(abi, address);
    }

    useEffect( () => {
        async function loadConfig() {
            await initWeb3();
        }

        if (canLoadConfig) {
            loadConfig();
        }
    }, [canLoadConfig]);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <HomePage marketplace={marketplace} nft={nft} account={account} />
                } />
                <Route path="/admin" element={
                    <AdminPage marketplace={marketplace} nft={nft} account={account} />
                } />
                <Route path="/channel" element={
                    <Test />
                } />
                <Route path="/test" element={
                    <ChannelPage />
                } />
            </Routes>
        </BrowserRouter>
    )
}