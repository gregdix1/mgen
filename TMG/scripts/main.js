//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
	var fileApp = new FileApp();
	fileApp.run();
}

function FileApp() {
}

FileApp.prototype = {
	fileSystemHelper: null,
	fileNameField: null,
	textField: null,
     
	run: function() {
		var that = this,
			writeFileButton = document.getElementById("writeFileButton"),
			readFileButton = document.getElementById("readFileButton"),
			deleteFileButton = document.getElementById("deleteFileButton");
        
		that.fileNameField = document.getElementById("fileNameInput");
		that.textField = document.getElementById("textInput");
        
		writeFileButton.addEventListener("click",
										 function() { 
											 that._writeTextToFile.call(that); 
										 });
        
		readFileButton.addEventListener("click",
										function() {
											that._readTextFromFile.call(that);
										});
        
		deleteFileButton.addEventListener("click",
										  function() {
											  that._deleteFile.call(that)
										  });
        
		fileSystemHelper = new FileSystemHelper();
	},
    
	_deleteFile: function () {
		var that = this,
			fileName = that.fileNameField.value;
        
		if (that._isValidFileName(fileName)) {
			fileSystemHelper.deleteFile(fileName, that._onSuccess, that._onError);
		} else {
			var error = { code: 44, message: "Invalid filename"};
			that._onError(error);
		}
	},
    
	_readTextFromFile: function() {
		var that = this,
			fileName = that.fileNameField.value;
        
		if (that._isValidFileName(fileName)) {
			fileSystemHelper.readTextFromFile(fileName, that._onSuccess, that._onError);
		} else {
			var error = { code: 44, message: "Invalid filename"};
			that._onError(error);
		}
	},
    
	_writeTextToFile: function() {
		var that = this,
			fileName = that.fileNameField.value,
			text = that.textField.value;

		if (that._isValidFileName(fileName)) {
			fileSystemHelper.writeLine(fileName, text, that._onSuccess, that._onError)
		} else {
			var error = { code: 44, message: "Invalid filename"};
			that._onError(error);
		}
	},
    
	_onSuccess: function(value) {
		var errorContainer = document.getElementById("error");
		var resultsContainer = document.getElementById("results");

		errorContainer.classList.add("hidden");
		resultsContainer.classList.remove("hidden");

		var resultContent = document.getElementById("result");
		resultContent.textContent = value;
	},
    
	_onError: function(error) {
		var errorContainer = document.getElementById("error");
		var resultsContainer = document.getElementById("results");

		resultsContainer.classList.add("hidden");
		errorContainer.classList.remove("hidden");

		var errorCodeField = document.getElementById("errCode");
		var errorMessageField = document.getElementById("errMessage");
		errorCodeField.textContent = error.code;
		errorMessageField.textContent = error.message;
	},
    
	_isValidFileName: function(fileName) {
		//var patternFileName = /^[\w]+\.[\w]{1,5}$/;
		return fileName.length > 2;
	}
}