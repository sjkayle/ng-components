(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"53tJ":function(e,n,t){"use strict";t.r(n),t.d(n,"TextboxPageModule",function(){return b});var o=t("dj8s"),l=t("SVse"),r=t("rk0L"),a=t("s7LF"),i=t("iInd"),s=t("Ci8B"),u=t("8Y7J"),d=t("17Ss"),p=t("cHDM"),h=t("B3dm"),c=[{path:"",component:function(){function e(e){this.formService=e,this.importString=t("XL+2"),this.snippet="<sebng-textbox></sebng-textbox>",this.value="Hello :)",this.icon='\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170">\n        <path d="M137.5,102.1V40.4a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v61.7a3,3,0,0,0,3,3H134.5A3,3,0,0,0,137.5,102.1ZM112,91.3v7.7H30.5V91.3a3,3,0,0,0-3-3,6.1,6.1,0,0,1-6.1-6.1,3,3,0,0,0-3-3H11V63h7.5a3,3,0,0,0,3-3,6.1,6.1,0,0,1,6.1-6.1,3,3,0,0,0,3-3V43.4H112v7.5a3,3,0,0,0,3,3A6.1,6.1,0,0,1,121,60a3,3,0,0,0,3,3h7.5V79.3H124a3,3,0,0,0-3,3,6.1,6.1,0,0,1-6.1,6.1A3,3,0,0,0,112,91.3ZM131.5,57h-4.9a12.1,12.1,0,0,0-8.7-8.7V43.4h13.6ZM24.5,43.4v4.9A12.1,12.1,0,0,0,15.9,57H11V43.4ZM11,85.3h4.9A12.1,12.1,0,0,0,24.5,94v5.1H11ZM118,99.1V94a12.1,12.1,0,0,0,8.7-8.7h4.9V99.1Z"></path><path d="M151.3,115.8V54.2h-6v58.7H21.7v6H148.3A3,3,0,0,0,151.3,115.8Z"></path>\n        <path d="M159,67.9v58.7H35.5v6H162a3,3,0,0,0,3-3V67.9Z"></path>\n        <path d="M71.3,88.8A17.5,17.5,0,1,1,88.8,71.3,17.5,17.5,0,0,1,71.3,88.8Zm0-29A11.5,11.5,0,1,0,82.8,71.3,11.5,11.5,0,0,0,71.3,59.8Z"></path>\n    </svg>\n    ',document.title="Textbox - SEB Angular Components",this.extendedFormGroup=this.formService.dynamicFormSectionsToFormGroup([{key:"text",items:[{key:"placeholder",label:"Placeholder",controlType:"Text"},{key:"label",label:"Label",controlType:"Text",value:"Element label"}]},{key:"radios",items:[{key:"left",label:"Left icon or text?",description:"The element to be displayed on the left.",controlType:"Radio",options:[{label:"None",value:null},{label:"Icon",value:this.icon},{label:"Text",value:"kr"}]},{key:"right",label:"Right icon or text?",description:"The element to be displayed on the right.",controlType:"Radio",options:[{label:"None",value:null},{label:"Icon",value:this.icon},{label:"Text",value:"$"}]}]},{key:"numbers",items:[{key:"min",label:"Min",description:"Minimum length of input allowed for the textbox.",controlType:"Number",value:1,min:1,max:1e3},{key:"max",label:"Max",description:"Maximum length of input allowed for the textbox.",controlType:"Number",value:100,min:1,max:1e3}]},{key:"toggles",items:[{key:"required",value:!1,controlType:"Checkbox",description:"Property sets whether textbox is required.",label:"Required",order:30},{key:"readonly",value:!1,controlType:"Checkbox",description:"Property sets whether textbox is readonly.",label:"Read-only",order:20},{key:"disabled",value:!1,controlType:"Checkbox",description:"Property sets whether textbox is disabled.",label:"Disabled",order:10}]}])}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(n){return new(n||e)(u.Nb(s.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-textbox-page"]],features:[u.zb([s.a])],decls:7,vars:17,consts:[[3,"importString","centered"],["example",""],[3,"id","label","placeholder","disabled","readonly","required","minLength","maxLength","leftIcon","leftText","rightIcon","rightText","ngModel","ngModelChange"],["controls",""],[3,"extendedFormGroup"],["code",""]],template:function(e,n){1&e&&(u.Tb(0,"app-doc-page",0),u.Rb(1,1),u.Tb(2,"sebng-textbox",2),u.ac("ngModelChange",function(e){return n.value=e}),u.Sb(),u.Qb(),u.Rb(3,3),u.Ob(4,"app-dynamic-form",4),u.Qb(),u.Rb(5,5),u.Hc(6),u.Qb(),u.Sb()),2&e&&(u.mc("importString",n.importString)("centered",!0),u.Ab(2),u.mc("id","Textbox-example")("label",n.extendedFormGroup.value.text.label)("placeholder",n.extendedFormGroup.value.text.placeholder)("disabled",n.extendedFormGroup.value.toggles.disabled)("readonly",n.extendedFormGroup.value.toggles.readonly)("required",n.extendedFormGroup.value.toggles.required)("minLength",n.extendedFormGroup.value.numbers.min)("maxLength",n.extendedFormGroup.value.numbers.max)("leftIcon","Icon"===(null==n.extendedFormGroup.value.radios.left?null:n.extendedFormGroup.value.radios.left.label)?null==n.extendedFormGroup.value.radios.left?null:n.extendedFormGroup.value.radios.left.value:null)("leftText","Text"===(null==n.extendedFormGroup.value.radios.left?null:n.extendedFormGroup.value.radios.left.label)?null==n.extendedFormGroup.value.radios.left?null:n.extendedFormGroup.value.radios.left.value:null)("rightIcon","Icon"===(null==n.extendedFormGroup.value.radios.right?null:n.extendedFormGroup.value.radios.right.label)?null==n.extendedFormGroup.value.radios.right?null:n.extendedFormGroup.value.radios.right.value:null)("rightText","Text"===(null==n.extendedFormGroup.value.radios.right?null:n.extendedFormGroup.value.radios.right.label)?null==n.extendedFormGroup.value.radios.right?null:n.extendedFormGroup.value.radios.right.value:null)("ngModel",n.value),u.Ab(2),u.mc("extendedFormGroup",n.extendedFormGroup),u.Ab(2),u.Ic(n.snippet))},directives:[d.a,p.a,a.t,a.l,a.n,h.a],encapsulation:2}),e}()}],m=function(){function e(){}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(n){return new(n||e)},imports:[[i.i.forChild(c)],i.i]}),e}(),b=function(){function e(){}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(n){return new(n||e)},imports:[[l.c,m,a.h,r.a,o.a]]}),e}()},"XL+2":function(e,n,t){"use strict";t.r(n),n.default='import {\n    Component,\n    Input,\n    ViewEncapsulation,\n    forwardRef,\n    Provider,\n    OnChanges,\n    SimpleChanges,\n    OnInit,\n    Output,\n    EventEmitter,\n} from "@angular/core";\nimport { randomId } from "@sebgroup/frontend-tools";\n\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";\n\nconst CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR: Provider = {\n    provide: NG_VALUE_ACCESSOR,\n    useExisting: forwardRef(() => TextboxComponent),\n    multi: true,\n};\n\ntype Value = number | string;\n\n/** Textbox is a component that allows user to add or edit text */\n@Component({\n    selector: "sebng-textbox",\n    templateUrl: "./textbox.component.html",\n    styleUrls: ["./textbox.component.scss"],\n    encapsulation: ViewEncapsulation.None,\n    providers: [CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR],\n})\nexport class TextboxComponent implements ControlValueAccessor, OnInit, OnChanges {\n    /** Property sets to check if textbox is allowed to auto complete */\n    @Input() autocomplete?: string;\n    /** Element class name */\n    @Input() className?: string;\n    /** Property sets whether textbox is disabled */\n    @Input() disabled?: boolean;\n    /** Error message of textbox */\n    @Input() error?: string;\n    /** Property sets whether textbox is focused */\n    @Input() focus?: boolean;\n    /** Element ID */\n    @Input() id?: string;\n    /** Element label */\n    @Input() label?: string;\n    /** Element left icon */\n    @Input() leftIcon?: string;\n    /** Element left text */\n    @Input() leftText?: string;\n    /** Element left title */\n    @Input() leftTitle?: string;\n    /** Maximum allowed length for input */\n    @Input() maxLength?: number;\n    /** Minimum allowed length for input */\n    @Input() minLength?: number;\n    /** Elemenet name */\n    @Input() name: string;\n    /** Element pattern */\n    @Input() pattern?: string;\n    /** Element placeholder */\n    @Input() placeholder?: string;\n    /** Property sets whether textbox is readonly */\n    @Input() readonly?: boolean;\n    /** Property sets whether textbox is required */\n    @Input() required?: boolean;\n    /** Element right icon */\n    @Input() rightIcon?: string;\n    /** Element right text */\n    @Input() rightText?: string;\n    /** Element right title */\n    @Input() rightTitle?: string;\n    /** Input type */\n    @Input() type?: string;\n    /** Property sets whether textbox is set to success theme */\n    @Input() success?: boolean;\n    /** Property sets whether error message should be shown */\n    @Input() showErrorMessage?: boolean;\n\n    /** Callback when textbox is defocused */\n    @Output() onBlur: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();\n    /** Callback when textbox\'s value is changed  */\n    @Output() onChange: EventEmitter<Value> = new EventEmitter<Value>();\n    /** Callback when textbox is focused  */\n    @Output() onFocus: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();\n    /** Callback when key is pressed */\n    @Output() onKeyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();\n    /** Callback when a key that produces a character value is pressed down */\n    @Output() onKeyPress: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();\n    /** Callback when key is released */\n    @Output() onKeyUp: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();\n    /** Callback when left icon/text button is clicked */\n    @Output() onLeftClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();\n    /** Callback when right icon/text button is clicked */\n    @Output() onRightClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();\n    /** Calback when a search is initiated using element of type="search" */\n    @Output() onSearch: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();\n\n    private _value: Value;\n\n    private onTouchedCallback: () => void;\n    private onChangeCallback: (_: any) => void;\n\n    public internalId: string;\n    public displayError: boolean;\n\n    ngOnInit(): void {\n        this.internalId = this.id ? this.id : this.label ? randomId("tbg-") : null;\n        this.displayError = false;\n    }\n\n    ngOnChanges(changes: SimpleChanges): void {\n        if (changes.id || changes.label) {\n            this.internalId = changes.id ? changes.id?.currentValue : randomId("tbg-");\n        }\n    }\n\n    @Input()\n    get value(): Value {\n        return this._value;\n    }\n\n    set value(v: Value) {\n        if (v !== this._value) {\n            this._value = v;\n            this.onChangeCallback && this.onChangeCallback(v);\n            this.onChange && this.onChange.emit(v);\n        }\n    }\n\n    // event\n    handleBlur(e: MouseEvent): void {\n        this.onBlur?.emit(e);\n    }\n\n    handleKeyUp(e: KeyboardEvent): void {\n        this.onKeyUp?.emit(e);\n    }\n\n    handleKeyDown(e: KeyboardEvent): void {\n        this.onKeyDown?.emit(e);\n    }\n\n    handleFocus(e: MouseEvent): void {\n        this.onFocus?.emit(e);\n    }\n\n    handleKeyPress(e: KeyboardEvent): void {\n        this.onKeyPress?.emit(e);\n    }\n\n    handleLeftIconClick(e: MouseEvent): void {\n        this.onLeftClick?.emit(e);\n    }\n\n    handleRightIconClick(e: MouseEvent): void {\n        this.onRightClick?.emit(e);\n    }\n\n    handleSearch(e: KeyboardEvent): void {\n        this.onSearch?.emit(e);\n    }\n    // accessor props\n    writeValue(val: Value): void {\n        if (val !== this._value) {\n            this._value = val;\n        }\n    }\n\n    registerOnChange(fn: () => void): void {\n        this.onChangeCallback = fn;\n    }\n\n    registerOnTouched(fn: () => void): void {\n        this.onTouchedCallback = fn;\n    }\n}\n'}}]);