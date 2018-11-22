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
    const $formGroup = $(document).find('#' + error.id);
    const $legend = $formGroup.find('legend:first');

    $legend.append(`
      <span class="ymca-error-label">${error.label}</span>
    `);
    $formGroup.addClass('ymca-error');
  });
}

module.exports = {appendErrors};
