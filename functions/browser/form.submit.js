const {buildDataObject} = require('./buildDataObject');
const {getErrors} = require('./validation');
const {generateContent} = require('./generate.content');

$(document).on('submit', 'form', e => {
  e.preventDefault();
  const data = buildDataObject();
  const errors = getErrors(data);

  if (errors.length > 0) {
    return console.log(errors);
  }

  const content = generateContent(data);
  console.log(content);
});
