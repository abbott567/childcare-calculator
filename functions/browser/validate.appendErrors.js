function appendErrors(errors) {
  $('main').prepend(`
    <div class="ymca-error-summary" tabindex="-1" role="alert">
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
    const $formGroup = $(document).find('#' + error.id);
    const $legend = $formGroup.find('legend:first');
    $legend.append(`
      <span class="ymca-error-label">${error.label}</span>
    `);
    $formGroup.addClass('ymca-error');
  });
  const titleText = $('title').text();
  $('title').text('Error: ' + titleText);
}

module.exports = {appendErrors};
