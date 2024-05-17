import{i as a,S as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const u="43847470-26a4b647964be33653231b3f4",d="https://pixabay.com/api/",f=s=>{const e=new URLSearchParams({key:u,q:s,image_type:"all",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${e}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},h=s=>s.map(e=>`<div class="card">
        <a href='${e.largeImageURL}'><img
        src='${e.webformatURL}'
        alt= '${e.tags}'
        width="360"
        height="152"
      /></a>
      <div>
      <ul class="card-list">
        <li>
          Likes
          ${e.likes}
        </li>
        <li>
          Views
          ${e.views}
        </li>
        <li>
          Comments
        ${e.comments}
        </li>
        <li>
          Downloads
        ${e.downloads}
        </li>
      </ul>
      </div>
    </div>`).join(" "),n=document.querySelector(".search-form"),m=document.querySelector(".js-gallery");n.reset();function y(s){s.preventDefault();const e=s.target.elements.searchQuery.value.trim();console.log(e),n.reset(),f(e).then(r=>{console.log(r),r.total===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),m.innerHTML=h(r.hits),new c(".js-gallery a",{captionsData:"alt",captionDelay:"250"})}).catch(r=>console.log(r)).finally(()=>{s.target.reset(),loaderEl.classList.add("is-hidden")})}n.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
