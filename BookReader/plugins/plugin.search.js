(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[73],{8011:function(e,t,r){"use strict";r(5666),r(4916),r(4765),r(9826),r(5306),r(2222),r(9601),r(4747),r(1539),r(8674),r(6992),r(8783),r(3948),r(285),r(7042),r(8309),r(1038),r(2526),r(1817),r(2165),r(4603),r(9714),r(1249);var a=r(3609);function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i,s=function(){function e(t){var r=t.br,a=t.searchCancelledCallback,n=void 0===a?function(){}:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.br=r,this.matcher=new RegExp("{{{(.+?)}}}","g"),this.matches=[],this.cacheDOMElements(),this.bindEvents(),this.cancelSearch=n}var t,r;return t=e,(r=[{key:"cacheDOMElements",value:function(){this.dom={},this.dom.toolbarSearch=this.buildToolbarSearch()}},{key:"setQuery",value:function(e){this.br.$('[name="query"]').val(e)}},{key:"emptyMatches",value:function(){this.matches=[]}},{key:"removeResultPins",value:function(){this.br.$(".BRnavpos .BRsearch").remove()}},{key:"clearSearchFieldAndResults",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.br.removeSearchResults(),this.removeResultPins(),this.emptyMatches(),this.setQuery(""),this.teardownSearchNavigation(),e&&this.br.trigger("SearchResultsCleared")}},{key:"toggleSidebar",value:function(){this.br.trigger("ToggleSearchMenu")}},{key:"renderSearchNavigation",value:function(){var e="BRsearch-navigation";a(".BRnav").before('\n      <div class="'.concat(e,'">\n        <button class="toggle-sidebar">\n          <h4>\n            <span class="icon icon-search"></span> Results\n          </h4>\n        </button>\n        <div class="pagination">\n          <button class="prev" title="Previous result"><span class="icon icon-chevron hflip"></span></button>\n          <span data-id="resultsCount">').concat(this.resultsPosition(),'</span>\n          <button class="next" title="Next result"><span class="icon icon-chevron"></button>\n        </div>\n        <button class="clear" title="Clear search results">\n          <span class="icon icon-close"></span>\n        </button>\n      </div>\n    ')),this.dom.searchNavigation=a(".".concat(e))}},{key:"resultsPosition",value:function(){var e="".concat(this.matches.length," result").concat(1===this.matches.length?"":"s");return~this.currentMatchIndex&&(e="".concat(this.currentMatchIndex+1," / ").concat(this.matches.length)),e}},{key:"bindSearchNavigationEvents",value:function(){if(this.dom.searchNavigation){var e="searchNavigation";this.dom.searchNavigation.on("click.".concat(e),".clear",this.clearSearchFieldAndResults.bind(this)).on("click.".concat(e),".prev",this.showPrevResult.bind(this)).on("click.".concat(e),".next",this.showNextResult.bind(this)).on("click.".concat(e),".toggle-sidebar",this.toggleSidebar.bind(this)).on("click.".concat(e),!1)}}},{key:"showPrevResult",value:function(){0!==this.currentMatchIndex&&(this.br.mode===this.br.constModeThumb&&this.br.switchMode(this.br.constMode1up),~this.currentMatchIndex||(this.currentMatchIndex=this.getClosestMatchIndex((function(e,t,r){return t[0]>r}))+1),this.br.$(".BRnavline .BRsearch").eq(--this.currentMatchIndex).click(),this.updateResultsPosition(),this.updateSearchNavigationButtons())}},{key:"showNextResult",value:function(){this.currentMatchIndex+1!==this.matches.length&&(this.br.mode===this.br.constModeThumb&&this.br.switchMode(this.br.constMode1up),~this.currentMatchIndex||(this.currentMatchIndex=this.getClosestMatchIndex((function(e,t,r){return e[e.length-1]>r}))-1),this.br.$(".BRnavline .BRsearch").eq(++this.currentMatchIndex).click(),this.updateResultsPosition(),this.updateSearchNavigationButtons())}},{key:"getClosestMatchIndex",value:function(e){var t=function t(r,a){if(1===r.length)return r[0];var n=r.slice(0,r.length/2),i=r.slice(r.length/2);return t(e(n,i,a)?n:i,a)}(this.matches.map((function(e){return e.par[0].page})),this.br.currentIndex()+1);return this.matches.indexOf(this.matches.find((function(e){return e.par[0].page===t})))}},{key:"updateResultsPosition",value:function(){this.dom.searchNavigation.find("[data-id=resultsCount]").text(this.resultsPosition())}},{key:"updateSearchNavigationButtons",value:function(){this.dom.searchNavigation.find(".prev").attr("disabled",!this.currentMatchIndex),this.dom.searchNavigation.find(".next").attr("disabled",this.currentMatchIndex+1===this.matches.length)}},{key:"teardownSearchNavigation",value:function(){this.dom.searchNavigation||(this.dom.searchNavigation=a(".BRsearch-navigation")),this.dom.searchNavigation.length&&(this.dom.searchNavigation.off(".searchNavigation").remove(),this.dom.searchNavigation=null,this.br.resize())}},{key:"setCurrentMatchIndex",value:function(){var e;this.br.mode!==this.br.constModeThumb?(e=this.br.mode===this.br.constMode2up?this.find2upMatchingSearchResult():this.find1upMatchingSearchResult(),this.currentMatchIndex=this.matches.indexOf(e)):this.currentMatchIndex=-1}},{key:"find1upMatchingSearchResult",value:function(){var e=this;return this.matches.find((function(t){return e.br.currentIndex()===t.par[0].page-1}))}},{key:"find2upMatchingSearchResult",value:function(){var e=this;return this.matches.find((function(t){return e.br._isIndexDisplayed(t.par[0].page-1)}))}},{key:"updateSearchNavigation",value:function(){this.matches.length&&(this.setCurrentMatchIndex(),this.updateResultsPosition(),this.updateSearchNavigationButtons())}},{key:"togglePinsFor",value:function(e){var t=e?"visible":"hidden";this.br.refs.$BRfooter.find(".BRsearch").css({visibility:t})}},{key:"buildToolbarSearch",value:function(){var e=document.createElement("span");return e.classList.add("BRtoolbarSection","BRtoolbarSectionSearch"),e.innerHTML='\n      <form class="BRbooksearch desktop">\n        <input type="search" name="query" class="BRsearchInput" value="" placeholder="Search inside"/>\n        <button type="submit" class="BRsearchSubmit">\n          <img src="'.concat(this.br.imagesBaseURL,'icon_search_button.svg" />\n        </button>\n      </form>\n    '),e}},{key:"renderPins",value:function(e){var t=this;e.forEach((function(e){var r=e.text,n=t.br.leafNumToIndex(e.par[0].page),i=t.br.getPageNum(n),s=t.br.constructor.util.cssPercentage(n,t.br.getNumLeafs()-1),o=r.replace(t.matcher,"<b>$1</b>"),c="";r.length>100&&(c=r.replace(/^(.{100}[^\s]*).*/,"$1").replace(t.matcher,"<b>$1</b>")+"..."),a("<div>").addClass("BRsearch").css({left:s}).attr("title","Search result").append('\n          <div class="BRquery">\n            <div>'.concat(c||o,"</div>\n            <div>").concat("Page"," ").concat(i,"</div>\n          </div>\n        ")).data({pageIndex:n}).appendTo(t.br.$(".BRnavline")).hover((function(e){var t=e.currentTarget,r=t.querySelector(".BRquery"),n=r.getBoundingClientRect(),i=t.getBoundingClientRect(),s=2*parseInt(getComputedStyle(r).paddingLeft);n.x-s<0&&r.style.setProperty("transform","translateX(-".concat(i.left-s,"px)")),a(".BRsearch,.BRchapter").removeClass("front"),a(e.target).addClass("front")}),(function(e){return a(e.target).removeClass("front")})).click(function(e){this.br._searchPluginGoToResult(+a(e.target).data("pageIndex")),this.br.updateSearchHilites()}.bind(t))}))}},{key:"toggleSearchPending",value:function(e){var t=this;e?this.br.showProgressPopup("Search results will appear below...",(function(){return t.progressPopupClosed()})):this.br.removeProgressPopup()}},{key:"progressPopupClosed",value:function(){this.toggleSearchPending(),this.cancelSearch()}},{key:"renderErrorModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t="".concat(e?"":"The text may still be processing. ","Please try again.");this.renderModalMessage("\n      Sorry, there was an error with your search.\n      <br />\n      ".concat(t,"\n    ")),this.delayModalRemovalFor(4e3)}},{key:"renderBookNotIndexedModal",value:function(){this.renderModalMessage("\n      <p>\n         This book hasn't been indexed for searching yet.\n         We've just started indexing it, so search should be available soon.\n         <br />\n         Please try again later. Thanks!\n      </p>\n    "),this.delayModalRemovalFor(5e3)}},{key:"renderResultsEmptyModal",value:function(){this.renderModalMessage("No matches were found."),this.delayModalRemovalFor(2e3)}},{key:"renderModalMessage",value:function(e){var t=document.createElement("div");t.classList.add("BRprogresspopup","search_modal"),t.innerHTML=e,document.querySelector(this.br.el).append(t)}},{key:"delayModalRemovalFor",value:function(e){setTimeout(this.br.removeProgressPopup.bind(this.br),e)}},{key:"submitHandler",value:function(e){e.preventDefault();var t=e.target.querySelector('[name="query"]').value;return!!t.length&&(this.br.search(t),this.emptyMatches(),this.toggleSearchPending(!0),!1)}},{key:"handleSearchCallback",value:function(e,t){var r=this,n=t.results,i=t.options;this.matches=n.matches,this.setCurrentMatchIndex(),this.teardownSearchNavigation(),this.renderSearchNavigation(),this.bindSearchNavigationEvents(),this.renderPins(n.matches),this.toggleSearchPending(!1),i.goToFirstResult?a(document).one("BookReader:pageChanged",(function(){r.br.resize()})):this.br.resize()}},{key:"handleNavToggledCallback",value:function(e){var t=this.br.navigationIsVisible();this.togglePinsFor(t)}},{key:"handleSearchStarted",value:function(){this.emptyMatches(),this.br.removeSearchHilites(),this.removeResultPins(),this.toggleSearchPending(!0),this.teardownSearchNavigation(),this.setQuery(this.br.searchTerm)}},{key:"handleSearchCallbackError",value:function(){var e,t,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.toggleSearchPending(!1);var n=null==a||null===(e=a.detail)||void 0===e||null===(t=e.props)||void 0===t||null===(r=t.results)||void 0===r?void 0:r.indexed;this.renderErrorModal(n)}},{key:"handleSearchCallbackBookNotIndexed",value:function(){this.toggleSearchPending(!1),this.renderBookNotIndexedModal()}},{key:"handleSearchCallbackEmpty",value:function(){this.toggleSearchPending(!1),this.renderResultsEmptyModal()}},{key:"bindEvents",value:function(){var e="BookReader:";window.addEventListener("".concat(e,"SearchCallbackError"),this.handleSearchCallbackError.bind(this)),a(document).on("".concat(e,"SearchCallback"),this.handleSearchCallback.bind(this)).on("".concat(e,"navToggled"),this.handleNavToggledCallback.bind(this)).on("".concat(e,"SearchStarted"),this.handleSearchStarted.bind(this)).on("".concat(e,"SearchCallbackBookNotIndexed"),this.handleSearchCallbackBookNotIndexed.bind(this)).on("".concat(e,"SearchCallbackEmpty"),this.handleSearchCallbackEmpty.bind(this)).on("".concat(e,"pageChanged"),this.updateSearchNavigation.bind(this)),this.dom.toolbarSearch.querySelector("form").addEventListener("submit",this.submitHandler.bind(this))}}])&&n(t.prototype,r),e}(),o=r(3609),c=r(3609);function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function u(e,t,r,a,n,i,s){try{var o=e[i](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(a,n)}o.extend(BookReader.defaultOptions,{server:"ia600609.us.archive.org",bookId:"",subPrefix:"",bookPath:"",enableSearch:!0,searchInsideUrl:"/fulltext/inside.php",initialSearchTerm:null}),BookReader.prototype.setup=(i=BookReader.prototype.setup,function(e){var t=this;i.call(this,e),this.searchTerm="",this.searchResults=null,this.searchInsideUrl=e.searchInsideUrl,this.enableSearch=e.enableSearch,this.bookId=e.bookId,this.server=e.server,this.subPrefix=e.subPrefix,this.bookPath=e.bookPath,this.searchXHR=null,this._cancelSearch.bind(this),this.cancelSearchRequest.bind(this),this.searchView||(this.searchView=new s({br:this,searchCancelledCallback:function(){t._cancelSearch(),t.trigger("SearchCanceled",{term:t.searchTerm,instance:t})}}))}),BookReader.prototype.init=function(e){return function(){e.call(this),this.options.enableSearch&&this.options.initialSearchTerm&&this.search(this.options.initialSearchTerm,{goToFirstResult:this.options.goToFirstResult,suppressFragmentChange:!1})}}(BookReader.prototype.init),BookReader.prototype.buildToolbarElement=function(e){return function(){var t=e.call(this);if(this.enableSearch)return this.searchView.dom.toolbarSearch&&t.find(".BRtoolbarSectionInfo").after(this.searchView.dom.toolbarSearch),t}}(BookReader.prototype.buildToolbarElement),BookReader.prototype.search=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a={goToFirstResult:!1,disablePopup:!1,suppressFragmentChange:!1,error:null,success:null},n=o.extend({},a,r);this.suppressFragmentChange=n.suppressFragmentChange,this.searchTerm=t.replace(/\//g," "),n.suppressFragmentChange||this.trigger(BookReader.eventNames.fragmentChange);var i=this.server.replace(/:.+/,""),s="https://".concat(i).concat(this.searchInsideUrl,"?"),h=this.bookPath,l="/".concat(this.subPrefix);this.bookPath.length-this.bookPath.lastIndexOf(l)==l.length&&(h=this.bookPath.substr(0,this.bookPath.length-l.length));var u={item_id:this.bookId,doc:this.subPrefix,path:h,q:t},d=c.param(u).replace(/%2F/g,"/"),p="".concat(s).concat(d),g=function(){e.searchXHR=null,window.BRSearchInProgress=function(){}},v=function(t){if(e.searchXHR){var r=t.error||!t.matches.length,a="function"==typeof n.error,i="function"==typeof n.success;r?a?n.error.call(e,t,n):e.BRSearchCallbackError(t,n):i?n.success.call(e,t,n):e.BRSearchCallback(t,n),g()}},f=function(t){e.searchXHR=t,window.BRSearchInProgress=v};return this.trigger("SearchStarted",{term:this.searchTerm,instance:this}),c.ajax({url:p,dataType:"jsonp",beforeSend:f,jsonpCallback:"BRSearchInProgress"}).then(v)},BookReader.prototype._cancelSearch=function(){var e;null===(e=this.searchXHR)||void 0===e||e.abort(),this.searchView.clearSearchFieldAndResults(!1),this.searchTerm="",this.searchXHR=null,this.searchResults=[],window.BRSearchInProgress=function(){}},BookReader.prototype.cancelSearchRequest=function(){null!==this.searchXHR&&(this._cancelSearch(),this.searchView.toggleSearchPending(),this.trigger("SearchCanceled",{term:this.searchTerm,instance:this}))},BookReader.prototype.BRSearchCallback=function(e,t){if(this.searchResults=e||[],this.updateSearchHilites(),this.removeProgressPopup(),t.goToFirstResult){var r=this._models.book.leafNumToIndex(e.matches[0].par[0].page);this._searchPluginGoToResult(r)}this.trigger("SearchCallback",{results:e,options:t,instance:this})},BookReader.prototype.BRSearchCallbackError=function(e){this._BRSearchCallbackError(e)},BookReader.prototype._BRSearchCallbackError=function(e){this.searchResults=e;var t={term:this.searchTerm,instance:this};if(e.error){var r=Object.assign({},t,{results:e});this.trigger("SearchCallbackError",r)}else if(0==e.matches.length){if(!1===e.indexed)return void this.trigger("SearchCallbackBookNotIndexed",t);this.trigger("SearchCallbackEmpty",t)}},BookReader.prototype.updateSearchHilites=function(){this.constMode2up!=this.mode?this.updateSearchHilites1UP():this.updateSearchHilites2UP()},BookReader.prototype.updateSearchHilites1UP=function(){var e,t=this,r=this.searchResults;null!=r&&(null===(e=r.matches)||void 0===e||e.forEach((function(e){e.par[0].boxes.forEach((function(e){var r=t.leafNumToIndex(e.page);if(o.inArray(r,t.displayedIndices)>=0){e.div||(e.div=document.createElement("div"),c(e.div).prop("className","BookReaderSearchHilite").appendTo(t.$(".pagediv".concat(r))));var a=t._models.book.getPage(r),n={width:t._modes.mode1Up.physicalInchesToDisplayPixels((e.r-e.l)/a.ppi),height:t._modes.mode1Up.physicalInchesToDisplayPixels((e.b-e.t)/a.ppi),left:t._modes.mode1Up.physicalInchesToDisplayPixels(e.l/a.ppi),top:t._modes.mode1Up.physicalInchesToDisplayPixels(e.t/a.ppi)};c(e.div).css(n)}else e.div&&(c(e.div).remove(),e.div=null)}))})))},BookReader.prototype.updateSearchHilites2UP=function(){var e=this,t=this.searchResults;if(null!==t){var r=t.matches;(void 0===r?[]:r).forEach((function(t){t.par[0].boxes.forEach((function(r){var a=e.leafNumToIndex(t.par[0].page),n=o.inArray(a,e.displayedIndices)>=0,i=e._models.book.getPage(a).isViewable;n&&i?(r.div||(r.div=document.createElement("div"),c(r.div).addClass("BookReaderSearchHilite").appendTo(e.refs.$brTwoPageView)),e.setHilightCss2UP(r.div,a,r.l,r.r,r.t,r.b)):r.div&&(c(r.div).remove(),r.div=null)}))}))}},BookReader.prototype.removeSearchHilites=function(){var e=this.searchResults;null!=e&&e.matches&&e.matches.forEach((function(e){e.par[0].boxes.forEach((function(e){null!=e.div&&(c(e.div).remove(),e.div=null)}))}))},BookReader.prototype._searchPluginGoToResult=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,a,n,i,s,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this._models.book,a=r.getPage(t),n=!1,a.isViewable){e.next=10;break}return e.next=6,fetch("/services/bookreader/request_page?"+new URLSearchParams({id:this.options.bookId,subprefix:this.options.subPrefix,leafNum:a.leafNum})).then((function(e){return e.json()}));case 6:i=e.sent,s=h(i.value);try{for(s.s();!(o=s.n()).done;)c=o.value,r.getPage(r.leafNumToIndex(c)).makeViewable()}catch(e){s.e(e)}finally{s.f()}i.value.length||(r.getPage(t).makeViewable(),n=!0);case 10:this.suppressFragmentChange=!1,this.jumpToIndex(t),n&&r.getPage(t).makeViewable(!1);case 13:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function s(e){u(i,a,n,s,o,"next",e)}function o(e){u(i,a,n,s,o,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}(),BookReader.prototype.removeSearchResults=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.removeSearchHilites(),this.searchTerm=null,this.searchResults=null,e||this.trigger(BookReader.eventNames.fragmentChange)},BookReader.prototype.searchHighlightVisible=function(){var e=this,t=this.searchResults,r=[];if(null==t)return!1;if(this.constMode2up==this.mode)r=[this.twoPage.currentIndexL,this.twoPage.currentIndexR];else{if(this.constMode1up!=this.mode)return!1;r=[this.currentIndex()]}return t.matches.some((function(t){return t.par[0].boxes.some((function(t){var a=e.leafNumToIndex(t.page);if(o.inArray(a,r)>=0)return!0}))})),!1}},9587:function(e,t,r){var a=r(111),n=r(7674);e.exports=function(e,t,r){var i,s;return n&&"function"==typeof(i=t.constructor)&&i!==r&&a(s=i.prototype)&&s!==r.prototype&&n(e,s),e}},9601:function(e,t,r){var a=r(2109),n=r(1574);a({target:"Object",stat:!0,forced:Object.assign!==n},{assign:n})},4603:function(e,t,r){var a=r(9781),n=r(7854),i=r(4705),s=r(9587),o=r(3070).f,c=r(8006).f,h=r(7850),l=r(7066),u=r(2999),d=r(1320),p=r(7293),g=r(9909).enforce,v=r(6340),f=r(5112)("match"),b=n.RegExp,m=b.prototype,y=/a/g,k=/a/g,S=new b(y)!==y,R=u.UNSUPPORTED_Y;if(a&&i("RegExp",!S||R||p((function(){return k[f]=!1,b(y)!=y||b(k)==k||"/a/i"!=b(y,"i")})))){for(var x=function(e,t){var r,a=this instanceof x,n=h(e),i=void 0===t;if(!a&&n&&e.constructor===x&&i)return e;S?n&&!i&&(e=e.source):e instanceof x&&(i&&(t=l.call(e)),e=e.source),R&&(r=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=s(S?new b(e,t):b(e,t),a?this:m,x);return R&&r&&(g(o).sticky=!0),o},P=function(e){e in x||o(x,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},B=c(b),I=0;B.length>I;)P(B[I++]);m.constructor=x,x.prototype=m,d(n,"RegExp",x)}v("RegExp")}},function(e){"use strict";e(e.s=8011)}]);
//# sourceMappingURL=plugin.search.js.map