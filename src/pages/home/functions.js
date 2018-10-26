'use strict';

const template = `${__dirname}/template.njk`;

function get(req, res) {
  res.render(template);
}

function post(req, res) {
  res.render(template);
}

module.exports = {get, post};
