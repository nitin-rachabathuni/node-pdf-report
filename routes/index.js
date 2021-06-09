var express = require('express');
var router = express.Router();
const { createPDF, getPDFBuffer, jsonObjectToHTML, getImage, createImage} = require('node-pdf-report');

router.get('/', async function(req, res, next) {
  const obj = {
    "data": "Click Here",
    "size": 36,
    "style": "bold",
    "name": "text1",
    "hOffset": 250,
    "vOffset": 100,
    "alignment": "center",
    "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
}
  const pdfBuffer = await getPDFBuffer({
    html: `<body>${Object.keys(obj).map(key => `<p>${obj[key]}</p>`)}</body>`
  });

  console.log("pdfBuffer: ", pdfBuffer.toString('base64'))

  res.send(pdfBuffer.toString('base64'));
});

module.exports = router;
