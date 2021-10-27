(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{G3tW:function(n,e,t){"use strict";t.r(e),e.default='import {\n    Component,\n    Input,\n    ElementRef,\n    ViewChildren,\n    QueryList,\n    OnInit,\n    OnChanges,\n    SimpleChanges,\n    ViewEncapsulation,\n    AfterViewInit,\n    ChangeDetectorRef,\n    AfterViewChecked,\n    OnDestroy,\n} from "@angular/core";\nimport { randomId } from "@sebgroup/frontend-tools";\nimport { Subscription } from "rxjs";\n\nexport type AccordionIconRotation = "deg-180" | "deg-180-counter" | "deg-90" | "deg-90-counter";\nexport type AccordionContentType = AccordionContent | Array<AccordionContent> | string;\nexport type AccordionContent = { title?: string; desc?: string };\n\nexport interface AccrodionListItem {\n    header: string;\n    subHeaderText?: string;\n    content?: AccordionContentType;\n}\n\nexport interface AccordionProps {\n    className?: string;\n    customIcon?: string;\n    customIconExpanded?: string;\n    iconPosition?: "left" | "right";\n    iconRotation?: AccordionIconRotation;\n    id?: string;\n    list: Array<AccrodionListItem>;\n    alternative?: boolean;\n    activeIndex?: number;\n}\n/** Accordions show and hide information that is not necessary at all time with one click. */\n@Component({\n    selector: "sebng-accordion",\n    templateUrl: "./accordion.component.html",\n    styleUrls: ["./accordion.component.scss"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class AccordionComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy {\n    /** Element class name */\n    @Input() className?: string;\n    /** Custom accordion toggle icon */\n    @Input() customIcon?: string;\n    /** Custom accordion toggle icon when expanded */\n    @Input() customIconExpanded?: string;\n    /** Accordion toggle icon position */\n    @Input() iconPosition?: "left" | "right";\n    /** Accordion toggle icon rotation angle */\n    @Input() iconRotation?: AccordionIconRotation;\n    /** Element ID */\n    @Input() id?: string;\n    /** List of accordion items to render */\n    @Input() list: Array<AccrodionListItem>;\n    /** Alternative accordion design, rendered headers as links */\n    @Input() alternative?: boolean;\n    /** The index of the default expanded accordion */\n    @Input() activeIndex?: number;\n\n    @ViewChildren("accordionItemRefs") accordionItemRefs: QueryList<ElementRef>;\n\n    public idList: Array<string>;\n    public accordionClassName: string = "custom-accordion";\n    public itemClassName: string = "custom-accordion";\n    public active: number = null;\n\n    private aacordionRefSubscription: Subscription;\n\n    public heightList: Array<number>;\n\n    constructor(private changeDetector: ChangeDetectorRef) {}\n\n    /** helper functions */\n    constructIds(): void {\n        this.idList = this.list.map(() => randomId("accordion-"));\n    }\n\n    /** Constructs the `className` to be used in accordion wrapper */\n    constructClassName(): void {\n        let cn: string = "custom-accordion";\n        cn += this.className ? ` ${this.className}` : "";\n        cn += this.alternative ? " alternative-accordion" : "";\n        this.accordionClassName = cn;\n    }\n\n    /** Constructs the `className` to be used in accordion items */\n    constructItemClassName(): void {\n        let cn: string = "accordion-item";\n        cn += " " + (this.iconPosition ? this.iconPosition : "left");\n        cn += " " + (this.iconRotation ? this.iconRotation : "deg-180");\n        cn += this.customIconExpanded ? " transform" : "";\n        this.itemClassName = cn;\n    }\n\n    expandOrCollapseSection(itemIndex: number): void {\n        const updatedHeightList: Array<number> = Array(this.list?.length).fill(0);\n        updatedHeightList[itemIndex] = this.heightList[itemIndex]\n            ? 0\n            : this.accordionItemRefs?.toArray()[itemIndex]?.nativeElement?.scrollHeight;\n        this.heightList = updatedHeightList;\n    }\n\n    toggle(index: number): void {\n        if (this.active === index) {\n            // Section already expanded\n            this.expandOrCollapseSection(index);\n        } else {\n            if (this.active !== null) {\n                // Another section is already expanded\n                this.expandOrCollapseSection(this.active);\n            }\n            this.expandOrCollapseSection(index);\n        }\n        this.active = this.active === index ? null : index;\n    }\n\n    contentIsOfTypeArray(content: AccordionContentType): boolean {\n        return (Array.isArray && Array.isArray(content)) || content instanceof Array;\n    }\n\n    contentTypeElementRef(content: AccordionContentType): boolean {\n        return typeof content === "string";\n    }\n\n    // events ----------------------------------------------\n    /**\n     * Handles accordion item click event\n     * @param e MouseEvent\n     * @param index list index\n     */\n    onToggle(e: KeyboardEvent | MouseEvent): void {\n        const index: number = Number((e.currentTarget as HTMLElement).getAttribute("data-id"));\n        if (e.type === "keydown") {\n            const key: string = (e as KeyboardEvent).key;\n            if ([" ", "space", "enter"].indexOf(key.toLowerCase()) !== -1) {\n                this.toggle(index);\n                e.preventDefault();\n            }\n        } else {\n            this.toggle(index);\n        }\n    }\n\n    ngOnInit(): void {\n        this.constructIds();\n        this.constructClassName();\n        this.constructItemClassName();\n        this.heightList = Array(this.list?.length).fill(0);\n    }\n\n    ngAfterViewInit(): void {\n        this.toggle(this.activeIndex);\n        this.aacordionRefSubscription = this.accordionItemRefs.changes.subscribe(() => {\n            this.toggle(this.activeIndex);\n        });\n    }\n\n    ngAfterViewChecked(): void {\n        this.changeDetector.detectChanges();\n    }\n\n    ngOnDestroy(): void {\n        this.aacordionRefSubscription.unsubscribe();\n    }\n\n    ngOnChanges(changes: SimpleChanges): void {\n        if (changes.list) {\n            this.constructIds();\n        }\n\n        if (changes.alternative || changes.className) {\n            this.constructClassName();\n        }\n\n        if (changes.iconRotation || changes.iconPosition || changes.customIconExpanded) {\n            this.constructItemClassName();\n        }\n\n        if (changes.activeIndex && this.accordionItemRefs) {\n            this.toggle(this.activeIndex);\n        }\n    }\n}\n'},"K/i3":function(n,e,t){"use strict";t.r(e),t.d(e,"AccordionPageModule",function(){return f});var i=t("i1gu"),o=t("PGw9"),c=t("gTaN"),s=t("SVse"),a=t("rk0L"),r=t("s7LF"),d=t("iInd"),l=t("8Y7J"),u=t("17Ss"),m=t("BzQT"),p=t("YF55"),g=t("Njz3"),h=[{path:"",component:function(){function n(){this.importString=t("G3tW"),this.isAlt=!1,this.activeIndex=0,this.accordionList=[{header:"Accordion List Item 1",subHeaderText:"Accordion Sub Header",content:{title:"Tempor incididun",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Lectus mauris ultrices eros in cursus turpis massa tincidunt."}},{header:"Accordion List Item 2",content:[{title:"Excepteur sint",desc:"Vitae suscipit tellus mauris a diam maecenas sed. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Tellus id interdum velit laoreet id donec. Morbi enim nunc faucibus a pellentesque sit. Vitae congue mauris rhoncus aenean."},{title:"Duis aute",desc:"Eleifend donec pretium vulputate sapien nec sagittis. Malesuada fames ac turpis egestas. Molestie ac feugiat sed lectus vestibulum mattis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed."}]}],this.iconPosition="left",this.code='<sebng-accordion [list]="accordionList"></sebng-accordion>',document.title="Accordion - SEB Angular Components"}return n.prototype.ngOnInit=function(){},n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Hb({type:n,selectors:[["app-accordion-page"]],decls:25,vars:11,consts:[[3,"importString","showNotes"],["example",""],[3,"list","iconPosition","alternative","activeIndex"],["code",""],["controls","",1,"row"],[1,"custom-select",3,"ngModel","ngModelChange"],["value","left"],["value","right"],["min","0",3,"ngModel","max","ngModelChange"],["label","Alternative","description","Show alternative look",3,"ngModel","ngModelChange"],["notes",""]],template:function(n,e){1&n&&(l.Tb(0,"app-doc-page",0),l.Rb(1,1),l.Ob(2,"sebng-accordion",2),l.Qb(),l.Rb(3,3),l.Hc(4),l.Qb(),l.Tb(5,"div",4),l.Tb(6,"label"),l.Hc(7,"Icon position "),l.Tb(8,"p"),l.Tb(9,"small"),l.Hc(10,"Show the icon on the left or right side"),l.Sb(),l.Sb(),l.Tb(11,"select",5),l.ac("ngModelChange",function(n){return e.iconPosition=n}),l.Tb(12,"option",6),l.Hc(13,"Left"),l.Sb(),l.Tb(14,"option",7),l.Hc(15,"right"),l.Sb(),l.Sb(),l.Sb(),l.Tb(16,"label"),l.Hc(17,"Active index "),l.Tb(18,"p"),l.Tb(19,"small"),l.Hc(20,"Dynamically set the index of the expanded list item"),l.Sb(),l.Sb(),l.Tb(21,"sebng-stepper",8),l.ac("ngModelChange",function(n){return e.activeIndex=n}),l.Sb(),l.Sb(),l.Tb(22,"sebng-checkbox",9),l.ac("ngModelChange",function(n){return e.isAlt=n}),l.Sb(),l.Sb(),l.Rb(23,10),l.Hc(24," This version of the component does not support custom html for the content. It will be updated soon. "),l.Qb(),l.Sb()),2&n&&(l.mc("importString",e.importString)("showNotes",!0),l.Ab(2),l.mc("list",e.accordionList)("iconPosition",e.iconPosition)("alternative",e.isAlt)("activeIndex",e.activeIndex),l.Ab(2),l.Ic(e.code),l.Ab(7),l.mc("ngModel",e.iconPosition),l.Ab(10),l.mc("ngModel",e.activeIndex)("max",e.accordionList.length-1),l.Ab(1),l.mc("ngModel",e.isAlt))},directives:[u.a,m.a,r.u,r.l,r.n,r.o,r.w,p.a,g.a],encapsulation:2}),n}()}],b=function(){function n(){}return n.\u0275mod=l.Lb({type:n}),n.\u0275inj=l.Kb({factory:function(e){return new(e||n)},imports:[[d.i.forChild(h)],d.i]}),n}(),f=function(){function n(){}return n.\u0275mod=l.Lb({type:n}),n.\u0275inj=l.Kb({factory:function(e){return new(e||n)},imports:[[s.c,b,r.h,a.a,i.a,o.a,c.a]]}),n}()}}]);