const editor = ace.edit('editor');
// const input = ace.edit('input');
API_URL = prompt("Enter function API url")

$(function() {
  // configure ace editor
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/python");
  editor.setFontSize('14px');

  // input.setTheme("ace/theme/monokai");
  // input.getSession().setMode("ace/mode/python");
  // input.setFontSize('14px');

});

// handle form submit
$('form').on('submit', (event) => {
  event.preventDefault();
  const answer = editor.getSession().getValue();
  // const input = input.getSession().getValue();
  // const payload = { answer: answer, input: input };
  // const payload = { answer: answer };
  const payload = answer;
  grade2(payload);
});

// ajax request
function grade(payload) {
  $.ajax({
    method: 'POST',
    url: "your api",
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(payload)
  })
  .done((res) => {
    $('.answer').html(res);
  })
  .catch((err) => {
    $('.answer').html('Something went terribly wrong!');
    console.log(err);
  });
}

function grade2(payload) {
  console.log(JSON.stringify(payload))
  const response = fetch(url = API_URL, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.body)
    a = document.getElementsByClassName("answer")
    // printss = data.body.replaceAll("\n", "<br>")
    // printss = data.body.replaceAll(" ", "&nbsp;")
    a[0].innerHTML = data.body.replaceAll("\n", "<br>")
  });
}