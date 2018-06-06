// History
//	2005-08-07	changed "myNavigate" so it's less dependent of the actual URL structure (esp. if "index.html" is missing)
//	2005-10-18	changed to UTF-8, added "zz"s
//	2005-10-21	added the low-probability donation reminder
//
var theList=new Array(
//	motion + time
	"mot-feetLin", "mot-mib", "mot-ske", "mot-silencing",
	"mot-snakes", "mot-snakeAdLib", "mot-snakesLum",
	"mot-PinnaBrelstaff", "mot-PinnaBrelstaff2", 
	"mot-adapt", "mot-adaptSpiral", "mot-scanimation",
	"mot-Roget", "mot-spokes", "mot-wagonWheel", "mot-wagonWheelCol", "mot-strob", "mot-sigma",
	"mot-spineDrift", "mot-eyeJitter", "mot-biomot", "mot-flashLag", "mot-rampAdapt",
	"mot-enigma", "mot-freezeRot", "mot-reversePhi", "mot-feetCirc", "mot-motionBinding",
	"mot-Tusi", "mot-breathingSquare", "mot-miss-fund", "mot-freqDoubling", "mot-kaleidoscope", "mot-Ternus",
	"mot-sam", "mot-pigeonNeck", "mot-psychokin", "mot-dottedLines",
	"mot-zz",
//	Luminance
	"lum-herGrid","lum-herGridCurved", "lum-scGrid", "lum-NinioDots", "lum-moire1", "lum-moire2", 
	"lum-Pulfrich", "lum-inducedGrating",
	"lum-diamond",
	"lum-cobc", "lum-wkoffka", "lum-MachBands",
	"lum-inducedContrastAsym", "lum-pyramid", "lum-white",
	"lum-adelsonPlaid", "lum-adelsonCheckShadow", 
	"lum-saccadicSuppression", "lum-contourAdapt", "lum-contrastContrast", "lum-contrastAdapt", 
	"lum-lazyShadow", "lum-hyperacuity",
	"lum-zz",
//	colour
	"col-lilacChaser", "col-watercolor", "col-context", "col-colorFan", "col-Benham", "col-Benham2",
	"col-neon", "col-whiteXmas", "col-Munker", "col-equilu", "col-equiluContour", "col-isoluNuBleu", "col-flicker",
	"col-mix", "col-match", "col-colorPhi", "col-dress", "col-strawbsNotRed", "col-McCollough",
	"col-zz",
//	geometric
	"ang-SkyeGrating", "ang-tiltedTable", "ang-hering", "ang-poggendorff", "ang-arch", "ang-fraser", "ang-tilt", "ang-cafewall",
	"ang-trianglePuzzle", "ang-KitaokaBulge", "geom-Jastrow",
	"ang-zz",
//	size constancy
	"sze-muelue", "sze-moon", "sze-tIllusion", "sze-sineIllusion", 
	"sze-lumiloom", "sze_shepardTables", "sze-shepardTerrors", "sze-reverspective", 
	"sze-Necker", "sze-missCornerCube", "sze-AmesBallerina", "sze-silhouette", "sze-Frankfurter", "sze-anamorph", "sze-leaningTowers",
	"sze-zz",
//	cognitive
	"cog-blindSpot", "cog-Darwin", "cog-blureffects", "cog-blur_nsx", "cog-kanizsa", "cog-lettersInk", 
	"cog-Dalmatian", 
	"cog-hiddenBird", "cog-brickWall", "cog-rotations", "cog-imposs1", "cog-impossHallucii", "cog-impossWFallMcwolles",
	"cog-numerosity", "cog-Delboeuf", "cog-Ebbinghaus", "cog-EbbingDyn",
	"cog-zz",
//	faces
	"fcs-hollowFace", "fcs-faceInBeans", "fcs-faceOnMars", "fcs-church", "fcs-thompsonThatcher",
	"fcs-ghostlyGaze", "fcs-SpatFreqComposites", 
	//"fcs_faceAdapt", 
	"fcs-mosaic",
	"aud-zz", "aud-ShepardTone", "mot-bounce",
//	end
	"-misc"
);

