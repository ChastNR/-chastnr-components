import{jsx,jsxs,Fragment}from"react/jsx-runtime";import*as React from"react";import{memo,useState,forwardRef,createContext,useCallback,useContext,useRef}from"react";import{Link}from"react-router-dom";var _path$3,__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function __rest(e,t){var n={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function __spreadArray(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||((r=r||Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(r||t)}function toVal(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=toVal(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function classNames(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=toVal(e))&&(r&&(r+=" "),r+=t);return r}function _extends$4(){return(_extends$4=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function SvgArrow(e){return React.createElement("svg",_extends$4({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),_path$3=_path$3||React.createElement("path",{d:"M7.707 10.293a1 1 0 00-1.414 1.414l4.294 4.294a1.995 1.995 0 002.826 0l4.294-4.294a1 1 0 00-1.414-1.414L12 14.586l-4.293-4.293z",fill:"currentColor"}))}var _path$2,Arrow=memo(function(e){e=e.direction,e=classNames("arrow",{arrow__top:"top"===e,arrow__right:"right"===e,arrow__left:"left"===e});return jsx("div",__assign({className:e},{children:jsx(SvgArrow,{},void 0)}),void 0)});function _extends$3(){return(_extends$3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function SvgCalendar(e){return React.createElement("svg",_extends$3({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),_path$2=_path$2||React.createElement("path",{d:"M19 10H5v8a1 1 0 001 1h12a1 1 0 001-1v-8zm-3-5V4a1 1 0 012 0v1a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3V4a1 1 0 112 0v1h8zm-9 7h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm0 3h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H7v-2z",fill:"currentColor"}))}var _circle,Calendar=memo(function(){return jsx("div",__assign({className:"cldr__icon"},{children:jsx("span",{children:jsx("span",{children:jsx("span",{children:jsx(SvgCalendar,{},void 0)},void 0)},void 0)},void 0)}),void 0)}),createError=function(e){var t=e.validate,n=e.startValidate,r=void 0!==n&&n,i=e.requiredMessage,s=e.errorMessage,n=e.value,e=e.regExp;return t||r?i&&!n?i:e&&n&&"string"==typeof n&&!e.test(n)||r?s:null:null},mouseDownPrevent=function(e){e.preventDefault(),e.stopPropagation()};function _extends$2(){return(_extends$2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function SvgCircle(e){return React.createElement("svg",_extends$2({className:"circle_svg__spinner",viewBox:"0 0 50 50"},e),_circle=_circle||React.createElement("circle",{className:"circle_svg__path",cx:25,cy:25,r:20,fill:"none"}))}var _path$1,Ring=function(e){var t=e.color,t=void 0===t?"#1771e6":t,e=e.size,e=classNames("ring",{ring__small:"small"===(void 0===e?"small":e)});return jsx("div",__assign({className:e},{children:jsx(SvgCircle,{stroke:t},void 0)}),void 0)};function _extends$1(){return(_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function SvgTick(e){return React.createElement("svg",_extends$1({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),_path$1=_path$1||React.createElement("path",{d:"M16.293 8.293l-6.294 6.294c.001-.001-2.292-2.294-2.292-2.294a1 1 0 00-1.414 1.414l2.294 2.294c.78.78 2.05.777 2.826 0l6.294-6.294a1 1 0 10-1.414-1.414z",fill:"currentColor"}))}var _path,Tick=function(){return jsx("span",__assign({className:"tick"},{children:jsx(SvgTick,{},void 0)}),void 0)},Button=function(e){var t=e.buttonStyle,n=e.className,r=e.children,i=e.disabled,s=e.to,a=e.type,o=void 0===a?"button":a,a=e.isLoading,e=e.onClick,t=classNames("btn",n,{btn__link:"link"===t,btn__icon:"icon"===t,btn__outline:"outline"===t}),r=jsx("button",__assign({className:t,disabled:i,onClick:e,type:o},{children:jsx("div",__assign({className:"btn__txt__cntr",tabIndex:-1},{children:jsx("div",__assign({className:"btn__txt__cntr__txt"},{children:a?jsx(Ring,{},void 0):r}),void 0)}),void 0)}),void 0);return s?jsx(Link,__assign({tabIndex:-1,to:s},{children:r}),void 0):r},Card=function(e){var t=e.animate,n=void 0===t||t,r=e.size,i=e.imgSrc,s=e.buttonText,t=e.children,e=e.onClick,r=classNames("cd",{size:void 0===r?"medium":r}),n=classNames("cd__box",{animate:n});return jsx("div",__assign({className:r},{children:jsx("div",{children:jsx("div",__assign({className:n},{children:jsxs("div",{children:[jsx("div",__assign({className:"cd__pctr"},{children:jsx("img",{alt:"alt",src:i},void 0)}),void 0),jsxs("div",__assign({className:"cd__cnt"},{children:[jsx("div",__assign({className:"cd__stn"},{children:t}),void 0),jsx("div",__assign({className:"cd__stn"},{children:jsx(Button,__assign({onClick:e},{children:s}),void 0)}),void 0)]}),void 0)]},void 0)}),void 0)},void 0)}),void 0)},CardsContainer=function(e){e=e.children;return jsx("div",__assign({className:"cds__cnt"},{children:e}),void 0)};function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function SvgCheckbox(e){return React.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),_path=_path||React.createElement("path",{d:"M16.293 8.293l-6.294 6.294c.001-.001-2.292-2.294-2.292-2.294a1 1 0 00-1.414 1.414l2.294 2.294c.78.78 2.05.777 2.826 0l6.294-6.294a1 1 0 10-1.414-1.414z",fill:"currentColor"}))}var Checkbox=function(e){var t=e.checked,n=e.disabled,e=e.onChange,e=void 0===e?function(){}:e;return jsxs("div",__assign({className:"cb"},{children:[jsx("input",{checked:t,className:"cb__input",disabled:n,onChange:e,type:"checkbox"},void 0),jsx("span",{children:jsx("span",{children:jsx("span",{children:jsx(SvgCheckbox,{},void 0)},void 0)},void 0)},void 0)]}),void 0)},commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},dayjs_min={exports:{}};dayjs_min.exports=function(){var l=1e3,d=6e4,u=36e5,c="millisecond",h="second",_="minute",f="hour",g="day",m="week",x="month",v="quarter",p="year",j="date",b="Invalid Date",a=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,e={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},s=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},t={s:s,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+s(r,2,"0")+":"+s(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,x),s=n-i<0,a=t.clone().add(r+(s?-1:1),x);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:x,y:p,w:m,d:g,D:j,h:f,m:_,s:h,ms:c,Q:v}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},o="en",w={};w[o]=e;var r=function(e){return e instanceof M},i=function(e,t,n){var r;if(!e)return o;if("string"==typeof e)w[e]&&(r=e),t&&(w[e]=t,r=e);else{var i=e.name;w[i]=e,r=i}return!n&&r&&(o=r),r||!n&&o},D=function(e,t){if(r(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},S=t;S.l=i,S.i=r,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function e(e){this.$L=i(e.locale,null,!0),this.parse(e)}var t=e.prototype;return t.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(a);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return S},t.isValid=function(){return!(this.$d.toString()===b)},t.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},t.isAfter=function(e,t){return D(e)<this.startOf(t)},t.isBefore=function(e,t){return this.endOf(t)<D(e)},t.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,t){var r=this,i=!!S.u(t)||t,n=S.p(e),s=function(e,t){var n=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return i?n:n.endOf(g)},a=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},o=this.$W,c=this.$M,l=this.$D,d="set"+(this.$u?"UTC":"");switch(n){case p:return i?s(1,0):s(31,11);case x:return i?s(1,c):s(0,c+1);case m:var u=this.$locale().weekStart||0,v=(o<u?o+7:o)-u;return s(i?l-v:l+(6-v),c);case g:case j:return a(d+"Hours",0);case f:return a(d+"Minutes",1);case _:return a(d+"Seconds",2);case h:return a(d+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,t){var n,r=S.p(e),i="set"+(this.$u?"UTC":""),s=(n={},n[g]=i+"Date",n[j]=i+"Date",n[x]=i+"Month",n[p]=i+"FullYear",n[f]=i+"Hours",n[_]=i+"Minutes",n[h]=i+"Seconds",n[c]=i+"Milliseconds",n)[r],a=r===g?this.$D+(t-this.$W):t;if(r===x||r===p){var o=this.clone().set(j,1);o.$d[s](a),o.init(),this.$d=o.set(j,Math.min(this.$D,o.daysInMonth())).$d}else s&&this.$d[s](a);return this.init(),this},t.set=function(e,t){return this.clone().$set(e,t)},t.get=function(e){return this[S.p(e)]()},t.add=function(n,e){var t,r=this;n=Number(n);var i=S.p(e),s=function(e){var t=D(r);return S.w(t.date(t.date()+Math.round(e*n)),r)};if(i===x)return this.set(x,this.$M+n);if(i===p)return this.set(p,this.$y+n);if(i===g)return s(1);if(i===m)return s(7);var a=(t={},t[_]=d,t[f]=u,t[h]=l,t)[i]||1,o=this.$d.getTime()+n*a;return S.w(o,this)},t.subtract=function(e,t){return this.add(-1*e,t)},t.format=function(e){var i=this;if(!this.isValid())return b;var s=e||"YYYY-MM-DDTHH:mm:ssZ",n=S.z(this),t=this.$locale(),r=this.$H,a=this.$m,o=this.$M,c=t.weekdays,l=t.months,d=function(e,t,n,r){return e&&(e[t]||e(i,s))||n[t].substr(0,r)},u=function(e){return S.s(r%12||12,e,"0")},v=t.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:d(t.monthsShort,o,l,3),MMMM:d(l,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:d(t.weekdaysMin,this.$W,c,2),ddd:d(t.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:S.s(r,2,"0"),h:u(1),hh:u(2),a:v(r,a,!0),A:v(r,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:n};return s.replace(y,function(e,t){return t||h[e]||n.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,t,n){var r,i=S.p(t),s=D(e),a=(s.utcOffset()-this.utcOffset())*d,o=this-s,c=S.m(this,s);return c=(r={},r[p]=c/12,r[x]=c,r[v]=c/3,r[m]=(o-a)/6048e5,r[g]=(o-a)/864e5,r[f]=o/u,r[_]=o/d,r[h]=o/l,r)[i]||o,n?c:S.a(c)},t.daysInMonth=function(){return this.endOf(x).$D},t.$locale=function(){return w[this.$L]},t.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=i(e,t,!0);return r&&(n.$L=r),n},t.clone=function(){return S.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},e}(),n=M.prototype;return D.prototype=n,[["$ms",c],["$s",h],["$m",_],["$H",f],["$W",g],["$M",x],["$y",p],["$D",j]].forEach(function(t){n[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),D.extend=function(e,t){return e.$i||(e(t,M,D),e.$i=!0),D},D.locale=i,D.isDayjs=r,D.unix=function(e){return D(1e3*e)},D.en=w[o],D.Ls=w,D.p={},D}();var dayjs=dayjs_min.exports,Error$1=function(e){var t=e.children,n=useState(0),e=n[0],r=n[1],n=classNames("er__cntr",{error:0!==e});return jsx("div",__assign({className:n,ref:function(e){return e&&r(t?e.scrollHeight:0)},style:{height:e}},{children:jsx("div",{children:t},void 0)}),void 0)},Control=forwardRef(function(e,t){var n=e.children,r=e.className,i=e.content,s=e.disabled,a=e.error,o=e.hasValue,c=e.label,l=e.name,d=e.onBlur,u=e.onFocus,o=classNames("ctrl__cntr",r,{required:e.required,disabled:s,error:a,hasValue:o});return jsxs("div",__assign({className:"ctrl"},{children:[jsxs("div",__assign({className:o,onBlur:d,onFocus:u,ref:t,role:"textbox",tabIndex:0},{children:[jsx("label",__assign({className:"ctrl__lb",htmlFor:l},{children:c}),void 0),n,i&&jsx("div",__assign({className:"ctrl__cnt"},{children:i}),void 0)]}),void 0),jsx(Error$1,{children:a},void 0)]}),void 0)}),DAYS=["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],MONTHS=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],CALENDAR_WEEKS=6,zeroPad=function(e,t){return(""+e).padStart(t,"0")},THIS_YEAR=+(new Date).getFullYear(),THIS_MONTH=+(new Date).getMonth()+1,MONTHS_WITH_THIRTY_DAYS=[4,6,9,11],getMonthDays=function(e,t){return void 0===t&&(t=THIS_YEAR),2!==(e=void 0===e?THIS_MONTH:e)?MONTHS_WITH_THIRTY_DAYS.includes(e)?30:31:t%4==0?29:28},getMonthFirstDay=function(e,t){return void 0===e&&(e=THIS_MONTH),void 0===t&&(t=THIS_YEAR),+new Date(t+"-"+zeroPad(e,2)+"-01").getDay()+1},isSameMonth=function(e,t){var n=+(t=void 0===t?new Date:t).getMonth()+1,r=t.getFullYear(),t=+e.getMonth()+1,e=e.getFullYear();return+n==+t&&+r==+e},isSameDay=function(e,t){var n=(t=void 0===t?new Date:t).getDate(),r=+t.getMonth()+1,i=t.getFullYear(),s=e.getDate(),t=+e.getMonth()+1,e=e.getFullYear();return+n==+s&&+r==+t&&+i==+e},isWeekend=function(e){e=e.getDay();return 6===e||0===e},getDateISO=function(e){return[(e=void 0===e?new Date:e).getFullYear(),zeroPad(+e.getMonth()+1,2),zeroPad(+e.getDate(),2)].join("-")},getPreviousMonth=function(e,t){return{month:1<e?e-1:12,year:1<e?t:t-1}},getNextMonth=function(e,t){return{month:e<12?e+1:1,year:e<12?t:t+1}},createCalendar=function(n,r){var e=getMonthDays(n=void 0===n?THIS_MONTH:n,r=void 0===r?THIS_YEAR:r),i=getMonthFirstDay(n,r)-1,t=7*CALENDAR_WEEKS-(i+e),s=getPreviousMonth(n,r),a=s.month,o=s.year,s=getNextMonth(n,r),c=s.month,l=s.year,d=getMonthDays(a,o),s=__spreadArray([],new Array(i)).map(function(e,t){t=t+1+(d-i);return[o,zeroPad(a,2),zeroPad(t,2)]}),e=__spreadArray([],new Array(e)).map(function(e,t){t+=1;return[r,zeroPad(n,2),zeroPad(t,2)]}),t=__spreadArray([],new Array(t)).map(function(e,t){t+=1;return[l,zeroPad(c,2),zeroPad(t,2)]});return __spreadArray(__spreadArray(__spreadArray([],s),e),t)},getCalendarTitle=function(e,t){return MONTHS[Math.max(0,Math.min(e-1,11))]+" "+t},setPrevMonth=function(e){var t=e.current,n=e.month,e=e.year;return __assign({current:t},getPreviousMonth(n,e))},setNextMonth=function(e){var t=e.current,n=e.month,e=e.year;return __assign({current:t},getNextMonth(n,e))},DatePickerContext=createContext(void 0),useDatePickerContext=function(){var e=useContext(DatePickerContext);if(!e)throw new Error("");return e},DatePickerContextProvider=function(e){var t=e.children,n=e.date,r=void 0===n?new Date:n,i=e.startDate,s=e.endDate,a=useState({current:r,month:r.getMonth()+1,year:r.getFullYear()}),o=a[0],c=a[1],l=getCalendarTitle(o.month,o.year),n=createCalendar(o.month||o.current.getMonth()+1,o.year||o.current.getFullYear()),e=!!i&&o.month===i.getMonth()+1,r=!!s&&o.month===s.getMonth()+1,a=useCallback(function(){return c(setPrevMonth)},[]),i=useCallback(function(){return c(setNextMonth)},[]),s=useCallback(function(e){c({current:e,month:e.getMonth()+1,year:e.getFullYear()})},[]);return jsx(DatePickerContext.Provider,__assign({value:{current:o.current,month:o.month,year:o.year,calendarTitle:l,calendar:n,prevDisabled:e,nextDisabled:r,nextMonth:i,prevMonth:a,setCalendarDate:s}},{children:t}),void 0)},createDate=function(e){e=e.join("-");return new Date(e)},renderDay=function(e){var n=e.current,r=e.month,i=e.year,s=e.onDayClick;return function(e){var t=createDate(e),e=classNames("cldr__day",{current:isSameDay(t,n),inmonth:isSameMonth(t,new Date([i,r,1].join("-"))),weekend:isWeekend(t)});return jsx("div",__assign({className:e,onClick:function(){return s(t)},onMouseDown:mouseDownPrevent},{children:t.getDate()}),getDateISO(t))}},CalendarDates=function(e){var t=e.onSelect,n=useDatePickerContext(),r=n.calendar,i=n.current,s=n.month,e=n.year,a=n.setCalendarDate,n=useCallback(function(e){a(e),t(e)},[t,a]);return jsx("div",__assign({className:"cldr__tbl"},{children:r.map(renderDay({current:i,month:s,year:e,onDayClick:n}))}),void 0)},DayLabel=memo(function(){return jsx("div",__assign({className:"cldr__wd"},{children:DAYS.map(function(e){return jsx("div",{children:e},e)})}),void 0)}),PickerHeader=function(){var e=useDatePickerContext(),t=e.prevDisabled,n=e.nextDisabled,r=e.calendarTitle,i=e.prevMonth,e=e.nextMonth,t=classNames("dp__arrow","left",{disabled:t}),n=classNames("dp__arrow","right",{disabled:n});return jsxs("header",__assign({className:"cldr__hdr"},{children:[jsx(SvgArrow,{className:t,onClick:i,onMouseDown:mouseDownPrevent},void 0),jsx("div",{children:r},void 0),jsx(SvgArrow,{className:n,onClick:e,onMouseDown:mouseDownPrevent},void 0)]}),void 0)},Picker=function(e){var t=e.date,n=void 0===t?new Date:t,r=e.startDate,t=e.endDate,e=e.onSelect;return jsx(DatePickerContextProvider,__assign({date:n,endDate:t,startDate:r},{children:jsx("div",__assign({className:"cldr"},{children:jsx("div",{children:jsx("div",__assign({className:"cldr__wrp"},{children:jsx("div",{children:jsx("div",__assign({className:"cldr__cntr"},{children:jsx("div",{children:jsxs("div",{children:[jsx(PickerHeader,{},void 0),jsx(DayLabel,{},void 0),jsx(CalendarDates,{onSelect:e},void 0)]},void 0)},void 0)}),void 0)},void 0)}),void 0)},void 0)}),void 0)}),void 0)},DatePicker=function(e){var t=e.children,n=e.date,r=e.disabled,i=e.endDate,s=e.errorMessage,a=e.format,o=void 0===a?"DD.MM.YYYY":a,c=e.label,l=e.onSelect,d=e.placeholder,u=void 0===d?"дд.мм.гггг":d,v=e.requiredMessage,h=e.startDate,_=useRef(null),a=useState(!1),d=a[0],f=a[1],e=useCallback(function(e){e.currentTarget.contains(e.relatedTarget)||f(!0)},[]),a=useCallback(function(e){var t;f(!1),null!==(t=_.current)&&void 0!==t&&t.blur(),l(e)},[l]),s=createError({validate:d,requiredMessage:v,value:n,errorMessage:s});return jsxs(Control,__assign({content:jsxs("div",__assign({className:"dp__cnt"},{children:[t,jsx(Calendar,{},void 0)]}),void 0),disabled:r,error:s,hasValue:!!n,label:c,onBlur:e,ref:_,required:!!v},{children:[jsx("span",__assign({className:"dp__value"},{children:n?dayjs(n).format(o):u}),void 0),jsx("div",__assign({className:"dp__cntr"},{children:jsx(Picker,{date:n,endDate:i,onSelect:a,startDate:h},void 0)}),void 0)]}),void 0)},Dropdown=function(e){var t=e.children,e=e.items;return jsxs("div",__assign({className:"dd"},{children:[jsx("span",__assign({className:"dd__cnt"},{children:t}),void 0),jsx("span",__assign({className:"dd__itms"},{children:jsx("ul",{children:e.map(function(e){return jsx("li",{children:e.to?jsx(Link,__assign({onClick:e.onClick,to:e.to},{children:e.title}),void 0):jsx("a",__assign({role:"button",onClick:e.onClick},{children:e.title}),void 0)},e.id)})},void 0)}),void 0)]}),void 0)},Form=function(e){var t=e.children,e=e.title;return jsx("div",__assign({className:"frm"},{children:jsxs("div",{children:[e&&jsx("div",__assign({className:"frm__title"},{children:jsx("h2",{children:e},void 0)}),void 0),t]},void 0)}),void 0)},InfoBox=function(e){var t=e.additionalInfo,n=e.img,r=e.title,e=e.children;return jsx("label",__assign({className:"ib"},{children:jsxs("div",{children:[jsx("div",__assign({className:"ib__stn"},{children:jsx(Checkbox,{},void 0)}),void 0),n&&jsx("div",__assign({className:"ib__stn"},{children:jsx("img",{alt:"icon",src:n},void 0)}),void 0),jsxs("div",__assign({className:"ib__stn"},{children:[jsx("div",__assign({className:"ib__stn__title"},{children:r}),void 0),jsx("div",__assign({className:"ib__stn__cnt"},{children:e}),void 0)]}),void 0),jsx("div",__assign({className:"ib__stn"},{children:jsx("span",{children:t},void 0)}),void 0)]},void 0)}),void 0)},Input=function(e){var t=e.autoComplete,n=void 0===t?"off":t,r=e.children,i=e.className,s=e.content,a=e.disabled,o=e.errorMessage,c=e.id,l=e.label,d=e.maxLength,u=e.name,v=e.onBlur,h=e.onChange,_=e.onFocus,f=e.placeholder,g=e.regExp,m=e.requiredMessage,x=e.startValidate,p=void 0!==x&&x,j=e.type,b=void 0===j?"text":j,y=e.value,w=useRef(null),t=useState(!1),x=t[0],D=t[1],j=useCallback(function(e){var t;null!==(t=w.current)&&void 0!==t&&t.focus(),_&&_(e)},[_]),e=useCallback(function(e){!e.currentTarget.contains(e.relatedTarget)&&w.current&&(D(!0),v&&v(e))},[v]),t=useCallback(function(e){D(!1),h(e.currentTarget.value)},[h]),o=createError({validate:x,startValidate:p,requiredMessage:m,regExp:g,value:y,errorMessage:o});return jsxs(Control,__assign({className:i,content:r,disabled:a,error:o,hasValue:!!y,label:l,name:u,onBlur:e,onFocus:j,required:!!m},{children:[jsx("input",{autoComplete:n,disabled:a,id:c,maxLength:d,name:u,onChange:t,placeholder:f,ref:w,required:!!m,type:b,value:y},void 0),s]}),void 0)},OptionsContainer=function(e){e=e.children;return jsx("div",__assign({className:"slt__opts"},{children:e}),void 0)},SelectOption=function(e){var t=e.checked,n=void 0!==t&&t,r=e.option,t=e.isMulti,i=e.onClick,e=useState(n),n=e[0],s=e[1],e=useCallback(function(e){s(function(e){return!e}),i&&i(e)},[i]);return jsxs("button",__assign({className:"slt__opt",onClick:e,onMouseDown:mouseDownPrevent,type:"button"},{children:[jsx("div",__assign({className:"slt__opt__txt"},{children:r.title}),void 0),t&&jsx(Checkbox,{checked:n},void 0)]}),void 0)},Options=function(e){var t=e.options,n=e.onClick,e=e.isMulti,r=void 0!==e&&e;return jsx(OptionsContainer,{children:t.map(function(e){return jsx(SelectOption,{isMulti:r,onClick:n(e),option:e},e.value)})},void 0)},SearchInput=function(e){var t=e.content,n=e.isOptionsAvailable,r=e.options,i=void 0===r?[]:r,r=e.renderOption,e=__rest(e,["content","isOptionsAvailable","options","renderOption"]),n=(n||0<i.length)&&!!r;return jsx(Input,__assign({},e,{content:jsxs(Fragment,{children:[t,n&&jsx(OptionsContainer,{children:i.map(r)},void 0)]},void 0)}),void 0)},createSelectedItems=function(e,r,t){return void 0===t&&(t=", "),e.reduce(function(e,t){var n=r.find(function(e){return t.value===e.value});return n&&e.push(n.title),e},[]).join(t)},createSelectedValue=function(e,t){return e?t?e:[e]:[]},Select=function(e){var t=e.disabled,n=e.errorMessage,r=e.label,i=e.onSelect,s=e.options,a=e.requiredMessage,o=e.optionsSeparator,c=void 0===o?", ":o,l=e.selected,d=useRef(null),o=useState(!1),e=o[0],u=o[1],v=l&&Array.isArray(l),h=createSelectedValue(l,v),o=useCallback(function(e){e.currentTarget.contains(e.relatedTarget)||u(!0)},[]),l=createSelectedItems(s,h,c),c=0<h.length,n=createError({validate:e,requiredMessage:a,value:c,errorMessage:n});return jsxs(Control,__assign({className:"slt",content:jsx(Arrow,{},void 0),disabled:t,error:n,hasValue:c,label:r,onBlur:o,ref:d,required:!!a},{children:[jsx("div",__assign({className:"slt__value"},{children:l}),void 0),jsx(Options,{isMulti:v,onClick:function(t){return function(){var e;v?(e=h.some(function(e){return e.value===t.value})?h.filter(function(e){return e.value!==t.value}):h.concat(t),i(e)):(null!==(e=d.current)&&void 0!==e&&e.blur(),i(t)),u(!1)}},options:s},void 0)]}),void 0)},Slide=function(e){var t=e.children,e=classNames("sldr__wrp__slide",{active:e.active});return jsx("li",__assign({className:e},{children:jsx("div",{children:jsx("div",{children:jsx("div",{children:jsx("section",{children:t},void 0)},void 0)},void 0)},void 0)}),void 0)},Slider=function(e){var t=e.slides,n=e.defaultSlide,r=useState(n||0),i=r[0],s=r[1],a=useCallback(function(){s(function(e){return e+1})},[]),e=useCallback(function(){s(function(e){return e-1})},[]),n=i!==t.length,r=classNames("sldr__wrp__arrow",{hidden:0!==i}),n=classNames("sldr__wrp__arrow",{hidden:n});return jsx("div",__assign({className:"sldr"},{children:jsx("div",{children:jsx("div",{children:jsx("div",{children:jsxs("div",__assign({className:"sldr__wrp"},{children:[jsx("button",{"aria-label":"Previous slide",className:r,onClick:e,type:"button"},void 0),jsx("div",{children:jsx("div",{children:jsx("ul",__assign({style:{transform:"translate3d("+-100*i+"%, 0px, 0px)"}},{children:t.map(function(e,t){return jsx(Slide,__assign({active:i===t},{children:e}),void 0)})}),void 0)},void 0)},void 0),jsx("button",{"aria-label":"Next slide",className:n,onClick:a,type:"button"},void 0),jsx("ul",{children:t.map(function(e,t){return jsx("li",{className:classNames("sldr__wrp__dot",{active:i===t})},void 0)})},void 0)]}),void 0)},void 0)},void 0)},void 0)}),void 0)},Switch=function(e){var t=e.name,n=e.checked,r=e.onChange,e=classNames("sw",{sw__checked:n});return jsx("span",__assign({className:e,onClick:r},{children:jsxs("span",__assign({className:"sw__box",tabIndex:-1},{children:[jsx("input",{checked:n,hidden:!0,name:t,onChange:function(){},type:"checkbox"},void 0),jsx("span",{className:"sw__box__left"},void 0),jsx("span",{className:"sw__box__right"},void 0)]}),void 0)}),void 0)},Tab=function(e){var t=e.className,n=e.content,r=e.children,e=e.onClick,t=classNames("tb__btn",t);return jsx("button",__assign({className:t,onClick:e,style:{cursor:e?"cursor":"unset"},type:"button"},{children:jsxs("span",__assign({className:"tb__box",tabIndex:-1},{children:[jsx("span",__assign({className:"tb__txt"},{children:r}),void 0),n&&jsx("span",__assign({className:"tb__cnt"},{children:n}),void 0)]}),void 0)}),void 0)};export{SvgArrow as ArrowSvg,Button,SvgCalendar as CalendarSvg,Card,CardsContainer,Checkbox,DatePicker,Dropdown,Form,InfoBox,Input,Ring,SvgCircle as RingSvg,SearchInput,Select,Slider,Switch,Tab,Tick,SvgTick as TickSvg};
//# sourceMappingURL=index.esm.js.map
