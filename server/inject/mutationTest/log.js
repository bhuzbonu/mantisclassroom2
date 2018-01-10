exports = function(mutations) {
    function getDOMNodeAsString(node) {
        var nodePath = "";
        while (node) {
            nodePath = "<" + (node.nodeName == "#document" ? "HTML" : node.nodeName) + (node.id ? " id='" + node.id + "'" : "") +
                (node.className ? " class='" + node.className + "'" : "") + ">" + ((nodePath.length === 0) ? "" : "\n" + nodePath);
            node = node.parentElement;
        }

        var arrNodes = nodePath.split("\n");
        for(var i=0; i < arrNodes.length; i++) {
            arrNodes[i] = Array(i*2).join(' ') + arrNodes[i];
        }
        nodePath = arrNodes.join("\n");
        return nodePath;
    }

    for (var i = 0; i < mutations.length; i++) {
        console.log("DOMMutation[" + i +
            "] Type:", mutations[i].type, "Path:", getDOMNodeAsString(mutations[i].target));
        if (mutations[i].type == "attributes") {
            var value = mutations[i].target.getAttribute(mutations[i].attributeName);
            console.log("Attribute Changed: ", mutations[i].attributeName, "=", value);
        }
    }
    //return true; Never return true - we are just logging mutations here.
};
