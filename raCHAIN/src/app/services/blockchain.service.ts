import { Injectable } from '@angular/core';

import { BlockChain } from 'node_modules/my-cryptochain.js/src/blockchain';

import * as EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockChainInstance = new BlockChain();
  public walletKeys = [];
  constructor() {
    this.blockChainInstance.difficulty = 1;
    this.blockChainInstance.minePendingTransactions('my-wallet-address');
    this.generateWalletKeys();
  }

  getBlocks() {
    return this.blockChainInstance.chain;
  }

  private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      //@ts-ignore
      keyObj: key,
      //@ts-ignore
      publicKey: key.getPublic('hex'),
      //@ts-ignore
      privateKey: key.getPrivate('hex')
    });
  }
}
