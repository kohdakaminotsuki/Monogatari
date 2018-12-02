var storage = {
	player: {
		name: ""
	}
};

//function backupdownload(); downloads the command to overwrite the storage variable in another instance.
//should be able to go between javascript frameworks but does not contain engine info such as monogatari scene step.
//Also note that this will overwrite the entirety of the storage variable, which means information set to var storage that isn't in this
//command line will be lost. For example if you set storage.player.eyecolour to green, then prompt the player for their storage data command
//and that command doesn't have eye colour, then they will lose the storage.player.eyecolour data.
function backupdownload(){
	var backupdownload = document.createElement('a');
	backupdownload.href = 'data:attachment/text,' + "storage = " + "JSON.parse('" +  encodeURI( (JSON.stringify(storage)) ) + "')"+"/"+"/"+ encodeURI("If the game asks for your player passport as an input copy and paste everything after storage=, otherwise copy and paste everything here into the console");
	backupdownload.download = 'backupstorage.txt';
	backupdownload.click();
};

