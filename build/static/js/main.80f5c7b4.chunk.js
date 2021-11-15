(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(6),c=n.n(s),r=(n(14),n(9)),o=n(2),l=n.p+"static/media/logo.4e8e0a1d.svg",u=n(0);var p=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("img",{src:l,alt:"Around US logo",className:"header__logo"})})};var d=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Around The U.S."})})},j=n.p+"static/media/VectorPen.8667ac4a.svg",b=n.p+"static/media/VectorPlus.d86bb2ed.svg",m=i.a.createContext();var _=function(e){var t=Object(a.useContext)(m);return Object(u.jsxs)("div",{className:"main-content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("button",{className:"profile__avatar-container",onClick:e.onEditAvatarClick,children:[Object(u.jsx)("img",{src:t.avatar,alt:"Avatar",className:"profile__image"}),Object(u.jsx)("div",{className:"profile__avatar-overlay",children:Object(u.jsx)("img",{src:j,alt:"pen",className:"profile__avatar-pen"})})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__name-line",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfileClick,children:Object(u.jsx)("img",{src:j,alt:"pen",className:"profile__edit-pen"})})]}),Object(u.jsx)("p",{className:"profile__about",children:t.about})]}),Object(u.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlaceClick,children:Object(u.jsx)("img",{src:b,alt:"plus",className:"profile__plus"})})]}),e.children]})},h=n.p+"static/media/Trash.c4956c32.svg";var f=function(e){var t=i.a.useContext(m),n=e.ownerId===t._id,a=e.likes.some((function(e){return e._id===t._id}));return Object(u.jsxs)("div",{className:"place",children:[Object(u.jsx)("button",{type:"button",className:n?"place__delete":"place__delete_hidden",onClick:function(){e.onCardDelete(e.cardData)},children:Object(u.jsx)("img",{src:h,alt:"trash bin"})}),Object(u.jsx)("img",{className:"place__image",src:"".concat(e.link),alt:"user content cards",onClick:e.onCardClick}),Object(u.jsxs)("div",{className:"place__description",children:[Object(u.jsx)("h2",{className:"place__title",children:e.name}),Object(u.jsxs)("div",{className:"place__like-box",children:[Object(u.jsx)("button",{type:"button",className:a?"place__like_active":"place__like",onClick:function(){e.onCardLike(e.cardData)}}),Object(u.jsx)("span",{className:"place__like-counter",children:e.likesCounter})]})]})]})},O=n.p+"static/media/CloseIcon.1f0b5bb9.svg";var v=function(e){return Object(u.jsx)("div",{className:e.isOpen?"popup_active":"popup popup_type_picture",children:Object(u.jsxs)("figure",{className:"popup__pic-container",children:[Object(u.jsx)("button",{type:"button",className:"popup__closer",onClick:e.onClose,children:Object(u.jsx)("img",{src:O,alt:"Closing cross",className:"popup__x"})}),Object(u.jsx)("img",{src:e.fullViewLink,alt:"user's place",className:"popup__image"}),Object(u.jsx)("figcaption",{className:"popup__image-title",children:e.fullViewTitle})]})})},x=n(7),g=n(8),C=function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("Server returned this error: ".concat(e.status))})).catch((function(e){return console.log(e)}))},k=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(x.a)(this,e),this._baseUrl=n,this._headers=a}return Object(g.a)(e,[{key:"getInitialCards",value:function(){return C("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"getUserInfo",value:function(){return C("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editUserInfo",value:function(e){var t=e.name,n=e.about;return C("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:n})})}},{key:"uploadUserAvatar",value:function(e){return C("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"postNewCard",value:function(e){return C("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return C("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"})}},{key:"changeLikeCardStatus",value:function(e,t){return C("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:t?"PUT":"DELETE"})}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"c1d6862e-d39d-4724-bab0-a07d7562f2a3","Content-Type":"application/json"}});var N=function(e){return Object(u.jsx)("div",{className:e.isOpen?"popup_active":"popup popup_type_".concat(e.name),children:Object(u.jsxs)("div",{className:"popup__window",children:[Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsx)("button",{type:"button",className:"popup__closer",onClick:e.onClose,children:Object(u.jsx)("img",{src:O,alt:"Closing cross",className:"popup__x"})}),Object(u.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),onSubmit:e.onSubmit,children:[e.children,Object(u.jsx)("button",{type:"submit",className:"popup__submit",children:e.isSaving?"Saving...":e.submitButtonText})]})]})})};function S(e){var t=Object(a.useContext)(m),n=Object(a.useState)(""),i=Object(o.a)(n,2),s=i[0],c=i[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),p=l[0],d=l[1];return Object(a.useEffect)((function(){c(t.name),d(t.about)}),[t]),Object(u.jsxs)(N,{name:"edit",title:"Edit profile",submitButtonText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},isSaving:e.isSaving,children:[Object(u.jsx)("input",{id:"name-input",className:"popup__input popup__input_text_name",type:"text",name:"name",placeholder:"Jacques Cousteau",minLength:"2",maxLength:"40",required:!0,onChange:function(e){c(e.target.value)}}),Object(u.jsx)("span",{id:"name-input-error",className:"popup__error-message"}),Object(u.jsx)("input",{id:"profession-input",className:"popup__input popup__input_text_profession",type:"text",name:"profession",placeholder:"Explorer",minLength:"2",maxLength:"200",required:!0,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("span",{id:"profession-input-error",className:"popup__error-message"})]})}function y(e){var t=Object(a.useRef)("");return Object(u.jsxs)(N,{name:"avatar",title:"Change profile picture",submitButtonText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},isSaving:e.isSaving,children:[Object(u.jsx)("input",{ref:t,id:"image-url-input",className:"popup__input popup__input_text_link",type:"url",name:"avatar",placeholder:"https://somewebsite.com/someimage.jpg",required:!0}),Object(u.jsx)("span",{id:"image-url-input-error",className:"popup__error-message"})]})}function U(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],c=Object(a.useState)(""),r=Object(o.a)(c,2),l=r[0],p=r[1];return Object(u.jsxs)(N,{name:"add",title:"New place",submitButtonText:"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlaceSubmit({link:i,name:l})},isSaving:e.isSaving,children:[Object(u.jsx)("input",{id:"toponym-input",className:"popup__input popup__input_text_toponym",type:"text",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("span",{id:"toponym-input-error",className:"popup__error-message"}),Object(u.jsx)("input",{id:"url-input",className:"popup__input popup__input_text_link",type:"url",name:"link",placeholder:"Image URL",required:!0,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("span",{id:"url-input-error",className:"popup__error-message"})]})}var w=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),c=Object(o.a)(s,2),l=c[0],j=c[1],b=Object(a.useState)(!1),h=Object(o.a)(b,2),O=h[0],x=h[1],g=Object(a.useState)(!1),C=Object(o.a)(g,2),N=C[0],w=C[1],T=Object(a.useState)([]),L=Object(o.a)(T,2),E=L[0],P=L[1],A=Object(a.useState)({link:"",title:""}),I=Object(o.a)(A,2),D=I[0],q=I[1],B=Object(a.useState)({}),J=Object(o.a)(B,2),V=J[0],F=J[1],H=Object(a.useState)(!1),R=Object(o.a)(H,2),z=R[0],M=R[1];function G(){i(!1),j(!1),x(!1),w(!1),q({link:"",title:""})}function K(e){var t=e.likes.some((function(e){return e._id===V._id}));k.changeLikeCardStatus(e._id,!t).then((function(t){P((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))}return Object(a.useEffect)((function(){k.getUserInfo().then((function(e){F(e)}))}),[]),Object(a.useEffect)((function(){k.getInitialCards().then((function(e){var t=e.map((function(e){return{link:e.link,name:e.name,likes:e.likes,_id:e._id,ownerId:e.owner._id}}));P(t)}))}),[]),Object(u.jsxs)("div",{className:"page-container",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(m.Provider,{value:V,children:[Object(u.jsx)(_,{onEditAvatarClick:function(){x(!0)},onEditProfileClick:function(){i(!0)},onAddPlaceClick:function(){j(!0)},children:Object(u.jsx)("div",{className:"places",children:E.map((function(e){return Object(u.jsx)(f,{cardData:e,link:e.link,name:e.name,likesCounter:e.likes.length,ownerId:e.ownerId,likes:e.likes,cardId:e._id,onCardClick:function(){q({link:e.link,title:e.name}),w(!0)},onCardLike:K,onCardDelete:function(){return k.deleteCard(e._id).then((function(){P(E.filter((function(t){return t._id!==e._id})))}))}},e._id)}))})}),Object(u.jsx)(S,{isOpen:n,onClose:G,onUpdateUser:function(e){M(!0),k.editUserInfo(e).then((function(e){F(e),M(!1),G()}))},isSaving:z}),Object(u.jsx)(y,{isOpen:O,onClose:G,onUpdateAvatar:function(e){M(!0),k.uploadUserAvatar(e).then((function(e){F(e),M(!1),G()}))},isSaving:z}),Object(u.jsx)(U,{isOpen:l,onClose:G,onAddPlaceSubmit:function(e){M(!0),k.postNewCard(e).then((function(e){P([e].concat(Object(r.a)(E))),M(!1),G()}))},isSaving:z}),Object(u.jsx)(v,{isOpen:N,onClose:G,fullViewLink:D.link,fullViewTitle:D.title})]}),Object(u.jsx)(d,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),T()}},[[16,1,2]]]);
//# sourceMappingURL=main.80f5c7b4.chunk.js.map