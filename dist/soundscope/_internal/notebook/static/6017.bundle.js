"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6017],{36017:(e,r,t)=>{t.d(r,{CSVSearchProvider:()=>c});var i=t(11600),s=t(35312),n=t(3486);class c extends n.SearchProvider{constructor(){super(...arguments),this.isReadOnly=!0}static createNew(e,r){return new c(e)}static isApplicable(e){return e instanceof s.DocumentWidget&&e.content instanceof i.CSVViewer}clearHighlight(){return Promise.resolve()}highlightNext(e){return this.widget.content.searchService.find(this._query),Promise.resolve(void 0)}highlightPrevious(e){return this.widget.content.searchService.find(this._query,!0),Promise.resolve(void 0)}replaceCurrentMatch(e,r){return Promise.resolve(!1)}replaceAllMatches(e){return Promise.resolve(!1)}startQuery(e){return this._query=e,this.widget.content.searchService.find(e),Promise.resolve()}endQuery(){return this.widget.content.searchService.clear(),Promise.resolve()}}}}]);