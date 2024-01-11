/* eslint-disable react/prop-types */
import {UiHeader} from "../../components/Header/UiHeader.jsx";
import {BallsEffect} from "../../components/BallsEffect/BallsEffect.jsx";
import {UiFooter} from "../../components/Footer/UiFooter.jsx";
import {UiButton} from "../../components/Button/UiButton";
import {UiModal} from "../../components/Modal/UiModal.jsx";
import {Warning} from "../../components/svg/Warning.jsx";
import {useState} from "react";
import ParanomUri from "../../config/ParanomUri.json";
import { ethers } from "ethers";
import {useRecoilState} from "recoil";
import {canLoadConfigState} from "../../Atoms/CanLoadConfigState.jsx";
import {useNavigate} from "react-router-dom";
import {EaseOutWhenVisibleDown} from "../../components/Motion/EaseOutWhenVisibleDown.jsx";
import {UiSubHeader} from "../../components/SubHeader/UiSubHeader.jsx";
import Admin from "../../assets/Image/admin.png";
import {EaseOutWhenVisibleLeft} from "../../components/Motion/EaseOutWhenVisibleLeft.jsx";
import {UiTitle} from "../../components/Title/UiTitle.jsx";
import UiJsonDisplay from "../../components/JsonDisplay/UiJsonDisplay.jsx";
import json from "../../config/ParanomUri.json";
import {listedItemsState} from "../../Atoms/ListedItems.jsx";
import {UiGallery} from "../../components/Gallery/UiGallery";
import {loadItems} from "../../utils/Web3Utils.jsx";

export const AdminPage = ({marketplace, nft, account}) => {
    const navigate = useNavigate();
    const [, setCanLoadConfig] = useRecoilState(canLoadConfigState);
    const [listedItems, setListedItems] = useRecoilState(listedItemsState);
    const [show, setShow] = useState(false);
    const [showCollection, setShowCollection] = useState(false);
    const [modalInfos, setModalInfos] = useState({
        title: "",
        description: "",
        btnTitle: "",
        icon: null,
    });

    const adminComponent = <img src={Admin} alt="Admin"
                              className="rounded-lg shadow-md border-8 border-violet-200 w-80 sm:w-80 lg:w-8/12 xl:w-6/12" />;

    const connectWallet = async () => {
        if (window.ethereum) {
            setCanLoadConfig(true);
        }
        else {
            setModalInfos({
                title: "Sorry...",
                description: "Wallet Not Detected",
                btnTitle: "Ok",
                icon: <Warning color="red" variant="600"/>,
            })
            setShow(true);
        }
    }

    const buttonComponent = account ?undefined : <UiButton title="Connect wallet" color="neutral" onClick={connectWallet} />;

    const mintAllParanom = async () => {
        console.log("test nft", nft);
        console.log("test marketplace", marketplace);
        console.log("test account", account);
        if (!marketplace || !nft || !account) {
            setModalInfos({
                title: "Sorry...",
                description: "Wallet Not Detected",
                btnTitle: "Ok",
                icon: <Warning color="red" variant="600"/>,
            })
            setShow(true)
            return
        }

        const listingPrice = ethers.parseEther("2");
        const uris = ParanomUri.items.map(item => {
            return `${ParanomUri.baseUri}/${ParanomUri.hash}/${item}.${ParanomUri.extension}`;
        });

        for (const uri of uris) {
            console.log("test 1");
            let mint = await nft.methods.mint(uri).send({ from: account, gas: 5000000 });
            console.log("test 2");
            await nft.methods.setApprovalForAll(marketplace.options.address, true).send({ from: account });
            console.log("test 3", mint);
            let tokenId = mint.events.Transfer.returnValues.tokenId;
            console.log("test 4", tokenId);
            await nft.methods.setApprovalForAll(marketplace.options.address, true).send({ from: account });
            console.log("test 5");
            const makeItem = await marketplace.methods.makeItem(nft.options.address, tokenId, listingPrice).send({ from: account, gas: 1000000 });
            console.log("makeitem", makeItem);
        }
    };

    const collectionManagement = async () => {
        if (listedItems.length === 0) {
            let items = await loadItems(marketplace, nft);
            setListedItems(items);
        }
        setShowCollection(!showCollection);
    }

    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                <UiHeader items={["Admin"]} button={{ title: "Connect", color: "neutral" }}/>
                <UiModal showModal={show}
                         closeModal={() => setShow(false)}
                         title={modalInfos.title}
                         description="Wallet Not Detected"
                         btnTitle="Ok"
                         icon={<Warning color="red" variant="600"/>}
                />
                <div className="mt-8">
                    <EaseOutWhenVisibleDown>
                        <UiSubHeader title="Welcome to admin page"
                                     titleSecond="help user to enjoy PRNM"
                                     subTitle="Manage system configurations"
                                     subTitleSecond="user settings, and transactions"
                                     componentRight={adminComponent}
                                     componentInteractive={buttonComponent}

                        />
                    </EaseOutWhenVisibleDown>
                </div>

                <div className="mt-20 pb-5">
                    <EaseOutWhenVisibleLeft>
                        <div className="mb-3">
                            <UiTitle title="Create all NFT" subTitle="create the collection from the json file"/>
                        </div>
                        <UiJsonDisplay jsonData={json} />
                        <div className="pt-2">
                            <UiButton title="Create the collection"  color="neutral" onClick={mintAllParanom}/>
                        </div>
                        <div className="pt-2">
                            <UiButton title={showCollection ? "Unsee the collection" : "See the collection"}
                                      color="neutral"
                                      onClick={collectionManagement}/>
                        </div>
                        {showCollection &&
                            <div className="pt-2">
                                <UiGallery data={listedItems} />
                            </div>
                        }
                    </EaseOutWhenVisibleLeft>
                </div>
                <div className="mt-10 pb-5">
                    <EaseOutWhenVisibleLeft>
                        <div className="mb-3">
                            <UiTitle title="Navigation" subTitle="naviguer de page en page"/>
                        </div>
                        <div className="flex space-x-2">
                            <UiButton title="Home Page" color="neutral" onClick={() => navigate("/")}/>
                            <UiButton title="Channel Page" color="neutral" onClick={() => navigate("/channel")}/>
                            <UiButton title="Test Page" color="neutral" onClick={() => navigate("/test")}/>
                        </div>
                    </EaseOutWhenVisibleLeft>
                </div>

                <BallsEffect />
                <UiFooter title="A NFT Card Game" />
            </div>
        </div>
    )
}