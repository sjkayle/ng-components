(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{JH3E:function(e,n,t){"use strict";t.r(n),t.d(n,"LoaderPageModule",function(){return f});var o=t("jJnW"),l=t("SVse"),a=t("rk0L"),r=t("s7LF"),i=t("PGw9"),s=t("DJJd"),u=(t("i1gu"),t("SX3m"),t("FwfG"),t("+vkl"),t("4rW9"),t("t3qY"),t("jkfz"),t("+qYq"),t("Nc42"),t("/wTi")),c=(t("Vn38"),t("IDUc"),t("gTaN"),t("TMju"),t("eIBO"),t("VWPQ"),t("P1+2"),t("dj8s"),t("1NrB"),t("Twxa"),t("bWRJ"),t("3As6"),t("bZXU"),t("A4mU"),t("8Y7J"));t("XNiG"),t("1G5W");var d=t("iInd"),p=t("17Ss"),b=t("j895"),g=t("A1V2"),m=t("kGDe"),h=[{path:"",component:function(){function e(){this.importString=t("X85Y"),this.snippet="<sebng-loader></sebng-loader>",this.toggle=!0,this.lightColors=["white","secondary","light"],this.size={value:"md",label:"Medium (md)"},this.type={value:"spinner",label:"Spinner"},this.showText=[],this.showTextList=[{value:!1,label:"show text"}],this.sizeList=[{value:"xs",label:"Extra small (xs)"},{value:"sm",label:"Small (sm)"},{value:"md",label:"Medium (md)"},{value:"lg",label:"Large (lg)"}],this.typeList=[{value:"spinner",label:"Spinner"},{value:"square",label:"Square"}],this.colorList=[{value:void 0,label:"none"},{value:"primary",label:"text-primary"},{value:"secondary",label:"text-secondary"},{value:"warning",label:"text-warning"},{value:"danger",label:"text-danger"},{value:"success",label:"text-success"},{value:"white",label:"text-white"},{value:"info",label:"text-info"},{value:"light",label:"text-light"},{value:"dark",label:"text-dark"},{value:"body",label:"text-body"},{value:"muted",label:"text-muted"}],document.title="Loader - SEB Angular Components"}return e.prototype.getSvgColor=function(){var e=this;return this.lightColors.some(function(n){var t;return n===(null===(t=e.color)||void 0===t?void 0:t.value)})?"#636363":"#efefef"},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["app-loader-page"]],decls:20,vars:16,consts:[[3,"importString","centered"],["example",""],[3,"toggle","className","size","type"],["controls","",1,"row"],[1,"col-12","mb-3"],["name","size",3,"list","ngModel","ngModelChange"],[1,"col-12"],["name","type",3,"inline","condensed","list","ngModel","ngModelChange"],[3,"ngModel","list","multi","ngModelChange"],[1,"small"],["code",""]],template:function(e,n){1&e&&(c.Tb(0,"app-doc-page",0),c.Rb(1,1),c.Ob(2,"sebng-loader",2),c.Qb(),c.Tb(3,"div",3),c.Tb(4,"div",4),c.Tb(5,"label"),c.Hc(6,"Size"),c.Sb(),c.Tb(7,"sebng-dropdown",5),c.ac("ngModelChange",function(e){return n.size=e}),c.Sb(),c.Sb(),c.Tb(8,"div",6),c.Tb(9,"label"),c.Hc(10,"Type"),c.Sb(),c.Tb(11,"sebng-radio-group",7),c.ac("ngModelChange",function(e){return n.type=e}),c.Sb(),c.Sb(),c.Tb(12,"div",6),c.Tb(13,"label"),c.Hc(14,"Color"),c.Sb(),c.Tb(15,"sebng-dropdown",8),c.ac("ngModelChange",function(e){return n.color=e}),c.Sb(),c.Tb(16,"p",9),c.Hc(17," Placing the loader inside another component will have it inherit the color of the font. Alternatively, you can color the loader by passing Bootstrap text color classes "),c.Sb(),c.Sb(),c.Sb(),c.Rb(18,10),c.Hc(19),c.Qb(),c.Sb()),2&e&&(c.mc("importString",n.importString)("centered",!0),c.Ab(2),c.nc("className","text-"+(null==n.color?null:n.color.value)),c.mc("toggle",!0)("size",n.size.value)("type",n.type.value),c.Ab(5),c.mc("list",n.sizeList)("ngModel",n.size),c.Ab(4),c.mc("inline",!0)("condensed",!0)("list",n.typeList)("ngModel",n.type),c.Ab(4),c.mc("ngModel",n.color)("list",n.colorList)("multi",!1),c.Ab(4),c.Ic(n.snippet))},directives:[p.a,b.a,g.a,r.l,r.n,m.a],encapsulation:2}),e}()}],v=function(){function e(){}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(n){return new(n||e)},imports:[[d.i.forChild(h)],d.i]}),e}(),f=function(){function e(){}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(n){return new(n||e)},imports:[[l.c,v,r.h,a.a,o.a,i.a,s.a,u.a]]}),e}()},X85Y:function(e,n,t){"use strict";t.r(n),n.default='import { Component, ViewEncapsulation, Input } from "@angular/core";\n\nexport type LoaderSize = "xs" | "sm" | "md" | "lg";\nexport type LoaderType = "spinner" | "square";\n\n/** Loader components gathered in one place. A loader alerts a user to wait for an activity to complete. */\n@Component({\n    selector: "sebng-loader",\n    styleUrls: ["./loader.component.scss"],\n    templateUrl: "./loader.component.html",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class LoaderComponent {\n    /** Loader size. Supported sizes: `xs`, `sm`, `md`, `lg` */\n    @Input() size?: LoaderSize = "md";\n    /** Loader types. Supportes types: `spinner`, `square` */\n    @Input() type?: LoaderType = "spinner";\n    /** Have the loader take over it\'s parent */\n    @Input() cover?: boolean;\n    /** Have the loader take over the screen */\n    @Input() fullscreen?: boolean;\n    /** Dims the background the background to indicate UI interactions are blocked */\n    @Input() backdrop?: boolean;\n    /** Screen reader text. Default is `Loading...` */\n    @Input() srText?: string;\n    /** Show or hide the loader. Default is `true` */\n    @Input() toggle?: boolean;\n    /** HTML role value. Default is `status`  */\n    @Input() role?: string = "status";\n    /** Element class name */\n    @Input() className?: string;\n}\n'}}]);