import"./assets/vendor-86291ea8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c="43847470-26a4b647964be33653231b3f4",u="https://pixabay.com/api/",a=o=>{const t=new URLSearchParams({key:c,q:o,image_type:"all",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},d=o=>o.map(t=>`<div class="card">
      <img
        src='${t.previewURL}'
        alt="book"
        width="360"
        height="200"
      />
      <ul class="card-list">
        <ul>
          Likes
          <li>'${t.likes}'</li>
        </ul>
        <ul>
          Views
          <li>'${t.views}'</li>
        </ul>
        <ul>
          Comments
          <li>'${t.comments}'</li>
        </ul>
        <ul>
          Downloads
          <li>'${t.downloads}'</li>
        </ul>
      </ul>
    </div>`).join(" "),n=document.querySelector(".search-form"),f=document.querySelector(".js-gallery");n.reset();function m(o){o.preventDefault();const t=o.target.elements.searchQuery.value.trim();console.log(t),n.reset(),a(t).then(s=>{f.innerHTML=d(s.hits)})}n.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
