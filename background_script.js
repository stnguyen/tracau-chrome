// Set up context menu tree at install time.

function query(term, tab) {
    console.log("query Tracau.vn for: \"" + term + "\"");
    var url = "http://api.tracau.vn/WBBcwnwQpV89/" + term + "/en/a";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;

            // remove 'a(' at the beginning and ');' at the end of response text because it's JSONP
            // and we cant execute JSONP callback inside a chrome extension
            response = response.slice(2);
            response = response.slice(0, -2);

            console.log("xhr response: " + response);

            chrome.tabs.sendMessage(tab.id, {request: "showTracauQueryResult", result: JSON.parse(response)}, function(response) {});  
        }
    }; 
    xhr.open("GET", url);
    xhr.send();
}

function onClickHandler(info, tab) {
    var sText = info.selectionText;

    // query tracau.vn
    query(sText, tab);

    // show query box (loading indicator). Result will be updated inside query callback
    chrome.tabs.sendMessage(tab.id, {request: "showTracauQueryBox", term: sText}, function(response) {});  
};

// ID to manage the context menu entry
var cmid;

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.request === 'updateTracauContextMenu') {
        var selectionText = msg.selection;
        console.log("selectionText: " + selectionText);
        if (selectionText == '') {
            // Remove the context menu entry
            if (cmid != null) {
                chrome.contextMenus.remove(cmid);
                cmid = null; // Invalidate entry now to avoid race conditions
            } // else: No contextmenu ID, so nothing to remove
        } else { // Add/update context menu entry
            var options = {
                title: "Search Tracau.vn for \"" + selectionText + "\"",
                contexts: ['selection'],
                onclick: onClickHandler
            };
            if (cmid != null) {
                chrome.contextMenus.update(cmid, options);
            } else {
                // Create new menu, and remember the ID
                cmid = chrome.contextMenus.create(options);
            }
        }
    }
});
