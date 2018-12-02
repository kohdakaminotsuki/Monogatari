var storage = {
	player: {
		name: ""
	}
};

function backupdownload(){
	var backupdownload = document.createElement('a');
	backupdownload.href = 'data:attachment/text,' + "storage = " + "JSON.parse('" +  encodeURI( (JSON.stringify(storage)) ) + "')"+"/"+"/"+ encodeURI("If the game asks for your player passport as an input copy and paste everything after storage=, otherwise copy and paste everything here into the console";
	backupdownload.download = 'backupstorage.txt';
	backupdownload.click();
};
