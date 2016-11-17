import jQuery from 'jquery'

function init() {
  jQuery('code.script').each(function(index, element) {
    var jqElement = jQuery(element);
    var source = jqElement.data('source');
    var sourceLink = jQuery('<a>View the source</a>');
    sourceLink.attr('href', source);
    sourceLink.addClass('source-link');
    sourceLink.insertBefore(jqElement);
    jQuery.ajax({
      url: source,
      type: 'GET',
      dataType: 'text',
      success: function(response) {
        jqElement.text(response);
      },
    });
  });
}

export { init }
