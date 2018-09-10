import {TransactionsExplorer} from "../model/TransactionsExplorer";
import {Wallet, WalletOptions} from "../model/Wallet";
import {Mnemonic} from "../model/Mnemonic";
import {Transaction} from "../model/Transaction";

//bridge for cnUtil with the new mnemonic class
(<any>self).mn_random = Mnemonic.mn_random;
(<any>self).mn_decode = Mnemonic.mn_decode;
(<any>self).mn_encode = Mnemonic.mn_encode;

let currentWallet : Wallet|null = null;

onmessage = function(data : MessageEvent){
	if(data.isTrusted){
		let event : any = data.data;
		// console.log(event);
		if(event.type === 'initWallet'){
			currentWallet = Wallet.loadFromRaw(event.wallet,true);
			postMessage('readyWallet');
		}else if (event.type === 'process'){
            if (typeof event.wallet !== 'undefined') {
                //console.log('loading from raw');
				currentWallet = Wallet.loadFromRaw(event.wallet,true);
			}

			if(currentWallet === null){
				postMessage('missing_wallet');
				return;
			}

<<<<<<< HEAD:src/workers/TransferProcessing.ts
			let rawTransactions : RawDaemonTransaction[] = event.transactions;
=======
            let rawTransactions: RawDaemonTransaction[] = event.transactions;
>>>>>>> dncore-restructure:wwwroot/workers/TransferProcessing.ts
            let transactions: any[] = [];
            
			for(let rawTransaction of rawTransactions){
                let transaction = TransactionsExplorer.parse(rawTransaction, currentWallet);
				if(transaction !== null){
                    currentWallet.addNew(transaction);
<<<<<<< HEAD:src/workers/TransferProcessing.ts
                    //if (transaction.getAmount() !== 0) //fusion
                    //{
                        transactions.push(transaction.export());
                    //}
				}
=======
                        transactions.push(transaction.export());
    			}
>>>>>>> dncore-restructure:wwwroot/workers/TransferProcessing.ts
			}

			postMessage({
				type:'processed',
				transactions:transactions
			});
		}
		// let transaction = TransactionsExplorer.parse(rawTransaction, height, this.wallet);
	}
};

postMessage('ready');