document.getElementById('submitButton').addEventListener('click', function() {
  const selectedClass = document.getElementById('classSelect').value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: clickElements,
      args: [selectedClass]
    });
  });
});

function clickElements(className) {
  [...document.getElementsByClassName(className)].forEach(el => el.click());
}