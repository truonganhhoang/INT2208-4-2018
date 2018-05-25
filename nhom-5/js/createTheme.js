var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');

$('.table-add').click(function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
  $TABLE.find('table').append($clone);
});

$('.table-remove').click(function () {
  $(this).parents('tr').detach();
});

$('.table-up').click(function () {
  var $row = $(this).parents('tr');
  if ($row.index() === 1) return; // Don't go above the header
  $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
  var $row = $(this).parents('tr');
  $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function () {
  var $rows = $TABLE.find('tr:not(:hidden)');
  var headers = [];
  var data = [];
  var theme = {
    word: window.document.getElementById("name").innerHTML,
    mean: ""
  };
  data.push(theme);
  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });
  
  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};
    
    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();   
    });
    
    data.push(h);
  });
  
  // Output the result
  
  var count = 0;
  for(var i = 1; i < data.length; i++){
    if(data[i].mean==(undefined||null||'') || data[i].word==(undefined||null||'')){
      count++;
      continue;
    }
  }
  if(data[0].word == ""){
    alert("Remember to fill the name of your theme.");
  }else if(data.length <=3 || (data.length>=4 && count >=3)){
    alert("At least 3 cards must be added!");
  }else{
    window.fetch("/create", {
    method: 'POST',
    body: JSON.stringify(data)
  });
  window.location.href = "/";
  }
});
$('.clickMe').click(function () {
    "use strict";
    $(this).hide();
    $('#' + $(this).attr('for'))
                    .val($(this).text())
                    .toggleClass("form-control")
                    .show()
                    .focus();
});

$('.blur').blur(function () {
    "use strict";
    $(this)
        .hide()
        .toggleClass("form-control");
    var myid = (this).id;
    $('span[for=' + myid + ']')
        .text($(this).val())
        .show();
});