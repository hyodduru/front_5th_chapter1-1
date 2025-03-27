(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const p=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,i={user:null,listeners:new Set,init(){const e=localStorage.getItem("user");e&&(this.user=JSON.parse(e))},setUser(e){this.user=e,localStorage.setItem("user",JSON.stringify(e)),this.notify()},logout(){this.user=null,localStorage.removeItem("user"),this.notify()},getUser(){return this.user},isLoggedIn(){return!!this.user},subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)},notify(){for(const e of this.listeners)e(this.user)}};function g(e,t){const s=e.querySelector("#login-form");s&&s.addEventListener("submit",o=>{o.preventDefault();const r=s.querySelector("input[type='text']").value;if(!r)return;const n={username:r,email:"",bio:""};i.setUser(n),t.navigateTo("/")})}function h(e){document.addEventListener("click",t=>{if(t.target.tagName==="A"){const s=t.target.getAttribute("href");s&&s.startsWith("/")&&(t.preventDefault(),t.target.id==="logout"&&i.logout(),e.navigateTo(s))}})}function u(e="/"){const t=i.isLoggedIn(),s=o=>e===o?"text-blue-600 font-bold":"text-gray-600";return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${s("/")}">홈</a></li>
          <li><a href="/profile" class=${s("/profile")}>프로필</a></li>
          <li>
            ${t?'<a id="logout" href="/login" class="text-gray-600">로그아웃</a>':'<a href="/login" class="text-gray-600">로그인</a>'}
          </li>
        </ul>
      </nav>
    `}function c(){return`
        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
      `}const v=e=>`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u(e)}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                <input type="text" id="username" name="username" value="${i.getUser().username}" class="w-full p-2 border rounded" />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                <input type="email" id="email" name="email" value="${i.getUser().email}" class="w-full p-2 border rounded" />
              </div>
              <div class="mb-6">
                <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${i.getUser().bio}</textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
        ${c()}
      </div>
    </div>
  </div>
`;function x(e){const t=e.querySelector("#profile-form");t&&t.addEventListener("submit",s=>{s.preventDefault();const o=t.querySelector("#username").value,r=t.querySelector("#email").value,n=t.querySelector("#bio").value;if(!o)return;const l={username:o,email:r,bio:n};i.setUser(l),alert("프로필이 업데이트되었습니다.")})}const y=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${u()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${["홍길동|5분 전|오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!","김철수|15분 전|새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!","이영희|30분 전|오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?","박민수|1시간 전|주말에 등산 가실 분 계신가요? 함께 가요!","정수연|2시간 전|새로 나온 영화 재미있대요. 같이 보러 갈 사람?"].map(e=>{const[t,s,o]=e.split("|");return`
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">${t}</p>
                  <p class="text-sm text-gray-500">${s}</p>
                </div>
              </div>
              <p>${o}</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          `}).join("")}
        </div>
      </main>
      ${c()}
    </div>
  </div>
`,w=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,L=[{path:"/",render:e=>{e.innerHTML=y()}},{path:"/login",guard:()=>!i.isLoggedIn(),redirect:"/",render:(e,t)=>{e.innerHTML=p(),g(e,t)}},{path:"/profile",guard:()=>i.isLoggedIn(),redirect:"/login",render:e=>{e.innerHTML=v("/profile"),x(e)}},{path:"404",render:e=>{e.innerHTML=w()}}];function S(e){L.forEach(({path:t,guard:s,redirect:o,render:r})=>{e.addRoute(t,n=>{if(s&&!s()){e.navigateTo(o);return}r(n,e)})})}function $(e,{isHashMode:t=!1}={}){const s={};let o="";function r(){return t?window.location.hash.replace(/^#/,"")||"/":window.location.pathname||"/"}function n(a){const d=s[a];d?d(e):s[404]&&s[404](e)}function l(){o=r(),n(o)}function f(a){t?window.location.hash=a:(history.pushState({},"",a),l())}function m(a,d){s[a]=d}function b(){o=r(),n(o),t&&window.addEventListener("hashchange",l),window.addEventListener("popstate",l)}return{addRoute:m,navigateTo:f,start:b,getCurrentPath:r}}function E(e=!1){const t=document.getElementById("root");if(!t)return;const s=$(t,{isHashMode:e});i.init(),i.subscribe(()=>{s.start()}),S(s),h(s),s.start()}E();
