import { Plugins } from '@capacitor/core';
const { Http } = Plugins;

const TOKEN = '';
const URL = 'https://notify-api.line.me/api/notify';

function sendLineNotify(message) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${TOKEN}`
  };
  const data = { message };
  const options = {
    method: 'POST',
    url: URL,
    headers: headers,
    data: data,
    request: {
      timeout: 10000
    }
  };
  Http.request(options)
    .then()
    .catch((err) => alert(err));
}
function areAllCheckboxesChecked() {
  let checkboxes = document.querySelectorAll('input[name="check_box"]');
  let allChecked = true;
  for(let i = 0; i < checkboxes.length; i++) {
    if(!checkboxes[i].checked) {
      allChecked = false;
      break;
    }
  }
  return allChecked;
}

function uncheckAllCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}


document.getElementById("check_button").addEventListener("click", function(){
  if (areAllCheckboxesChecked()) {
    alert("すべて確認出来ました");
    let location = prompt("どこへ行きますか？");
    if (location === null) {
      return; // キャンセルされた場合、処理を中断する
    }
    location = location.trim();
    while (!location) {
      location = prompt("もう一度入力してください。どこへ行きますか？");
      if (location === null) {
        return; // キャンセルされた場合、処理を中断する
      }
      location = location.trim();
    }
    sendLineNotify(`星野満枝さんが${location}へお出かけします`);
    uncheckAllCheckboxes();
  } else {
    alert("まだすべて確認していません");
  }
});


//星野満枝

//5月から9月ならエアコンと表示する
const month = new Date().getMonth();
if (month >= 4 && month <= 9) {
  const check_text = document.getElementById("check_text");
  check_text.textContent = "エアコン";
} else {
  const check_text = document.getElementById("check_text");
  check_text.textContent = "暖房";
}
