/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

//function backupdownload(); when entered into the console provides the command to overwrite the storage variable of another
// instance of the game with the data from when the backupdownload function was written
function backupdownload(){
	var backupdownload = document.createElement('a');
	backupdownload.href = 'data:attachment/text,' + "storage = " + "JSON.parse('" +  encodeURI( (JSON.stringify(storage)) ) + "')";
	backupdownload.download = 'backupstorage.txt';
	backupdownload.click();
};
