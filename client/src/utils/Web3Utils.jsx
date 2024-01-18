import { ethers } from 'ethers';

export const NftStorageGateway = "https://nftstorage.link/ipfs/";

export const convertIpfsUrl = (ipfsUrl, gatewayBaseUrl = "https://ipfs.io/ipfs/") => {
    const ipfsPattern = /ipfs:\/\/(.+)/;

    const match = ipfsUrl.match(ipfsPattern);
    if (match) {
        return `${gatewayBaseUrl}${match[1]}`;
    }
    return ipfsUrl;
};

export const loadItems = async (marketplace, nft) => {
    const itemCount = await marketplace.methods.itemCount().call();
    let listedItems = []

    for (let indx = 1; indx <= itemCount; indx++) {
        const i = await marketplace.methods.items(indx).call();
        const uri = await nft.methods.tokenURI(i.tokenId).call();
        const response = await fetch(uri);
        const metadata = await response.json();
        let item = {
            buttonInfos: {
                title: "Buy a Paranom",
                variation: "500"
            },
            id: i.itemId,
            price: ethers.formatEther(i.price) + " ETH",
            name: metadata.name,
            description: metadata.description,
            image: convertIpfsUrl(metadata.image, NftStorageGateway),
            attributes: metadata.attributes
        };
        if (!i.sold)
            listedItems.push(item);
    }
    return listedItems;
}