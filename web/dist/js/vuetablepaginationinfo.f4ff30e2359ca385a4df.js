/*!
 * @project        Example Project
 * @name           vuetablepaginationinfo.f4ff30e2359ca385a4df.js
 * @author         Andrew Welch
 * @build          Sun, Mar 10, 2019 4:20 AM ET
 * @release        c9879b7e19bc3a55251d0a24be90fb5b68a34dbc [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{59:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;var e={props:{css:{type:Object,default:()=>({infoClass:"float-left py-5 text-grey-lighter"})},infoTemplate:{type:String,default:()=>"Displaying {from} to {to} of {total} items"},noDataTemplate:{type:String,default:()=>""}},data:function(){return{tablePagination:null}},computed:{paginationInfo(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData(t){this.tablePagination=t},resetData(){this.tablePagination=null}}},o=i(25),l=Object(o.a)(e,void 0,void 0,!1,null,null,null);l.options.__file="src/vue/VuetablePaginationInfoMixin.vue";var s={mixins:[l.exports]},r=Object(o.a)(s,n,[],!1,null,null,null);r.options.__file="src/vue/VuetablePaginationInfo.vue";a.default=r.exports}}]);
//# sourceMappingURL=vuetablepaginationinfo.f4ff30e2359ca385a4df.js.map