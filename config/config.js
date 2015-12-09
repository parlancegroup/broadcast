//config file

exports = module.exports = {};

//Set in env
if (!process.env.TWILIO_ACCOUNT_SID) {

	var TWILIO_ACCOUNT_SID = 'ACb196d10158ca8e11fb1503c7c7c78f1e';
	var TWILIO_AUTH_TOKEN = '00c4b99ad4770a8167f79e5c4458c8f3';
	var TWILIO_NUMBER = '+14153001549';

	//beta password
	exports.beta_password = 'whistlewhileyouwork';


	//admin secret
	exports.admin_secret = 'AOIC-09sdcalk2m30r9mca0';

}
else {

	var TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
	var TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
	var TWILIO_NUMBER = process.env.TWILIO_NUMBER;

	exports.beta_password = process.env.BETA_PASSWORD;

	exports.admin_secret = process.env.ADMIN_SECRET;

}


//database connection
exports.secret = 'aAEmc(#-)CK_)KcSLdc_-0-0283';


//Twilio vars
exports.TWILIO_ACCOUNT_SID = TWILIO_ACCOUNT_SID; 
exports.TWILIO_AUTH_TOKEN = TWILIO_AUTH_TOKEN; 
exports.TWILIO_NUMBER = TWILIO_NUMBER;

//response variables
exports.responses = [

		'Owner Declined',
		'Owner Cancelled',
		'Accepted',
		'Reopened',
		'New Position',
		'Filled'

	];

exports.unknownResponse = 'Whoops - that is not a response I recognize. Perhaps you entered the wrong offer ID? Please check your response and try again.';

