import ParanomBoomrang from "../../assets/Gif/ParanomBoomrang.gif";
import btc from "../../assets/Image/btc.png";
import eth from "../../assets/Image/eth.png";
import circleBlueGold from "../../assets/Image/cercleBlueGold.png";
import cercleGold from "../../assets/Image/cercleGold.png";
import cerclePurple from "../../assets/Image/cerclePurple.png";
import cross from "../../assets/Image/cross.png";



export const SubHeaderTest = () => {
    return (
        <div className="max-w-auto overflow-hidden h-screen">
            <div className="md:flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-60">
                <div className="flex justify-center xl:ml-40 xl:pr-36 2xl:ml-40 2xl:pr-36">
                    <img src={eth} width={80}  className="invisible xl:visible absolute rounded-full" />
                    <div className="md:pl-16 md:pt-24 2xl:pl-24 2xl:pt-24">
                        <h1 className="text-dark font-bold text-4xl md:text-xl lg:text-2xl 2xl:text-6xl leading-snug mb-3">
                            Welcolme to Paranom <br/>
                            a web3 NFT card Game <br/>
                        </h1>
                        <p className="tracking-wide text-xl text-white font-semibold md:text-[13px] lg:text-[16px] 2xl:text-[30px] leading-snug mb-3">
                            Connect your wallet to start playing <br/>
                            the ultimate Web3 Battle Card Game
                        </p>
                        <img src={circleBlueGold} width={30} className="absolute -mt-20 -ml-20" />
                        <img src={cerclePurple} width={30} className="absolute mt-20 ml-10" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={ParanomBoomrang} width={400} height={300} className="rounded-lg shadow-md border-8 border-violet-200" />
                    <img src={btc} width={50}  className="absolute -mt-20 -ml-20 rounded-full " />
                </div>
            </div>
        </div>
    )
}