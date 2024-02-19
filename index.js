const TtmBaseSocketClient = require('./wsapiClass.js');

const yourApiKey = "";
const yourApiSecret = "";

var ttmbaseApi = new TtmBaseSocketClient(yourApiKey, yourApiSecret);

// events

ttmbaseApi.on( "notification", ( message ) => {

	console.log("Type: " + message.method)

	console.log(JSON.stringify(message, null, 4));

});


(async () => {

	let isconnected = await ttmbaseApi.waitConnect();
	
	console.log('connected');


	try {
	
		let assetinfo = await ttmbaseApi.getasset('BTC');
		
		console.log(assetinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	
	try {
	
		let assetsinfo = await ttmbaseApi.getassets();
		
		console.log(assetsinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let marketinfo = await ttmbaseApi.getmarket('BTC/USDT');
		
		console.log(marketinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let marketsinfo = await ttmbaseApi.getmarkets();
		
		console.log(marketsinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let balanceinfo = await ttmbaseApi.getbalances();
		
		console.log(balanceinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let tradeinfo = await ttmbaseApi.gettrades('BTC/USDT');
		
		console.log(JSON.stringify(tradeinfo, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let subticker = await ttmbaseApi.subscribeticker('BMB/USDT');
		
		console.log(JSON.stringify(subticker, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	
	try {
	
		let unsubticker = await ttmbaseApi.unsubscribeticker('BMB/USDT');
		
		console.log(JSON.stringify(unsubticker, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let suborderbook = await ttmbaseApi.subscribeorderbook('BMB/USDT', 30);
		
		console.log(JSON.stringify(suborderbook, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	
	try {
	
		let unsuborderbook = await ttmbaseApi.unsubscribeorderbook('BMB/USDT');
		
		console.log(JSON.stringify(unsuborderbook, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let subtrades = await ttmbaseApi.subscribetrades('BMB/USDT');
		
		console.log(JSON.stringify(subtrades, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	

	try {
	
		let unsubtrades = await ttmbaseApi.unsubscribetrades('BMB/USDT');
		
		console.log(JSON.stringify(unsubtrades, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	

	try {
	
		let getorders = await ttmbaseApi.getorders("USDC/USDT"); 
		
		console.log(JSON.stringify(getorders, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let subreports = await ttmbaseApi.subscribereports();
		
		console.log(JSON.stringify(subreports, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	

	let createorder;
	
	try {
	
		createorder = await ttmbaseApi.createorder('BMB/USDT', 'buy', '0.007', '50');
		
		console.log(JSON.stringify(createorder, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	let cancelorder;
	
	try {
	
		if (createorder && createorder.result)
		{
			cancelorder = await ttmbaseApi.cancelorder(createorder.result.id);
			console.log(JSON.stringify(cancelorder, null, 4));
		}
		
	} catch (e) {
	
		console.log(e);
	
	}

	
})();