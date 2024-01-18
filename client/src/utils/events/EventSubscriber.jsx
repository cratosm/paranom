import { ethers } from 'ethers';

class EventSubscriber {
    constructor(contractAddress, abi, providerUrl) {
        this.provider = new ethers.JsonRpcProvider(providerUrl);
        this.contract = new ethers.Contract(contractAddress, abi, this.provider);
    }

    subscribeToBoughtEvents(eventName, onEvent) {
        this.contract.on(eventName, onEvent);
    }

    unsubscribeFromBoughtEvents(eventName, onEvent) {
        this.contract.off(eventName, onEvent);
    }
}

export default EventSubscriber;