var theListDE=new Array(
//	motion + time
	"mot-feetLin", "mot-mib", "mot-ske", "mot-silencing", "mot-snakeAdLib",
	"mot-adapt", "mot-adaptSpiral", "mot-Roget", "mot-spokes", "mot-wagonWheel", 
	"mot-sigma", "mot-spineDrift", "mot-motionBinding", "mot-Tusi", 
	"mot-breathingSquare", "mot-kaleidoscope", "mot-Ternus", "mot-sam", 
	
	"lum-herGridCurved", "lum-NinioDots", "lum-moire1", "lum-diamond", "lum-cobc", "lum-contourAdapt", "lum-contrastAdapt", "lum-pyramid", "lum-white", "lum-saccadicSuppression", "lum-adelsonCheckShadow", 
	
	"col-lilacChaser", "col-Benham", "col-neon", 
	"col-Munker", "col-equiluContour", "col-mix", "col-dress", "col-strawbsNotRed",
	
	"ang-tiltedTable", "ang-hering", "ang-tilt", "ang-cafewall", "ang-trianglePuzzle", 
	
	"geom_KitaokaBulge", "geom-Jastrow", "cog-Delboeuf", "cog-Ebbinghaus", "cog-EbbingDyn", "ang-arch",
	
	"sze-muelue", "sze-moon", "sze-Necker", "sze-missCornerCube", "sze-silhouette", "sze-Frankfurter", "sze_shepardTables", "sze-shepardTerrors", "sze-anamorph", "sze-leaningTowers", 
	
	"cog-lettersInk", "cog-hiddenBird", "fcs-faceOnMars", "cog-Darwin", 
	
	"cog-rotations", "cog-impossHallucii", "cog-impossWFallMcwolles", 
	
	"fcs-hollowFace", "fcs-mosaic"
);


function myNavigate(direction) {
	//alert("*");
	//<protocol>//<host>[:<port>]/<pathname>[<hash>][<search>]
	var thePathname=window.location.pathname;  var newLocation ="";
//	var theProtocol=window.location.protocol, theHost=window.location.host, thePort=window.location.port;
	thePathname=thePathname.split("/");  
	if (thePathname[thePathname.length-1] == "index.html") {
		thePathname=thePathname[thePathname.length-2]+"/"+thePathname[thePathname.length-1];
	} else {
		thePathname=thePathname[thePathname.length-2]+"/index.html";
	}
	var theIndex=-9;
	for (i = 0; i < theList.length; i++) {
		if ((theList[i]+"/index.html")==thePathname) theIndex=i;
	}
	if ((theIndex<0) || (theIndex>=theList.length)) {
		newLocation = theList[0]+"/index.html";
		window.location.href = newLocation;
		return 1;
	}
	theIndex += direction;
	if ((theIndex<0) || (theIndex>=theList.length)) {
		newLocation = "../index.html";
	} else {
		newLocation = "../"+theList[theIndex]+"/index.html";
	}
//	newLocation = (theHost==""? "" : "theHost/")+newLocation;
//	alert(newLocation);
	window.location.href = newLocation;
	top.location.target="_top"
	if (window.location.target != "_top") {
		top.location.href = window.location.href
	}
	return 1;
}


function myNavigateDE(direction) {
	//alert("*");
	//<protocol>//<host>[:<port>]/<pathname>[<hash>][<search>]
	var thePathname=window.location.pathname;  var newLocation ="";
//	var theProtocol=window.location.protocol, theHost=window.location.host, thePort=window.location.port;
	thePathname=thePathname.split("/");  
	if (thePathname[thePathname.length-1] == "index-de.html") {
		thePathname=thePathname[thePathname.length-2]+"/"+thePathname[thePathname.length-1];
	} else {
		thePathname=thePathname[thePathname.length-2]+"/index-de.html";
	}
	var theIndex=-9;
	for (i = 0; i < theListDE.length; i++) {
		if ((theListDE[i]+"/index-de.html")==thePathname) theIndex=i;
	}
	if ((theIndex<0) || (theIndex>=theListDE.length)) {
		newLocation = theListDE[0]+"/index-de.html";
		window.location.href = newLocation;
		return 1;
	}
	theIndex += direction;
	if ((theIndex<0) || (theIndex>=theListDE.length)) {
		newLocation = "../index-de.html";
	} else {
		newLocation = "../"+theListDE[theIndex]+"/index-de.html";
	}
//	newLocation = (theHost==""? "" : "theHost/")+newLocation;
//	alert(newLocation);
	window.location.href = newLocation;
	top.location.target="_top"
	if (window.location.target != "_top") {
		top.location.href = window.location.href
	}
	return 1;
}


function IlluSubheader2017() {
	document.write('<h3 align="center"><a href="../index.html" target="_top">Visual Phenomena &amp; Optical Illusions</a> by <a href="https://michaelbach.de">Michael Bach</a></h3>');
}


function IlluSubheader() {
	document.write('<h3 align="center"><a href="https://michaelbach.de">Michael’s</a> <a href="../index.html" target="_top">Visual Phenomena &amp; Optical Illusions</a></h3>');
}


function IlluSubheaderDE() {
	document.write('<h3 align="center"><a href="../index.html" target="_top">Visual Phenomena &amp; Optical Illusions</a> by <a href="https://michaelbach.de">Michael Bach</a></h3>');
}


