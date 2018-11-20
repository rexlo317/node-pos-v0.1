function printInventory(inputs){
	let barcode = [];
	let name = [];
	let unitNum = [];
	let price = [];
	let unit = [];
	let check = [];
	barcode[0] = inputs[0].Barcode;
	name[0] = inputs[0].Name;
	unitNum[0] = 0;
	unit[0] = 'bottle';
	price[0] = inputs[0].Price;
	check[0] = false;
	
	for (let i=0; i<inputs.length; i++){
		for (let j=0; j<barcode.length; j++){
			if (barcode[j] === inputs[i].Barcode){
				unitNum[j] = unitNum[j]+1;
				if (unitNum[j]>=2 && check[j]===false)
				{
					unit[j] = unit[j] + 's';
					check[j] = true;
				}
				break;
			}
			if (j === barcode.length-1){
				barcode[j+1] = inputs[i].Barcode;
				name[j+1] = inputs[i].Name;
				unitNum[j+1] = 0;
				if (inputs[i].Unit==='a')
					unit[j+1] = '';
				else 
					unit[j+1] = inputs[i].Unit;
				price[j+1] = inputs[i].Price;
				check[j+1] = false;
			}	
		}
	}
		
	var text = '***<store earning no money>Receipt ***\n';
	var priceAll = 0;
	for (let i=0; i<barcode.length; i++){
		text+= 'Name: ' + name[i] + ', Quantity: ' + unitNum[i];
		if (unit[i] !== '')
			text+=' '; 
		text+= unit[i] + ', Unit price: ' + price[i] + '.00 (yuan), Subtotal: ' + parseInt(price[i]) * unitNum[i] + '.00 (yuan)\n';
		priceAll += parseInt(price[i]) * unitNum[i];
	}
	text+='----------------------\n' + 'Total: ' + priceAll +'.00 (yuan)\n' +'**********************\n';
	return text ;
}


module.exports = printInventory;