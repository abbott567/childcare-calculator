const {buildDataObject} = require('./buildDataObject');
const {getErrors} = require('./validation');
const {generateContent} = require('./generate.content');
const {appendErrors} = require('./validate.appendErrors');
const {clearErrors} = require('./validate.clearErrors');
const {scrollToTop} = require('./scrollToTop');

window.onpopstate = function () {
  $('#ymca-form').show();
  $('#ymca-results').hide();
  $('#calculateChildcare').focus();
};

$(document).on('submit', 'form', e => {
  clearErrors();
  e.preventDefault();
  history.pushState({}, 'page 2', '#results');

  const data = buildDataObject();
  const errors = getErrors(data);

  if (errors.length > 0) {
    appendErrors(errors);
    return scrollToTop();
  }

  const content = generateContent(data);
  appendContent(content);
});

function appendContent(content) {
  const $results = $('#ymca-results');
  let discountText = '';

  let sumText = '';
  for (let i = 0; i < content.sum.days.length; i++) {
    const spanClass = i === 0 ? '<span class="ymca-sum">' : '<span class="ymca-sum ymca-sum-plus">';
    sumText += `${spanClass}${content.sum.days[i]}</span>`;
  }
  if (content.discount !== '£0.00') {
    discountText += `<br />Also, because you've told us you're entitle to 
    <span class="bold">${content.numberOfFreeHours}</span> hours of free childcare, 
    we've deducted <span class="bold">${content.discount}</span>.`;
    sumText += `<span class="ymca-sum ymca-sum-minus">${content.discount}</span>`;
  }
  sumText += `<span class="ymca-sum ymca-sum-total bold">${content.costPerWeek}</span>`;

  $results.html(`
    <div>
      <a href="#" onClick="window.history.back()">Back</a>

      <div class="ymca-panel">
        <h1 id="results-heading" tabindex="-1">
          Your childcare will cost<br />
          <span id="costPerWeek" class="ymca-panel__cost-per-week">${content.costPerWeek} per week</span>
        </h1>
      </div>

      <p class="ymca-text">
        We’ve done our very best to give you an accurate, personalised quote. 
        This figure is based on the information you have provided and our 
        current pricing. If you would like this figure confirming, or to arrange 
        a visit, please call us on <span class="bold ymca-purple">0191 2828137</span>.
      </p>

      <p>
        If you require your funding to be stretched over half term holidays, 
        please see the nursery manager for a personalised quote.
      </p>

      <h2>How was this calculated?</h2>

      <p class="ymca-text">
        You told us you needed <span class="bold">${content.days}</span>.
      </p>

      <p class="ymca-text">
        Childcare for a <span class="bold">${content.age}</span> is 
        <span class="bold">${content.costPerDay}</span> for a full day and 
        <span class="bold">${content.costPerHalfDay}</span> for a half day. 
        ${discountText}
      </p>

      <p class="ymca-text">
        ${sumText}
      </p>
    </div>
  `);
  $('#ymca-form').hide();
  $('#ymca-results').show();
  $('#results-heading').focus();
}
