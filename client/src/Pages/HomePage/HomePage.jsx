import {UiHeader} from "../../components/Header/UiHeader.jsx";
import {itemSelectedState} from "../../Atoms/ItemSelectedState.jsx";
import {useRecoilValue} from "recoil";
import {GamePage} from "../GamePage/GamePage";
import {CollectionPage} from "../CollectionPage/CollectionPage";
import {UiFooter} from "../../components/Footer/UiFooter";
import {BallsEffect} from "../../components/BallsEffect/BallsEffect.jsx";
import Web3 from 'web3';
import HelloWorld from "../../contracts/HelloWorld.json"
import {useEffect, useState} from "react";

export const HomePage = () => {
    const itemSelected = useRecoilValue(itemSelectedState);
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [data, setData] = useState("salut");

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    console.log("here1");
                    await window.ethereum.request({ method: "eth_requestAccounts" });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);

                    const accounts = await web3Instance.eth.requestAccounts();
                    let account = accounts[0];
                    console.log("here2", account);

                    // Remplacez l'adresse du contrat par celle que vous avez déployée
                    const contractAddress = '0x159D6f6d634ecD41512E8cd3748741C73F2D10B9';
                    const contractInstance = new web3Instance.eth.Contract(HelloWorld.abi, contractAddress);
                    setContract(contractInstance);
                    console.log("here3");
                } catch (error) {
                    console.error('Error while initializing web3:', error);
                }
            } else {
                console.error('MetaMask not detected');
            }
        };

        initWeb3();
    }, []);

    const connectWallet = async () => {
        if (window.ethereum)
            console.log("detected");
        else
            console.log("MetaMask not detected");
        const result = await contract.methods.getGreeting().call();
        console.log("here4");
        setData(result);
    }

    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                {data}
                <UiHeader button={{ title: "Connect", color: "neutral", onClick: connectWallet }} />
                {itemSelected === "Game" ? <GamePage /> : <CollectionPage />}
                <BallsEffect />

                <UiFooter title="A NFT Card Game" />
            </div>
        </div>
    )
}