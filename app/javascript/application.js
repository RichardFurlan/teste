// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap/dist/js/bootstrap.bundle"
import "./src/application.css"
//= require jquery3
//= require popper
//= require bootstrap
//= require rails-ujs
//= require turbolinks
//= require_tree .
import * as bootstrap from "bootstrap"
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle"

import "popper"
import "bootstrap"

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

