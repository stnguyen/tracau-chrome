document.addEventListener('selectionchange', function() {
    var selection = window.getSelection().toString().trim();
    chrome.runtime.sendMessage({
        request: 'updateTracauContextMenu',
        selection: selection
    });
});

var dialogId = "tracau-dialog";
var dialogNode = document.createElement("dialog");
dialogNode.setAttribute("id", dialogId);
dialogNode.innerHTML = `
<div id="tracau-search-wrap">
	<form id="tracau-searchform">
		<input id="tracau-searchinput" type="text" onfocus="Search for English or Vietnamese phrase...">
		<input type="submit" id="tracau-searchsubmit" value="Search">
	</form>
</div>
<div id="tracau-search-result"></div>
`;

document.body.appendChild(dialogNode);
var resultNode = document.getElementById('tracau-search-result');

document.body.addEventListener('click', function(e) {
    // close if clicked outside
    if (!dialogNode.open)
    	return;
    
    var rect = dialogNode.getBoundingClientRect();
    var clickedInside = rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width;

    if (!clickedInside)
		dialogNode.close();
});


function showTracauQueryBox(term) {
	console.log("showTracauQueryBox: " + term);


	// clear result node content
	while (resultNode.firstChild) {
	    resultNode.removeChild(resultNode.firstChild);
	}

	var contentNode = document.createElement("p");
	contentNode.innerHTML = "Loading...";

	resultNode.appendChild(contentNode);

	if (!dialogNode.open) {
		dialogNode.showModal();
	}

	document.getElementById("tracau-searchinput").value = term;
}

function showTracauQueryResult(result) {
	console.log("showTracauQueryResult: ");

	// clear dialog content
	while (resultNode.firstChild) {
	    resultNode.removeChild(resultNode.firstChild);
	}

	// fill with setences
	// determine main and secondary languages
	var mainLanguage = result.language;
	var mainSentenceField = mainLanguage;
	var secondarySentenceField = mainLanguage == "en" ? "vi" : "en";

	var contentNode = document.createElement("section");
	var sentencePairs = result.sentences;
	console.log("  " + sentencePairs.length + " sentence pairs");
	for (var i = 0; i < sentencePairs.length; i++) {
		var id = sentencePairs[i]._id;
		var mainSentenceHTML = sentencePairs[i].fields[mainSentenceField];
		var secondarySentenceHTML = sentencePairs[i].fields[secondarySentenceField];

		/*
			create the following nodes:

			<div id="tracau-sentence-10000">
				<p class="sentence-main">My main <em>sentence</em></p>
				<p class="sentence-secondary"><em>Câu</em> chính của tôi</p>
			</div>
		*/
		var pairdialogNode = document.createElement("div");
		pairdialogNode.setAttribute("id", "tracau-sentence-" + id);

		var mainSentenceNode = document.createElement("p");
		mainSentenceNode.setAttribute("class", "sentence-main");
		mainSentenceNode.innerHTML = mainSentenceHTML;
		pairdialogNode.appendChild(mainSentenceNode);

		var secondarySentenceNode = document.createElement("p");
		secondarySentenceNode.setAttribute("class", "sentence-secondary");
		secondarySentenceNode.innerHTML = secondarySentenceHTML;
		pairdialogNode.appendChild(secondarySentenceNode);

		contentNode.appendChild(pairdialogNode);
	}
	resultNode.appendChild(contentNode);
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.request === 'showTracauQueryBox') {
	  	showTracauQueryBox(msg.term);
	}
	else if(msg.request === 'showTracauQueryResult') {
		showTracauQueryResult(msg.result)
	}
});