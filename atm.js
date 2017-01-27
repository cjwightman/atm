///////////////////Attempt Three////////////////////////////
$(document).ready(function(){
 	$("body").css("background", "blue");
});

checkingBalance = 0
savingsBalance = 0
input = 0
var checking = 0
var savings = 0

$("#checking .deposit").on("click", function() {
	checkingBalance += parseInt($("#checking .input").val());
	console.log("update " + checkingBalance);
	$("#checking .balance").html("$" + checkingBalance);
})

$("#checking .withdraw").on("click", function() {
	checkingBalance -= parseInt($("#checking .input").val());
	console.log("update " + checkingBalance);
	$("#checking .balance").html("$" + checkingBalance);
})

$("#savings .deposit").on("click", function() {
	savingsBalance += parseInt($("#savings .input").val());
	console.log("update " + savingsBalance);
	$("#savings .balance").html("$" + savingsBalance);
})

$("#savings .withdraw").on("click", function() {
	savingsBalance -= parseInt($("#savings .input").val());
	console.log("update " + savingsBalance);
	$("#savings .balance").html("$" + savingsBalance);
})

function isZero() {
	if (checkingBalance == 0) {
		$("#checking").addclass("zero");
	}
}



//////////////////Attempt Two//////////////////////////////
// var checkingInput  = parseInt($("#checking .input").val())
// var checkingDeposit = $("#checking .deposit")
// var checkingWithdrawal = $("#checking .withdraw")
// var checkingBalance = parseInt($("#checking .balance").val())

// var savingsInput = parseInt($("#savings .input").val())
// var savingsDeposit = $("#savings .deposit")
// var savingsWithdrawal = $("#savings .withdraw")
// var savingsBalance = parseInt($("#savings .balance").val())

// //Checking Functions///////////////
// function checkingWithdrawFunction() {
// 	var newCheckingBalance = (checkingBalance - checkingInput);

// 	if (newCheckingBalance < checkingBalance) {
// 		$("#checking .input").html();
// 		return false
// 	}
// 	else {

// 		$("#checking .balance").html("$" + newCheckingBalance);
// 		$("#checking .input").html();
// 	}
// }

// function checkingDepositFunction() {
// 	//var checkingInput = parseInt($("#checking > .input").val());
// 	console.log(checkingInput)
// 	var newCheckingBalance = (checkingBalance + checkingInput);
// 	$("#checking .balance").html("$" + newCheckingBalance);
// 	$("#checking .input").html();
// }

// //Savings Functions//////////////
// function savingsWithdrawFunction() {
// 	var newSavingsBalance = (savingsBalance - savingsInput);

// 	if (newSavingsBalance < savingsBalance) {
// 		$("#savings .input").html();
// 		return false
// 	}

// 	else {

// 		$("#savings .balance").html("$" + newSavingsBalance);
// 		$("#savings .input").html();
// 	}
// }

// function savingsDepositFunction() {
// 	var newSavingsBalance = (savingsBalance + savingsInput)
// 	$("#savings .balance").html("$" + newSavingsBalance)
// 	$("#savings .input").html();
// }

// checkingDeposit.on("click", checkingDepositFunction)
// checkingWithdrawal.on("click", checkingWithdrawFunction)
// savingsDeposit.on("click", savingsDepositFunction)
// savingsWithdrawal.on("click", savingsWithdrawFunction)


///////////////////////Attempt One ///////////////////////////////
// var inputAmount = $(".account .input")
// var getBalance = $(".balance").html()
// var deposit = $(".deposit")
// var withdrawal = $(".withdraw")
// var checkingBalance = $("#checking .balance").val()
// var savingsBalance = $("#savings .balance").val()
// var input = $("#input")
// //var balanceField = $("")
// var newBalance
// // var checkingBalance
// // var savingsBalance

// function withdrawFunction(){
// 	newBalance = (parseInt(this.getBalance) - parseInt($(this).inputAmount))
// 	if (newBalance < 0) {
// 		return false
// 	}

// 	else {
// 			$("$(this).balance").html("$" + newBalance);
// 			$("$(this).input").val('');
// 	}

// }

// function depositFunction() {
// 	newBalance = ($(this).getBalance + $(this).inputAmount)
// 	$(".balance").html("$" + newBalance)
// }

// withdrawal.on("click", withdrawFunction)
// input.on("submit", withdrawFunction)

// deposit.on("click", depositFunction)
// input.on("submit", depositFunction)
