alert ("Welcome to Chang's Family Restaurant!")
console.log("Chang's Family Restaurant: Order and Bill")
var subtotal = 0 
var cucsalad = 2.50
var friedeggr = 3.50
var freshsprgr = 3.50
var chickensatay = 4.00
var portpizza = 12.00
var rotchicken = 12.00
var salmon = 14.50
var seabass = 16.00
var tritip = 17.50
var wrice = 2.00
var brice = 2.00
var stmveg = 2.50
var ffries = 3.00
var potatoes = 3.00
var fruittart = 6.50
var cheesecake = 7.00
var lavacake = 7.50

$("#order").click(function(){ 
	var order = prompt ('Are you ready to order? y/n')
	while (order == 'y') {
		var orderItem = prompt("Which menu item would you like to order? 1-17")
		if (orderItem == 1) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * cucsalad
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Cucumber salad<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 2) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * friedeggr
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Friend egg rolls<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 3) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * freshsprgr
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Fresh spring rolls<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 4) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * chickensatay
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Chicken Satay<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>') 
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 5) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * portpizza
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Portobello Pizza<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 6) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * rotchicken
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Rotisserie Chicken<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 7) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * salmon
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Honey soy salmon<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 8) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * seabass
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Miso braised sea bass<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 9) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * tritip
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Grilled tri-tip<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 10) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * wrice
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>White rice<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 11) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * brice
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Brown rice<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 12) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * stmveg
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Steamed vegetables<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 13) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * ffries
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>French Fries<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 14) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * potatoes
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>House potatoes<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 15) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * fruittart
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Fresh fruit tart<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 16) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * cheesecake
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Japanese cheesecake<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} else if (orderItem == 17) {
			var itemAmt = prompt("How many would you like to order?")
			var orderCost = itemAmt * lavacake
			subtotal += orderCost
			var orderCost = orderCost.toFixed(2)
			$('.number').append('<li>' + itemAmt + '<li>')
			$('.item').append('<li>Chocolate lava cake<li>')
			$('.totalcost').append('<li>' + orderCost + '<li>')
			var order = prompt ("Would you like to order something else?")
		} 
	}
	$('#totalamounts').append('<li>' + subtotal.toFixed(2) + '<li>')
	var tax = subtotal * 0.0875
	var totalbill = subtotal + tax
	var tax = tax.toFixed(2)
	$('#totalamounts').append('<li>' + tax + '<li>')
	$('#totalamounts').append('<li>' + totalbill.toFixed(2) + '<li>')
})

	
