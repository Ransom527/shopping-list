//begin

var state = {
	items: []
};

//listener
$('#shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem($('#shopping-list-entry').val());
    renderList();
});


//Store state in DOM
function addItem(text) {
  var item = {name : text, checked : false};
  state.items.push(item);
}


function removeItem(text) {
  for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].name === text.trim()) {
      state.items.splice(i, 1);
      break;
    }
  }
}


function toggleItem(text) {
  for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].name === text.trim()) {
      state.items[i].checked = !state.items[i].checked;
      break;
    }
  }
}


function renderList(){
  $('.shopping-list').empty();
  for (var i = 0; i < state.items.length; i++) {
  $('.shopping-list').append(
  '<li>' +
    '<span class="shopping-item ' + (state.items[i].checked ? 'shopping-item__checked' : '') + ' "> '+ state.items[i].name +' </span> ' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
    );
  }


$('.shopping-item-delete').click(function(event) {
    var item = event.currentTarget.closest("li");
    item = $(item).find('.shopping-item').text();
    removeItem(item);
    renderList();
});


$('.shopping-item-toggle').click(function(event) {
    var item = event.currentTarget.closest("li");
    item = $(item).find('.shopping-item').text();
    toggleItem(item);
    renderList();
});

