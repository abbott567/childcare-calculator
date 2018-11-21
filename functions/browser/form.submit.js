const {buildDataObject} = require('./buildDataObject');
const {getErrors} = require('./validation');
const {generateContent} = require('./generate.content');

$(document).on('submit', 'form', e => {
  clearErrors();

  e.preventDefault();
  const data = buildDataObject();
  const errors = getErrors(data);

  if (errors.length > 0) {
    appendErrors(errors);
    return console.log(errors);
  }

  const content = generateContent(data);
  console.log(content);
});

function appendErrors(errors) {
  $('main').prepend(`
    <div class="ymca-error-summary">
      <h2>Theres been a problem</h2>
      <p>Check the following:</p>
      <ul id="error-summary"></ul>
    </div>`
  );
  errors.forEach(error => {
    $('#error-summary').append(`
      <li>
        <a href="#${error.id}">${error.summary}</a>
      </li>`
    );
    const $legend = $(document).find('#' + error.id).find('legend:first');
    $legend.append(`
      <span class="ymca-error">${error.label}</span>
    `);
  });
}

function clearErrors() {
  const $summary = $('.ymca-error-summary:first');
  const $errorLabel = $(document).find('.ymca-error');
  $summary.remove();
  $errorLabel.each(function () {
    $(this).remove();
  });
}
