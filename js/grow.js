
    $('p').html(function (i, html) {
        var chars = $.trim(html).split("\n");
        return '<span>' + chars.join('\n</span><span>') + '</span>';
    });



$( "span" ).mouseenter(function(e) {
var element = e.target;
  console.log(element);
  if (element && element.tagName.toLowerCase() !== 'html') {
    if (!element.style.transform) {
      element.style.transform = 'scale(1.0)';
    };
    // if it has a transformation applied, and it is a scale transformation
    // find out what scale it is now
    currentScale = element.style.transform.match(/scale\(([0-9.]+)\)/)[1];
    console.log(currentScale);
    // the new scale is 0.1 more
    newScale = parseFloat(currentScale) + 0.1;
    // set the new scale
    element.style.transform = 'scale(' + newScale + ')';
  }
});
 