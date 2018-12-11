<?php
/**
 * Calculator template.
 *
 * @package The7
 * @since 1.0.0
 */

/* Template Name: Calculator */

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$config = presscore_config();
$config->set( 'template', 'calculator' );

// add content area
add_action( 'presscore_before_main_container', 'presscore_page_content_controller', 15 );

get_header();

	if ( presscore_is_content_visible() ): ?>
			<style>
				#calculateChildcare {
					margin-bottom: 30px;
				}

				fieldset {
					border: none;
				}

				input[type=number]::-webkit-inner-spin-button, 
				input[type=number]::-webkit-outer-spin-button { 
					-webkit-appearance: none; 
					margin: 0; 
				}

				input:focus,
				a:focus {
					outline: 5px solid #9CD0EF;
					outline-offset: 0;
				}

				#ymca-results {
					display: none;
				}

				.ymca-error-summary {
					border: 5px solid #cc0000;
					padding: 20px;
					margin-bottom: 30px;
				}

				.ymca-error-summary a {
					color: #cc0000;
					font-weight: bold;
				}

				.ymca-error {
					border-left: 5px solid #cc0000;
					padding-left: 10px;
				}

				.ymca-error-label {
					font-size: .7em;
					display: block;
					color: #cc0000;
				}

				.ymca-button {
					background-color: #A90B76;
					color: #ffffff;
					border: 0;
					padding: 10px 20px;
				}

				.ymca-hint {
					display: block;
					color: #6F777B;
					font-weight: normal;
					font-size: .7em;
				}

				.ymca-body {
					font-size: 19px;
					font-weight: normal;
				}
				.ymca-legend {
					font-size: 1.4em;
					font-weight: bold;
					margin-bottom: 10px;
					color: #333;
				}

				.ymca-form-group {
					margin-bottom: 30px;
				}

				.ymca-inset-text {
					border-left: 5px solid #bfc1c3;
					margin-left: 20px;
					padding-left: 20px;
					padding-top: 10px;
				}

				.ymca-input-field {
					border: 2px solid #000 !important;
					padding: 10px;
				}

				.ymca-label {
					display: block;
					margin-bottom: 5px;
				}

				.ymca-date__item {
					display: inline-block;
				}

				.ymca-date__day input,
				.ymca-date__month input {
					max-width: 60px;
					margin-right: 10px;
				}

				.ymca-date__year input {
					max-width: 100px;
				}

				.ymca-radios__item {
					float: left;
					margin-right: 20px;
				}

				.ymca-radio__button {
					opacity: 0;
					position: absolute;   
				}

				.ymca-radio__button, .ymca-label--radio {
					display: inline-block;
					vertical-align: middle;
					margin: 5px;
					cursor: pointer;
				}

				.ymca-label--radio {
					position: relative;
				}

				.ymca-radio__button + .ymca-label--radio:before {
					content: '';
					background: #fff;
					border: 2px solid #000000;
					display: inline-block;
					vertical-align: middle;
					width: 30px;
					height: 30px;
					padding: 2px;
					margin-right: 10px;
					text-align: center;
					border-radius: 50%;
				}

				.ymca-radio__button:checked + .ymca-label--radio:before {
					background: #000000;
					box-shadow: inset 0px 0px 0px 8px #fff;
				}

				.ymca-error-summary:focus,
				.ymca-button:focus {
					outline: transparent;
					box-shadow: 0px 0px 0px 6px #9CD0EF;
				}

				.ymca-radio__button:focus + .ymca-label--radio:before {
					outline: transparent;
					box-shadow: inset 0px 0px 0px 8px #fff, 0px 0px 0px 6px #9CD0EF;
				}

				.ymca-sum {
					display: block;
				}

				.ymca-sum-plus::before {
					content: '+';
					position: absolute;
					margin-left: -20px;
				}

				.ymca-sum-minus::before {
					content: '-';
					position: absolute;
					margin-left: -17px;
				}

				.ymca-sum-total {
					display: inline-block;
					border-top: 1px solid #000000;
				}

				.ymca-panel {
					background-color: #A90B76;
					height: 260px;
					text-align: center;
					width: 100%;
				}
				.ymca-panel h1 {
					padding-top: 3.3em;
					font-size: 1.4em;
					font-weight: normal;
					color: #ffffff !important;
				}
				.ymca-panel h1:focus {
					outline: none;
				}
				.ymca-panel__cost-per-week {
					font-size: 1.6em;
					font-weight: bold;
				}

				.bold {
					font-weight: bold;
				}
				.ymca-purple {
					color: #A90B76;
				}
				
				.unhide-with-js {
					display: none;
				}

			</style>
			<!-- Content -->
			<div id="content" class="content" role="main">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); // main loop

					do_action( 'presscore_before_loop' );

					if ( post_password_required() ) {
						the_content();
					} else {
					?>
						<div id="ymca-form">
							<h1 id="calculateChildcare" tabindex="-1">Calculate your childcare costs</h1>
							
							<noscript>
							<p>
								Unfortunately, this page uses Javascript to calculate your childcare 
								costs.
							</p>
							<p>
								If you can't turn on Javascript, or don't know what this means, 
								you can call us between 8am and 6pm on <span class="bold ymca-purple">0191 2828137</span>.
							</p>
							</noscript>

							<form id="unhide-with-js">
								<div class="ymca-form-group" id="fg-freeChildcare">
									<div class="ymca-radios">
										<fieldset>
											<legend class="ymca-legend">
												Do you get free childcare?
												<span class="ymca-hint">
													<span class="bold">Funding starts the term after your child turns 2 or 3.</span>
													<br />
													You can use GOVUK to <a href="https://www.gov.uk/childcare-calculator?step-by-step-nav=f237ec8e-e82c-4ffa-8fba-2a88a739783b" target="_blank" rel="noopener noreferrer"> 
													check if you get free childcare</a>.
												</span>
											</legend>
											
											<div class="ymca-radios__item" data-target="freeChildcare-hidden">
												<input class="ymca-radio__button" id="freeChildcare-yes" name="freeChildcare" type="radio" value="Yes">
												<label class="ymca-label ymca-label--radio" for="freeChildcare-yes">Yes</label>
											</div>

											<div class="ymca-radios__item">
												<input class="ymca-radio__button" id="freeChildcare-no" name="freeChildcare" type="radio" value="No">
												<label class="ymca-label ymca-label--radio" for="freeChildcare-no">No</label>
											</div>
										</fieldset>
									</div>

									<div class="ymca-inset-text js-hidden" id="freeChildcare-hidden">
										<div class="ymca-form-group" id="fg-freeChildcareAmount">
											<div class="ymca-radios ymca-radios--inline">
												<fieldset>
													<legend class="ymca-legend">
														How many hours free childcare do you get
													</legend>

													<div class="ymca-radios__item">
														<input class="ymca-radio__button" id="freeChildcare-15" name="freeChildcareAmount" type="radio" value="15">
														<label class="ymca-label ymca-label--radio" for="freeChildcare-15">15</label>
													</div>

													<div class="ymca-radios__item">
														<input class="ymca-radio__button" id="freeChildcare-30" name="freeChildcareAmount" type="radio" value="30">
														<label class="ymca-label ymca-label--radio" for="freeChildcare-30">30</label>
													</div>
												</fieldset>
											</div>
										</div>
									</div>
								</div>

								<div class="ymca-form-group" id="fg-dob">
									<fieldset class="ymca-date">
										<legend class="ymca-legend">
											What is your child's date of birth?
										</legend>

										<div class="ymca-date__item ymca-date__day">
											<label class="ymca-label" for="dob-day">Day</label>
											<input class="ymca-input-field" type="number" name="dob[day]" id="dob-day" pattern="\d*" />
										</div>

										<div class="ymca-date__item ymca-date__month">
											<label class="ymca-label" for="dob-month">Month</label>
											<input class="ymca-input-field" type="number" name="dob[month]" id="dob-month" pattern="\d*" />
										</div>

										<div class="ymca-date__item ymca-date__year">
											<label class="ymca-label" for="dob-year">Year</label>
											<input class="ymca-input-field" type="number" name="dob[year]" id="dob-year" pattern="\d*" />
										</div>
									</fieldset>
								</div>

								<div class="ymca-form-group" id="fg-startDate">
									<fieldset class="ymca-date">
										<legend class="ymca-legend">
											When would you like the childcare to start?
										</legend>

										<div class="ymca-date__item ymca-date__day">
											<label class="ymca-label" for="start-day">Day</label>
											<input class="ymca-input-field" type="number" name="start[day]" id="start-day" pattern="\d*" />
										</div>

										<div class="ymca-date__item ymca-date__month">
											<label class="ymca-label" for="start-month">Month</label>
											<input class="ymca-input-field" type="number" name="start[month]" id="start-month" pattern="\d*" />
										</div>

										<div class="ymca-date__item ymca-date__year">
											<label class="ymca-label" for="start-year">Year</label>
											<input class="ymca-input-field" type="number" name="start[year]" id="start-year" pattern="\d*" />
										</div>
									</fieldset>
								</div>

								<div class="ymca-form-group" id="fg-fulltime">
									<fieldset>
										<legend class="ymca-legend">
											Do you need full-time childcare?
											<span class="ymca-hint">Full time is 8am to 6pm Monday to Friday.</span>
										</legend>
										
										<div class="ymca-radios__item" data-target="part-time-hidden">
											<input class="ymca-radio__button" type="radio" name="fulltime" value="Yes" id="fulltime-yes" />
											<label class="ymca-label ymca-label--radio" for="fulltime-yes">Yes</label>
										</div>

										<div class="ymca-radios__item">
											<input class="ymca-radio__button" type="radio" name="fulltime" value="No" id="fulltime-no"/>
											<label class="ymca-label ymca-label--radio"for="fulltime-no">No</label>
										</div>
									</fieldset>

									<div class="ymca-inset-text js-hidden" id="part-time-hidden">
										<h2 class="ymca-body">
											Choose what you need
										</h2>
										
										<div class="ymca-form-group" if="fg-partTime">
											<fieldset>
												<legend class="ymca-legend">Monday</legend>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="monday[]" value="full" id="monday-full" />
													<label class="ymca-label ymca-label--radio" for="monday-full">All day</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="monday[]" value="half" id="monday-morning" />
													<label class="ymca-label ymca-label--radio" for="monday-morning">Morning</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="monday[]" value="half" id="monday-afternoon" />
													<label class="ymca-label ymca-label--radio" for="monday-afternoon">Afternoon</label>
												</div>
											</fieldset>
										</div>

										<div class="ymca-form-group">
											<fieldset>
												<legend class="ymca-legend">Tuesday</legend>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="tuesday[]" value="full" id="tuesday-full" />
													<label class="ymca-label ymca-label--radio" for="tuesday-full">All day</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="tuesday[]" value="half" id="tuesday-morning" />
													<label class="ymca-label ymca-label--radio" for="tuesday-morning">Morning</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="tuesday[]" value="half" id="tuesday-afternoon" />
													<label class="ymca-label ymca-label--radio" for="tuesday-afternoon">Afternoon</label>
												</div>
											</fieldset>
										</div>

										<div class="ymca-form-group">
											<fieldset>
												<legend class="ymca-legend">Wednesday</legend>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="wednesday[]" value="full" id="wednesday-full" />
													<label class="ymca-label ymca-label--radio" for="wednesday-full">All day</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="wednesday[]" value="half" id="wednesday-morning" />
													<label class="ymca-label ymca-label--radio" for="wednesday-morning">Morning</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="wednesday[]" value="half" id="wednesday-afternoon" />
													<label class="ymca-label ymca-label--radio" for="wednesday-afternoon">Afternoon</label>
												</div>
											</fieldset>
										</div>

										<div class="ymca-form-group">
											<fieldset>
												<legend class="ymca-legend">Thursday</legend>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="thursday[]" value="full" id="thursday-full" />
													<label class="ymca-label ymca-label--radio" for="thursday-full">All day</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="thursday[]" value="half" id="thursday-morning" />
													<label class="ymca-label ymca-label--radio" for="thursday-morning">Morning</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="thursday[]" value="half" id="thursday-afternoon" />
													<label class="ymca-label ymca-label--radio" for="thursday-afternoon">Afternoon</label>
												</div>
											</fieldset>
										</div>

										<div class="ymca-form-group">
											<fieldset>
												<legend class="ymca-legend">Friday</legend>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="friday[]" value="full" id="friday-full" />
													<label class="ymca-label ymca-label--radio" for="friday-full">All day</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="friday[]" value="half" id="friday-morning" />
													<label class="ymca-label ymca-label--radio" for="friday-morning">Morning</label>
												</div>

												<div class="ymca-radios__item">
													<input class="ymca-radio__button" type="radio" name="friday[]" value="half" id="friday-afternoon" />
													<label class="ymca-label ymca-label--radio" for="friday-afternoon">Afternoon</label>
												</div>
											</fieldset>
										</div>
									</div>
								</div>

								<button class="ymca-button">Continue</button>
							</form>
						</div>

						<div id="ymca-results"></div>
					<?php
						dt_paginator( $page_query );
					}

					do_action( 'presscore_after_loop' );

					presscore_display_share_buttons_for_post( 'page' );

				endwhile; endif; // main loop
				?>

			</div>

<!-- #content -->

			<?php
			do_action('presscore_after_content');

	endif; // if content visible

get_footer(); ?>
<script src="/wp-content/themes/dt-the7/js/calculator.js"></script>