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
import {listedItemsState} from "./Atoms/ListedItemsState.jsx";
import {UiModal} from "./components/Modal/UiModal.jsx";
import {modalInfosState} from "./Atoms/ModalInfosState.jsx";
import {getProfileItem, loadItems} from "./utils/Web3Utils.jsx";
import EventSubscriber from "./utils/events/EventSubscriber.jsx";
import {defaultProfileItem, profileItemState} from "./Atoms/ProfileItemState.jsx";

export default function App() {
    const urlRpc = "http://localhost:7545";
    const canLoadConfig = useRecoilValue(canLoadConfigState);
    const modalInfos = useRecoilValue(modalInfosState);
    const [profileItem, setProfileItem] = useRecoilState(profileItemState);
    const [account, setAccount] = useState();
    const [nft, setNFT] = useState();
    const [marketplace, setMarketplace] = useState();
    const [refreshItems, setRefreshItems] = useState(false);
    const [, setListedItems] = useRecoilState(listedItemsState);
    const [show, setShow] = useState(false);
    const [eventSubscriber, setEventSubscriber] = useState(null);

    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            console.log('Veuillez connecter MetaMask.');
            setProfileItem(defaultProfileItem);
            setAccount(null);
        } else if (accounts[0] !== account) {
            setAccount(accounts[0]);
            setProfileItem(initProfilePicture(accounts[0]));
            console.log('L adresse du compte a changé:', accounts[0]);
        }
    };

    const initWeb3 = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setAccount(accounts[0]);
        await loadContracts(web3Instance);
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        subscribeToEvents();
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

    const onBoughtCallback = (itemId, nft, tokenId, itemPrice, seller, buyer) => {
        console.log(`New Bought Event - itemId: ${itemId}, nft: ${nft}, tokenId: ${tokenId}, price: ${itemPrice}, seller: ${seller}, buyer: ${buyer}`);
        setRefreshItems(true);
        if (profileItem.name === defaultProfileItem.name)
            setProfileItem(initProfilePicture(account));
    };

    const subscribeToEvents = () => {
        const subscriber = new EventSubscriber(
            MarketplaceAddress.address,
            Marketplace.abi,
            urlRpc
        );

        subscriber.subscribeToBoughtEvents("Bought", onBoughtCallback);
        setEventSubscriber(subscriber); // Stocker la référence de l'abonné
    };

    const unsubscribeFromEvents = () => {
        if (eventSubscriber) {
            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            eventSubscriber.unsubscribeFromBoughtEvents("Bought", onBoughtCallback);
        }
    };

    useEffect(() => {
        return unsubscribeFromEvents;
    }, [account]);

    async function initProfilePicture(account) {
        const profileItem = await getProfileItem(marketplace, nft, account);
        setProfileItem(profileItem);
    }

    useEffect(() => {
        if (account) {
            initProfilePicture(account);
        }
    }, [account]);

    useEffect( () => {
        async function refreshMarketplace() {
            let items = await loadItems(marketplace, nft);
            setListedItems(items);
            setRefreshItems(false);
        }

        if (refreshItems && marketplace && nft) {
            refreshMarketplace();
        }
    }, [marketplace, nft, refreshItems, setListedItems]);

    useEffect( () => {
        async function loadConfig() {
            await initWeb3();
        }

        if (canLoadConfig) {
            loadConfig();
        }
    }, [canLoadConfig]);

    useEffect( () => {
        setShow(modalInfos.show);
    }, [modalInfos]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <HomePage web3Infos={{
                        marketplace: marketplace,
                        nft: nft,
                        account: account
                    }} />
                } />
                <Route path="/admin" element={
                    <AdminPage web3Infos={{
                        marketplace: marketplace,
                        nft: nft,
                        account: account
                    }} />
                } />
                <Route path="/channel" element={
                    <Test web3Infos={{
                        marketplace: marketplace,
                        nft: nft,
                        account: account
                    }} />
                } />
                <Route path="/test" element={
                    <ChannelPage />
                } />
            </Routes>
            <UiModal showModal={show}
                     closeModal={() => setShow(false)}
                     title={modalInfos.title}
                     description={modalInfos.description}
                     btnTitle={modalInfos.btnTitle}
                     icon={modalInfos.icon}
                     color={modalInfos.color}
            />
        </BrowserRouter>
    )
}