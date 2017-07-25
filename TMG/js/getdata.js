// Get MySql Data
///user 
function showUser(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","http://test.stickyginger.co.za/ajaxslq/getuserlinked.php?q="+str,true);
        xmlhttp.send();
    }
}
///// populate <select with users
//document.onload = function(){getUserlist();};

function getUserlist() {
	str = '1';
	document.getElementById("userList").innerHTML = 'load..';
    if (str == "") {
        document.getElementById("userList").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("userList").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","http://test.stickyginger.co.za/ajaxslq/getuserlist.php?q="+str,true);
        xmlhttp.send();
    }
}


/// LIKE FirstName text input 
function showUserByName(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","http://test.stickyginger.co.za/ajaxslq/getuserByName.php?q="+str,true);
        xmlhttp.send();
    }
}
///user > user_details
function showUserMasterDetail(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","http://test.stickyginger.co.za/ajaxslq/getuser.php?q="+str,true);
        xmlhttp.send();
    }
}
    
      
// get mysql data end

//load Wp-pages

///test wp page pull
function getUserlistXX() {
	str = '1';
	document.getElementById("landHtmlx").innerHTML = 'html load..';
    if (str == "") {
        document.getElementById("landHtmlx").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("landHtmlx").innerHTML = this.responseText;
                 loadExternalFilerScripst();
            }
        };
       // xmlhttp.open("GET","http://test.stickyginger.co.za/tmg-wp-app/bl/",true);
        //xmlhttp.open("GET","http://test.stickyginger.co.za/tmg-wp-app/blank-page-landing-example/",true);
        xmlhttp.open("GET","http://test.stickyginger.co.za/tmg-wp-app/filter/post-filter-mix-put.php",true);
        xmlhttp.send();
    }
   
}


//load pages/ page
var checkData = '';
function delayGetData(){
        
    setTimeout(function(){
        checkData = document.getElementById('userList').innerHTML; 
        if(checkData == ''){ getUserlist();
        } else {document.getElementById('click').innerHTML ='data was already loaded.';}
    }, 500);
}

///fetch remote scripts and load

function loadExternalFilerScripst() {
	
		
	var script = document.createElement("script");
    script.src = "http://test.stickyginger.co.za/tmg-wp-app/filter/jquery.ui.touch-punch.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
	
	var script = document.createElement("script");
    script.src = "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
	
	var script = document.createElement("script");
    script.src = "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
	
	var script = document.createElement("script");
    script.src = "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
	
	var script = document.createElement("script");
    script.src = "http://test.stickyginger.co.za/tmg-wp-app/filter/js/jquery.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
	
	 var script2 = document.createElement("script");
    // This script has a callback function that will run when the script has
    // finished loading.
    script2.src = "http://test.stickyginger.co.za/tmg-wp-app/filter/js/fsfilter.js";
    script2.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script2);
		
	 var script2 = document.createElement("script");
    // This script has a callback function that will run when the script has
    // finished loading.
    script2.src = "http://test.stickyginger.co.za/tmg-wp-app/filter/jqFunctions.js";
    script2.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script2);
	
	
}
  