/* Get the texts in a PSD file with this script in Photopea */

var texts = [];
getTexts(app.activeDocument, texts);
console.log(texts);

function getTexts(ref, fs) {
    var len = ref.layers.length;
    for (var i = 0; i < len; i++) {
        var layer = ref.layers[i];
        if (layer.typename=="LayerSet") getTexts(layer, fs);
        else if(layer.kind==LayerKind.TEXT){
            var text = layer.textItem.contents;
            if(fs.indexOf(text)==-1) {
                console.log(text);
                fs.push(text);
            }
        }
    }
}
