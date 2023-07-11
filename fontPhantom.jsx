// get the active document
var doc = app.activeDocument;

// iterate over all page items in the document
for (var i = 0; i < doc.pageItems.length; i++) {
  var item = doc.pageItems[i];

  // check if the item is a text frame
  if (item.typename === "TextFrame") {
    // get the font name
    var fontName = item.textRange.characterAttributes.textFont.name;

    // check if a layer with this name already exists
    var layerExists = false;
    for (var j = 0; j < doc.layers.length; j++) {
      if (doc.layers[j].name === fontName) {
        layerExists = true;
        break;
      }
    }

    // if the layer doesn't exist, create it
    if (!layerExists) {
      var newLayer = doc.layers.add();
      newLayer.name = fontName;
    }

    // outline the text
    item.createOutline();
  }
}
