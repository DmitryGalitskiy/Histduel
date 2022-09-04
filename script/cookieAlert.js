'use strict';
let cookieCheck = localStorage.getItem ('notificationSaved') || "disable"; // согласие использования метрики

checkCookieNotification (); // проверка согласия

// упрощение document.getElementById
function get(item){
    return document.getElementById(item);
  }

if (cookieCheck == "disable"){
  get("more").onclick = function () {
    get("more").innerHTML = `<p>Этот сайт использует сервис веб-аналитики Яндекс Метрика, 
    предоставляемый компанией ООО «ЯНДЕКС», 119021, Россия, Москва, ул. Л. Толстого, 16 (далее&nbsp;— Яндекс).</p>
    <p>Сервис Яндекс Метрика использует технологию “cookie”&nbsp;— небольшие текстовые файлы, размещаемые 
    на компьютере пользователей с целью анализа их пользовательской активности.</p>
    <p>Собранная при помощи cookie информация не может идентифицировать вас, однако может помочь нам 
   улучшить работу нашего сайта. Информация об использовании вами данного сайта, собранная 
    при помощи cookie, будет передаваться Яндексу и храниться на сервере Яндекса в ЕС и Российской Федерации. 
    Яндекс будет обрабатывать эту информацию для оценки использования вами сайта, составления для нас отчетов 
    о деятельности нашего сайта, и предоставления других услуг. Яндекс обрабатывает эту информацию в порядке, 
    установленном в условиях использования сервиса Яндекс Метрика.</p>
    <p>Вы можете отказаться от использования cookies, выбрав соответствующие настройки в браузере. Также вы можете 
    использовать инструмент&nbsp;— <a href="https://yandex.ru/support/metrika/general/opt-out.html" target="_blank">
    https://yandex.ru/support/metrika/general/opt-out.html</a> Однако это может 
    повлиять на работу некоторых функций сайта. Используя этот сайт, вы соглашаетесь на обработку данных 
    о вас Яндексом в порядке и целях, указанных выше.</p>`;
    get("more").style.textDecoration = 'none';
    get("more").style.cursor = 'default';
  };
  
  get("cookieButtonAgree").onclick = function () {
    cookieCheck = "enable";
    localStorage.setItem('notificationSaved', 'enable');
    checkCookieNotification ();
  };
}
  
  function checkCookieNotification (){
    if (cookieCheck == "enable") {
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments);};
      var z = null;m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   
      ym(90031374, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true,
           webvisor:true
      });
      get("cookieNotification").remove();
    }
  }