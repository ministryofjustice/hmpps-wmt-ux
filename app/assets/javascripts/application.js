/* global $ */
/* global GOVUK */

var tds = 
  document.querySelectorAll("td");
var ths = 
  document.querySelectorAll("th");

var cells = 
    Array.prototype.slice.call(tds)
      .concat(
        Array.prototype.slice.call(ths)
      );

var rows =
  document.querySelectorAll("tr");

[].forEach.call(
  cells, 
  function(el) {
    el.addEventListener(
      'mouseover', 
      function() {

        var index = indexInParent(this);
        
        for (var i = 0; i < rows.length; i++) {
          var cellsInThisRow = rows[i].getElementsByTagName("td");
          
          if (cellsInThisRow.length == 0) {
            cellsInThisRow = rows[i].getElementsByTagName("th");
          }
          
          cellsInThisRow[index]
            .classList
            .add("hover");
        };  
                  
      }, 
      false
    );
  }
);

[].forEach.call(
  cells, 
  function(el) {
    el.addEventListener(
      'mouseout', 
      function() {
        for (var i = 0; i < cells.length; i++) {
          cells[i]
            .classList
            .remove("hover");
        }
      }, 
      false
    );
  }
);

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) return num;
         if (children[i].nodeType==1) num++;
    }
    return -1;
}

function ShowHideContent () {
  var self = this

  self.escapeElementName = function (str) {
    var result = str.replace('[', '\\[').replace(']', '\\]')
    return (result)
  }

  self.showHideRadioToggledContent = function () {
    $(".block-label input[type='radio']").each(function () {
      var $radio = $(this)
      var $radioGroupName = $radio.attr('name')
      var $radioLabel = $radio.parent('label')

      var dataTarget = $radioLabel.attr('data-target')

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (dataTarget) {
        // Set aria-controls
        $radio.attr('aria-controls', dataTarget)

        $radio.on('click', function () {
          // Select radio buttons in the same group
          $radio.closest('form').find('.block-label input[name=' + self.escapeElementName($radioGroupName) + ']').each(function () {
            var $this = $(this)

            var groupDataTarget = $this.parent('label').attr('data-target')
            var $groupDataTarget = $('#' + groupDataTarget)

            // Hide toggled content
            $groupDataTarget.addClass('js-hidden')
            // Set aria-expanded and aria-hidden for hidden content
            $this.attr('aria-expanded', 'false')
            $groupDataTarget.attr('aria-hidden', 'true')
          })

          var $dataTarget = $('#' + dataTarget)
          $dataTarget.removeClass('js-hidden')
          // Set aria-expanded and aria-hidden for clicked radio
          $radio.attr('aria-expanded', 'true')
          $dataTarget.attr('aria-hidden', 'false')
        })
      } else {
        // If the data-target attribute is undefined for a radio button,
        // hide visible data-target content for radio buttons in the same group

        $radio.on('click', function () {
          // Select radio buttons in the same group
          $('.block-label input[name=' + self.escapeElementName($radioGroupName) + ']').each(function () {
            var groupDataTarget = $(this).parent('label').attr('data-target')
            var $groupDataTarget = $('#' + groupDataTarget)

            // Hide toggled content
            $groupDataTarget.addClass('js-hidden')
            // Set aria-expanded and aria-hidden for hidden content
            $(this).attr('aria-expanded', 'false')
            $groupDataTarget.attr('aria-hidden', 'true')
          })
        })
      }
    })
  }
  self.showHideCheckboxToggledContent = function () {
    $(".block-label input[type='checkbox']").each(function () {
      var $checkbox = $(this)
      var $checkboxLabel = $(this).parent()

      var $dataTarget = $checkboxLabel.attr('data-target')

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {
        // Set aria-controls
        $checkbox.attr('aria-controls', $dataTarget)

        // Set aria-expanded and aria-hidden
        $checkbox.attr('aria-expanded', 'false')
        $('#' + $dataTarget).attr('aria-hidden', 'true')

        // For checkboxes revealing hidden content
        $checkbox.on('click', function () {
          var state = $(this).attr('aria-expanded') === 'false'

          // Toggle hidden content
          $('#' + $dataTarget).toggleClass('js-hidden')

          // Update aria-expanded and aria-hidden attributes
          $(this).attr('aria-expanded', state)
          $('#' + $dataTarget).attr('aria-hidden', !state)
        })
      }
    })
  }
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  var toggleContent = new ShowHideContent()
  toggleContent.showHideRadioToggledContent()
  toggleContent.showHideCheckboxToggledContent()
})
