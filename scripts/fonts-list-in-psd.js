var fonts = [];
getFonts(app.activeDocument, fonts);
console.log(fonts);

function getFonts(ref, fs) {
    var len = ref.layers.length;
    for (var i = 0; i < len; i++) {
        var layer = ref.layers[i];
        if (layer.typename=="LayerSet") getFonts(layer, fs);
        else if(layer.kind==LayerKind.TEXT){
            var font = layer.textItem.font;
            if(fs.indexOf(font)==-1) fs.push(font);
        }
    }
}
