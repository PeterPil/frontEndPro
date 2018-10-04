// 1) Обертка над addEventListener(с возможностью проверки target 'а)
//     2) Функция для получения нужного атрибута(attribuets)
//

let getNoteAtribute = function (e, cb) {
  let btns = document.querySelectorAll(".notes__item button");
  for (let val of btns) {
    if (val.getAttribute("data-id") === e.target.getAttribute("data-id")) {

      cb(parseInt(val.getAttribute("data-id")));
    }
  }
};
