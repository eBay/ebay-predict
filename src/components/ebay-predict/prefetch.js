'use strict';

var predictElem = document.querySelector('noscript.ebay-predict');

function prefetch(assets) {
    assets.forEach(function(asset) {
        // create a new XHR request
        var xhr = new XMLHttpRequest();
        // open the request for the resource to "prefetch"
        xhr.open('GET', asset, true);
        // fire!
        xhr.send();
    });
}

function handlePrediction(response) {
    try {
        var assetObj = JSON.parse(response);
        var limit = parseInt(predictElem.dataset.limit, 10) || 2;
        for (var assetType in assetObj) {
            if (!Object.prototype.hasOwnProperty.call(assetObj, assetType)) {
                continue;
            }
            var assets = assetObj[assetType];
            if (Array.isArray(assets) && assets.length) {
                prefetch(assets.slice(0, limit));
            }
        }
    } catch (ex) {
        // Do nothing
    }
}

function callPredictService() {
    var src = predictElem.dataset.src;
    if (!src) {
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            handlePrediction(xhr.responseText);
        }
    };
    xhr.send();
}

function init() {
    window.addEventListener('load', function() {
        var delay = parseInt(predictElem.dataset.delay, 10) || 200;
        var timeoutID = setTimeout(function() {
            clearTimeout(timeoutID);
            callPredictService();
        }, delay);
    });
}
init();
