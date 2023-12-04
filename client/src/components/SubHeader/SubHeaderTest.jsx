import ParanomBoomrang from "../../assets/Gif/ParanomBoomrang.gif";
import btc from "../../assets/Image/bitcoin-01.png";
import eth from "../../assets/Image/ethereum-01.png";
import circle1 from "../../assets/Image/circle-01.png";
import circle2 from "../../assets/Image/circle-03.png";


export const SubHeaderTest = () => {
    return (
        <div className="max-w-auto overflow-hidden h-screen">
            <div className="md:flex space-x-96">
                <div className="max-w-8xl ml-60 p-2 ">
                    <img src={eth} width={50}  className="absolute mx-auto rounded-full shadow-md" />
                    <div className="max-w-lg mx-auto px-4 py-16 ">
                        <h1 className="text-dark font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] leading-snug mb-3">
                            Welcolme to Paranom <br/>
                            a web3 NFT card Game <br/>
                        </h1>
                        <p className="tracking-wide text-sm text-white font-semibold sm:text-[42px] lg:text-[40px] xl:text-[20px] leading-snug mb-3">
                            Connect your wallet to start playing <br/>
                            the ultimate Web3 Battle Card Game
                        </p>
                        <img src={circle2} width={50}  className="absolute rounded-full shadow-md" />
                    </div>
                </div>
                <div className="relative h-400">
                    <img src={ParanomBoomrang} width={400} height={300} className="rounded-lg shadow-md border-8 border-violet-200" />
                    <img src={btc} width={50}  className="absolute -mt-20 -ml-20 rounded-full shadow-md" />
                    <img src={circle1} width={50}  className="absolute -mt-20 -ml-20 rounded-full shadow-md" />
                </div>
            </div>
        </div>
    )
}