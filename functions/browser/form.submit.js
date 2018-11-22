const {buildDataObject} = require('./buildDataObject');
const {getErrors} = require('./validation');
const {generateContent} = require('./generate.content');
const {appendErrors} = require('./validate.appendErrors');
const {clearErrors} = require('./validate.clearErrors');
const {scrollToTop} = require('./scrollToTop');

$(document).on('submit', 'form', e => {
  clearErrors();
  e.preventDefault();

  const data = buildDataObject();
  const errors = getErrors(data);

  if (errors.length > 0) {
    appendErrors(errors);
    return scrollToTop();
  }

  const content = generateContent(data);
  console.log(content);
});