function IlluHeader(name, icon) {
	document.write('<div id="illuHeader" style="margin-bottom:20px;">',
		'<headerLeft>',
		'<form><input type="button" value="next&rarr;" onClick="myNavigate(1)"> <br /> <br /><input type="button" value="&larr;prev" onClick="myNavigate(-1)"><\/form>',
		'</headerLeft>',
		'<headerCenter>',
		'<h1 style="padding-top:0px; margin-top:0px; line-height:100%">',
		name,
		'<h3 align="center"><a href="https://michaelbach.de">from Michael’s</a> &nbsp; <a href="../index.html" target="_top">Visual Phenomena &amp; Optical Illusions</a></h3>',
		'</headerCenter>',
		'<headerRight><img src="', icon, '" alt="icon" width="64" height="64" /></headerRight>',
		'</div>')
}


function IlluHeaderDE(name, icon) {
	document.write('<div id="illuHeader" style="margin-bottom:20px;">',
		'<headerLeft>',
		'<form><input type="button" value="weiter&rarr;" onClick="myNavigateDE(1)"> <br /> <br /><input type="button" value="&larr;zurück" onClick="myNavigateDE(-1)"><\/form>',
		'</headerLeft>',
		'<headerCenter>',
		'<h1 style="padding-top:0px; margin-top:0px; line-height:100%">', name, '</h1>',
		'<h3 align="center"><a href="../index-de.html" target="_top">Optische Täuschungen &amp; Sehphänomene</a> von <a href="https://michaelbach.de">Michael Bach</a></h3>',
		'</headerCenter>',
		'<headerRight><img src="', icon, '" alt="icon" width="64" height="64" /></headerRight>',
		'</div>')
}


function MM_swapImgRestore() {
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}


function MM_preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); 
  return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function GetFlashVersion() {
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	var retValue = 0;
	if (plugin) {
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
	    for (var i = 0; i < words.length; ++i) {
			if (isNaN(parseInt(words[i])))	continue;
			var MM_PluginVersion = words[i];
		}
		retValue = MM_PluginVersion;
    }
	return retValue;
}


function doesntWorkButton() {
	s = "• Reloading would be my first action\n\r• Pressing Reset (if available) might help\n\r• Internet Explorer ≤ 9? Upgrade if possible or:\n\r• Use current versions of Firefox (≥23), Chrome (≥24), Safari (≥7), or Opera (≥15), ….";
	document.write('<form name=myform><input type=button value=" Doesn’t work? " onClick=alert(s)></form>');
}

function gehtNichtButton() {
	s = "• Als erstes würde ich's mit Neuladen versuchen\n\r• Reset (falls verfügbar) könnte helfen\n\r• Internet Explorer ≤ 9? Aktualisieren (geht nicht in XP), oder:\n\r• Aktuelle Versionen von Firefox (≥23), Chrome (≥24), Safari (≥7), Opera (≥15) oder IE (≥10) benutzen.";
	document.write('<form name=myform><input type=button value="Geht nicht?" onClick=alert(s)></form>');
}


var gBackValue=-1;

function Initialize() {
	gBackValue=top.history.length;
}


function CreateBackButton() {
	document.write('<form onSubmit="0"><input type="button" value="Back" onclick="top.history.back()"></form>');
}


function CreateTopBackButton() {
	document.write('<form onSubmit="0">');
	document.write('<input type="button" value="Top" onclick="window.location.href=&quot;#anchor_top&quot;">');
//	document.write(' <input type="button" value="Back" onclick="top.history.go(gBackValue-top.history.length-1)">');
	document.write(' &nbsp; &nbsp; &nbsp; &nbsp; <input type="button" value="Back" onclick="top.history.back()">');
	document.write('</form>');
}


function DonationSuggestion() {
	document.write('<h3 align="left">You may have noticed that there are no advertisements on this site…</h3>');
/*	var randomSelector = Math.round(Math.random()*3);
	switch (randomSelector) {
		case 0:
			document.write(
				'<h3 align="left">You may have noticed that there are no advertisements on this site…</h3><p>To help me keep it so, please consider contributing a small <a href="../-misc/donations.html"><b>â†’donation</b></a> to  help me to pay for traffic & development tools.</p>');
			break
		case 1:
			document.write(
				'<h3 align="left">There are no advertisements on this site…</h3><p>Thus, please consider contributing a small <a href="../-misc/donations.html"><b>â†’donation</b></a> to  help me towards site maintainance & development tools.</p>');
			break
		case 2:
			document.write(
				'<h3 align="left">Should you want to <a href="../-misc/donations.html">â†’donate</a>, you would help to further develop this site.</h3>');
		break
		case 3:
			document.write(
				'<h3 align="left">You enjoyed this site so far?</h3><p>If so, you might want to consider making a <a href="../-misc/donations.html"><b>â†’donation</b></a> to help me to pay for traffic & development tools.</p>');
			break
		break
	}*/
}