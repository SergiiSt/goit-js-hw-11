import{i as a,S as d}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="43847470-26a4b647964be33653231b3f4",m="https://pixabay.com/api/",h=s=>{const e=new URLSearchParams({key:f,q:s,image_type:"all",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${e}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})},p=s=>s.map(e=>`<div class="card">
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
    </div>`).join(" "),u=document.querySelector(".search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");u.reset();function y(s){s.preventDefault();const e=s.target.elements.searchQuery.value.trim();if(c.innerHTML="",!e)return a.info({message:"The search field must not be empty",position:"topCenter",timeout:2500});l.classList.remove("is-hidden"),h(e).then(o=>{o.total===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),c.innerHTML=p(o.hits),new d(".js-gallery a",{captionsData:"alt",captionDelay:"250"})}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}u.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
