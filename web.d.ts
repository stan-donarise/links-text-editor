declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        destructor(): void;
        toString(): string;
        toJSON(): any;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
    }
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_wire_async<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host : (...args: Args) => Promise<Res> : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => infer Res_1 ? Res_1 extends Promise<any> ? Host[key] : (...args: Args_1) => Promise<Res_1> : Host[key]; };
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach_force(): HTMLStyleElement;
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_filter;
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "start" | "end" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit<$mol_style_unit_length>): $mol_style_func<"blur", string | $mol_style_unit<$mol_style_unit_length>>;
        static brightness(value?: number | $mol_style_unit<'%'>): $mol_style_func<"brightness", string | number | $mol_style_unit<"%">>;
        static contrast(value?: number | $mol_style_unit<'%'>): $mol_style_func<"contrast", string | number | $mol_style_unit<"%">>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit<$mol_style_unit_length>, y_offset: $mol_style_unit<$mol_style_unit_length>, blur_radius?: $mol_style_unit<$mol_style_unit_length>): $mol_style_func<"drop-shadow", ($mol_style_unit<$mol_style_unit_length> | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit<'%'>): $mol_style_func<"grayscale", string | number | $mol_style_unit<"%">>;
        static hue_rotate(value?: 0 | $mol_style_unit<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0 | $mol_style_unit<$mol_style_unit_angle>>;
        static invert(value?: number | $mol_style_unit<'%'>): $mol_style_func<"invert", string | number | $mol_style_unit<"%">>;
        static opacity(value?: number | $mol_style_unit<'%'>): $mol_style_func<"opacity", string | number | $mol_style_unit<"%">>;
        static sepia(value?: number | $mol_style_unit<'%'>): $mol_style_func<"sepia", string | number | $mol_style_unit<"%">>;
        static saturate(value?: number | $mol_style_unit<'%'>): $mol_style_func<"saturate", string | number | $mol_style_unit<"%">>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit<$mol_style_unit_time> | $mol_style_unit<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit<$mol_style_unit_time> | $mol_style_unit<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<'url'> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    type $mol_style_prop_result = Record<string, $mol_style_func<'var'>>;
    function $mol_style_prop(prefix: string, postfixes: Array<string>): $mol_style_prop_result;
}

declare namespace $ {
    const $mol_theme: $mol_style_prop_result;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: $mol_style_prop_result;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    function $mol_array_shuffle<Item>(array: readonly Item[]): Item[];
}

declare namespace $.$$ {
    class $ss_linkpad2_color_generator {
        private step;
        private start;
        private asset;
        constructor();
        private generateAsset;
        get_next_hue(): number;
        get_next_hsl(): {
            h: number;
            s: number;
            l: number;
        };
        foresee(): number;
    }
}

declare namespace $ {
    class $ss_blocks_noedit extends $mol_view {
        field(): Record<string, any>;
    }
}

declare namespace $ {
    class $ss_blocks_block extends $mol_view {
        Placeholder(): $ss_blocks_noedit;
        sub(): readonly any[];
        value_setted(next?: any): string;
        value_changed(next?: any): string;
        attr(): Record<string, any>;
        style(): Record<string, any>;
        visible_placeholder(): string;
        placeholder(): string;
        on_arrow_right(next?: any): any;
        on_arrow_left(next?: any): any;
        on_arrow_up(next?: any): any;
        on_arrow_down(next?: any): any;
        on_ctrl_x(next?: any): any;
        keydown_enter(next?: any): any;
        before_any_input(next?: any): any;
        before_insert_text(next?: any): any;
        delete_backward(next?: any): any;
        beforeinput(next?: any): any;
        keydown(next?: any): any;
        custom_keydown(next?: any): any;
        input(next?: any): any;
        dragenter(next?: any): any;
        drop(next?: any): any;
        drag(next?: any): any;
        dragleave(next?: any): any;
        paste(next?: any): any;
        cut(next?: any): any;
        event(): Record<string, any>;
        focused(next?: any): boolean;
        hovered(next?: any): boolean;
        focused_or_hovered(): boolean;
        on_focused_or_hovered(id: any): any;
        on_blur(): any;
        on_focus(): any;
        add_to_focus_history(id: any): any;
        focus(): any;
        default_value(): string;
        focus_state(next?: any): string;
        empty(next?: any): boolean;
        before_content(): string;
        after_content(): string;
        opacity(): number;
        mouseout(next?: any): any;
        mouseover(next?: any): any;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $.$$ {
    type $ss_blocks_block_focus_states = 'focused' | 'setting' | 'blurred';
    type $ss_blocks_block_id = any;
    function $ss_blocks_block_anchor_el(): HTMLElement;
    function $ss_blocks_block_trim(str: string): string;
    class $ss_blocks_block extends $.$ss_blocks_block {
        br(): HTMLBRElement;
        sub(): readonly any[];
        update_value(data_value: string): void;
        input(e?: any): void;
        before_content(): string;
        empty(): boolean;
        visible_placeholder(): string;
        auto(): void;
        set_focused_or_hovered(args: {
            focused?: boolean;
            hovered?: boolean;
        }): void;
        focus_state(next?: $ss_blocks_block_focus_states): $ss_blocks_block_focus_states;
        focus(pos?: 'start' | 'end', ignoreDefault?: boolean): Promise<void>;
        beforeinput(e?: InputEvent): any;
        on_ctrl_x(e?: any): void;
        custom_keydown(e: KeyboardEvent): void;
        keydown(e: KeyboardEvent): any;
        dragenter(e: any): void;
        drop(e: any): void;
        drag(e: any): void;
        dragleave(e: any): void;
        insert_in_sel(str: string, collapse_to_start?: boolean): void;
        paste(e: any): void;
        cut(e: any): void;
        mouseover(): void;
        mouseout(): void;
        hovered(next?: any): boolean;
        focused(next?: any): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ss_blocks extends $mol_object2 {
        Block(id: any): $$.$ss_blocks_block;
        focus_history_dom_ids(next?: any): readonly any[];
        beforeinput(next?: any): any;
        keydown(next?: any): any;
        input(next?: any): any;
        dragenter(next?: any): any;
        drop(next?: any): any;
        drag(next?: any): any;
        dragleave(next?: any): any;
        paste(next?: any): any;
        cut(next?: any): any;
    }
}

declare namespace $.$$ {
    class $ss_blocks extends $.$ss_blocks {
        constructor();
        focus_history_dom_ids(next?: any): readonly any[];
        block_dom_name(): string;
        Block(id: $ss_blocks_block_id): $ss_blocks_block;
        block_from_node(node: Element): $ss_blocks_block;
        block_from_sel(): $ss_blocks_block | undefined;
        input(e?: any): void;
        beforeinput(e?: any): void;
        keydown(e?: any): void;
        dragenter(e: any): void;
        drop(e: any): void;
        drag(e: any): void;
        dragleave(e: any): void;
        paste(e: any): void;
        cut(e: any): void;
    }
}

declare namespace $ {
    class $ss_blocks_contenteditable extends $mol_view {
        focus_history_dom_ids(): readonly any[];
        Block(id: any): $$.$ss_blocks_block;
        blocks_beforeinput(next?: any): void;
        blocks_keydown(next?: any): void;
        blocks_input(next?: any): void;
        blocks_dragenter(next?: any): void;
        blocks_drop(next?: any): void;
        blocks_drag(next?: any): void;
        blocks_dragleave(next?: any): void;
        blocks_paste(next?: any): void;
        blocks_cut(next?: any): void;
        Blocks(): $$.$ss_blocks;
        sub(): readonly any[];
        field(): Record<string, any>;
        event(): Record<string, any>;
        Body(): $mol_view;
    }
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $ss_linkpad2_link extends $mol_ghost {
        ui_type(): string;
        only_nodes(next?: any): boolean;
        Link_data(id: any): any;
        variants(): Record<string, any>;
        actions(): any;
        get_data(): any;
        depth(): number;
        fold(id: any): any;
        folded(next?: any): boolean;
        add_new_link(id: any): any;
        replace(id: any): any;
        on_hovered(id: any, next?: any): any;
        on_focus(id: any): any;
        replace_to_link(id: any): any;
        hide_contain(next?: any): boolean;
        ui_id(): any;
        all_link_ids(next?: any): readonly string[];
        data(): any;
        Block(id: any): any;
        to_link(): any;
        links(): readonly $ss_linkpad2_link[];
        Default(): $$.$ss_linkpad2_link_default;
        Node_self(): $$.$ss_linkpad2_link_hover;
        Node_label(): $ss_blocks_noedit;
        Node_label_sub(): readonly any[];
        node_color(): string;
        Node(): $ss_linkpad2_link_node;
        Root(): $ss_linkpad2_link_root;
        Loop(): $ss_linkpad2_link_loop;
    }
}

declare namespace $ {
    class $mol_store<Data> extends $mol_object2 {
        data_default?: Data | undefined;
        constructor(data_default?: Data | undefined);
        data(next?: Data): NonNullable<Data> | (Data & null);
        snapshot(next?: string): string;
        value<Key extends keyof Data>(key: Key, next?: Data[Key]): Data[Key] & {};
        selection<Key extends keyof Data>(key: Key, next?: number[]): number[];
        sub<Key extends keyof Data, Lens extends $mol_store<Data[Key]> = $mol_store<NonNullable<Data[Key]>>>(key: Key, lens?: Lens): Lens;
        reset(): void;
        active(): boolean;
    }
}

declare namespace $ {
    interface Link_DTO {
        id: string;
        type_id: string;
        from_id?: string;
        to_id?: string;
        out: string[];
        name?: string;
        val?: string;
        hue?: number;
        undef?: boolean;
    }
    class $ss_linkpad2_link_data extends $mol_store<Link_DTO> {
        id(next?: string): string;
        type_id(next?: string): string;
        from_id(): string;
        to_id(next?: string): string;
        out(next?: string[]): string[];
        val(next?: string): string;
        hue(next?: number): number;
        undef(next?: boolean): boolean;
        name(next?: string): string;
    }
}

declare namespace $.$$ {
    type $ss_linkpad2_link_id = string;
    type $ss_linkpad2_link_ui_id = [$ss_linkpad2_link_ui_id | null, $ss_linkpad2_link_id];
    type $ss_linkpad2_link_block_id = [$ss_linkpad2_link_ui_id, 'type' | 'value' | 'name' | string];
    function $ss_linkpad2_link_ui_id_build(link_id: $ss_linkpad2_link_id, parent_ui_id?: $ss_linkpad2_link_ui_id | null): $ss_linkpad2_link_ui_id;
    function $ss_linkpad2_link_id_from_ui(ui_id: $ss_linkpad2_link_ui_id): $ss_linkpad2_link_id;
    function $ss_linkpad2_link_id_parent_from_ui(ui_id: $ss_linkpad2_link_ui_id): $ss_linkpad2_link_id | undefined;
    class $ss_linkpad2_link extends $.$ss_linkpad2_link {
        type_data(): $ss_linkpad2_link_data;
        ui_id(): $ss_linkpad2_link_ui_id;
        to_link(): $ss_linkpad2_link | null;
        ui_type(): string;
        Sub(): any;
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        scroll_top(next?: any): number;
        scroll_left(next?: any): number;
        field(): Record<string, any>;
        event(): Record<string, any>;
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad2_scroll extends $mol_scroll {
        event(): Record<string, any>;
        event_wheel(next?: any): any;
        event_touchmove(next?: any): any;
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $ss_linkpad2 extends $mol_view {
        color_gen(): $$.$ss_linkpad2_color_generator;
        raw_gql_path(next?: any): string;
        right_link_id(next?: any): string;
        sub(): readonly any[];
        Block(id: any): $$.$ss_blocks_block;
        Blocks(): $$.$ss_blocks;
        focus_history_dom_ids(): readonly any[];
        Contenteditable(): $ss_blocks_contenteditable;
        Contenteditable_package(): $ss_blocks_contenteditable;
        all_link_ids(next?: any): readonly string[];
        Link_data(id: any): any;
        outline_sel_ui_id(next?: any): any;
        Link(id: any): $$.$ss_linkpad2_link;
        link_links_id(id: any, next?: any): readonly string[];
        Float_line(): $mol_view;
        Page_row(): $mol_view;
        event_wheel(next?: any): any;
        Lines(): $ss_linkpad2_scroll;
        Root_link(next?: any): any;
        Root_package_link(next?: any): any;
        actions(): Record<string, any>;
        get_data(): Record<string, any>;
        folded(id: any, next?: any): boolean;
        fold(id: any): any;
        add_new_link(id: any): any;
        replace(id: any): any;
        on_hovered(id: any, next?: any): any;
        on_focus(id: any): any;
        replace_to_link(id: any): any;
        hide_contain(next?: any): boolean;
        ui_id(id: any): any;
        depth(id: any): number;
        link_data_by_ui_id(id: any): any;
        to_link(id: any): any;
        link_links(id: any): readonly $ss_linkpad2_link[];
    }
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<infer Res2> ? (...args: Args) => Res2 : Host : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => Promise<infer Res_1> ? (...args: Args_1) => Res_1 : Host[key]; };
}

declare namespace $ {
    type DeepClient = import("@deep-foundation/deeplinks/imports/client").DeepClient;
    export class $ss_linkpad2_lib_deep {
        static deepBundle(): {
            makeDeepClient: (path: string, ssl: boolean) => Promise<DeepClient>;
            minilinks: import("@deep-foundation/deeplinks/imports/minilinks").MinilinksInstance<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>>;
        };
        static gql_path(next?: string): string;
        static deep(): import("@deep-foundation/deeplinks/imports/client").DeepClient<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>>;
        static minilinks(): import("@deep-foundation/deeplinks/imports/minilinks").MinilinksInstance<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>>;
    }
    export {};
}

declare namespace $ {
    function $mol_compare_text<Item>(item?: (item: Item) => string): (a: Item, b: Item) => number;
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare var $node: any;

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    const $ss_linkpad2_theme: {
        block_width_vw: number;
        block_width: $mol_style_func<"var", "--ss_linkpad2_theme_block_width" | ("--ss_linkpad2_theme_block_width" | `min(80vw, ${number}px)`)[]>;
        block_padding: $mol_style_func<"var", "--ss_linkpad2_theme_block_width" | ("--ss_linkpad2_theme_block_width" | `min(${number}vw, ${number}px)`)[]>;
        block_width_px: () => number;
    };
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

/// <reference types="react" />
declare namespace $.$$ {
    type Link_id = string;
    type Link = NonNullable<ReturnType<$$.$ss_linkpad2["ml"]>>["links"][number];
    export class $ss_linkpad2 extends $.$ss_linkpad2 {
        static block_width_vw: number;
        typeLinks: Set<Link>;
        ui_id(id: string): string;
        conter: number;
        guid(): Link_id;
        undef_guid(): string;
        Type_link_id(): string;
        Type_link(): $ss_linkpad2_link_data;
        Contain_link(): $ss_linkpad2_link_ui_id;
        Package_link(): $ss_linkpad2_link_ui_id;
        Admin_link(): $ss_linkpad2_link_ui_id;
        depth(ui_id: $ss_linkpad2_link_ui_id | null): number;
        to_link_id(ui_id: $ss_linkpad2_link_ui_id | null, next?: string): string | null;
        to_link(ui_id: $ss_linkpad2_link_ui_id | null): $ss_linkpad2_link | null;
        link_links_id(ui_id: $ss_linkpad2_link_ui_id | null, next?: string[]): string[];
        add_DEV(type_id: $ss_linkpad2_link_id, name_or_val: string, parent_ui_id: $ss_linkpad2_link_ui_id | null, node?: boolean): $ss_linkpad2_link_ui_id;
        add_undef(name_or_val: string, parent_ui_id: $ss_linkpad2_link_ui_id | null, node?: boolean): $ss_linkpad2_link_ui_id;
        push_link(args: {
            parent: $ss_linkpad2_link_ui_id;
            link: $ss_linkpad2_link_ui_id;
            pos?: number;
        }): void;
        add_new_link(args: {
            from: $ss_linkpad2_link_ui_id;
            val?: string;
            pos?: number;
        }): $ss_linkpad2_link;
        replace(args: {
            ui_id: $ss_linkpad2_link_ui_id;
            new_id?: string;
            new_to?: string;
            new_type_id?: string;
        }): string | $ss_linkpad2_link_ui_id | undefined;
        replace_to_link(args: {
            link: $ss_linkpad2_link_ui_id;
            new_to: string;
        }): void;
        gql_path(): string;
        deep(): import("@deep-foundation/deeplinks/imports/client").DeepClient<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>> | null;
        minilinks(data?: any[]): import("@deep-foundation/deeplinks/imports/minilinks").MinilinksResult<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>> | null;
        sync_deep(): {
            useDeepSubscription: typeof import("@deep-foundation/deeplinks/imports/client").useDeepSubscription;
            useDeepQuery: typeof import("@deep-foundation/deeplinks/imports/client").useDeepQuery;
            useMinilinksQuery: (query: import("@deep-foundation/deeplinks/imports/client_types").QueryLink) => unknown;
            useMinilinksSubscription: (query: import("@deep-foundation/deeplinks/imports/client_types").QueryLink) => unknown;
            useDeep: typeof import("@deep-foundation/deeplinks/imports/client").useDeep;
            DeepProvider: typeof import("@deep-foundation/deeplinks/imports/client").DeepProvider;
            DeepContext: React.Context<import("@deep-foundation/deeplinks/imports/client").DeepClient<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>>>;
            linkId?: number | undefined;
            token?: string | undefined;
            handleAuth?: ((linkId?: number | undefined, token?: string | undefined) => any) | undefined;
            deep: import("@deep-foundation/deeplinks/imports/client").DeepClientInstance<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>>;
            client: import("@deep-foundation/hasura/client").IApolloClient<any>;
            apolloClient: import("@deep-foundation/hasura/client").IApolloClient<any>;
            minilinks: import("@deep-foundation/deeplinks/imports/minilinks").MinilinksResult<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>>;
            table?: string | undefined;
            returning?: string | undefined;
            selectReturning?: string | undefined;
            linksSelectReturning?: string | undefined;
            valuesSelectReturning?: string | undefined;
            selectorsSelectReturning?: string | undefined;
            filesSelectReturning?: string | undefined;
            insertReturning?: string | undefined;
            updateReturning?: string | undefined;
            deleteReturning?: string | undefined;
            defaultSelectName?: string | undefined;
            defaultInsertName?: string | undefined;
            defaultUpdateName?: string | undefined;
            defaultDeleteName?: string | undefined;
            silent: boolean;
            _silent: (options?: Partial<{
                silent?: boolean | undefined;
            }> | undefined) => boolean;
            stringify: (any?: any) => string;
            serializeQuery: (exp: any, env?: string | undefined) => unknown;
            serializeWhere: (exp: any, env?: string | undefined) => unknown;
            select: (exp: import("@deep-foundation/deeplinks/imports/client").Exp<"links" | "can" | "numbers" | "strings" | "objects" | "selectors" | "tree" | "handlers">, options?: import("@deep-foundation/deeplinks/imports/client").ReadOptions<"links" | "can" | "numbers" | "strings" | "objects" | "selectors" | "tree" | "handlers"> | undefined) => import("@deep-foundation/deeplinks/imports/client").DeepClientResult<unknown[]>;
            insert: (objects: import("@deep-foundation/deeplinks/imports/client").InsertObjects<"links" | "numbers" | "strings" | "objects">, options?: import("@deep-foundation/deeplinks/imports/client").WriteOptions<"links" | "numbers" | "strings" | "objects"> | undefined) => import("@deep-foundation/deeplinks/imports/client").DeepClientResult<{
                id: any;
            }[]>;
            update: (exp: import("@deep-foundation/deeplinks/imports/client").Exp<"links" | "can" | "numbers" | "strings" | "objects" | "selectors" | "tree" | "handlers">, value: import("@deep-foundation/deeplinks/imports/client_types").MutationInputLinkPlain | import("@deep-foundation/deeplinks/imports/client_types").MutationInputValue<number> | import("@deep-foundation/deeplinks/imports/client_types").MutationInputValue<string> | import("@deep-foundation/deeplinks/imports/client_types").MutationInputValue<any>, options?: import("@deep-foundation/deeplinks/imports/client").WriteOptions<"links" | "can" | "numbers" | "strings" | "objects" | "selectors" | "tree" | "handlers"> | undefined) => import("@deep-foundation/deeplinks/imports/client").DeepClientResult<{
                id: any;
            }[]>;
            delete: (exp: import("@deep-foundation/deeplinks/imports/client").Exp<"links" | "can" | "numbers" | "strings" | "objects" | "selectors" | "tree" | "handlers">, options?: import("@deep-foundation/deeplinks/imports/client").WriteOptions<"links" | "can" | "numbers" | "strings" | "objects" | "selectors" | "tree" | "handlers"> | undefined) => import("@deep-foundation/deeplinks/imports/client").DeepClientResult<{
                id: any;
            }[]>;
            serial: (args_0: import("@deep-foundation/deeplinks/imports/client").AsyncSerialParams) => import("@deep-foundation/deeplinks/imports/client").DeepClientResult<{
                id: number;
            }[]>;
            reserve: (count: number) => number[];
            await: (id: number, options?: {
                results: boolean;
            } | undefined) => any;
            id: (start: import("@deep-foundation/deeplinks/imports/client_types").QueryLink | import("@deep-foundation/deeplinks/imports/client").DeepClientStartItem, ...path: import("@deep-foundation/deeplinks/imports/client").DeepClientPathItem[]) => number;
            idLocal: (start: import("@deep-foundation/deeplinks/imports/client").DeepClientStartItem, ...path: import("@deep-foundation/deeplinks/imports/client").DeepClientPathItem[]) => number;
            guest: (options?: import("@deep-foundation/deeplinks/imports/client").DeepClientGuestOptions | undefined) => import("@deep-foundation/deeplinks/imports/client").DeepClientAuthResult;
            jwt: (options: import("@deep-foundation/deeplinks/imports/client").DeepClientJWTOptions) => import("@deep-foundation/deeplinks/imports/client").DeepClientAuthResult;
            whoami: () => number | undefined;
            login: (options: import("@deep-foundation/deeplinks/imports/client").DeepClientJWTOptions) => import("@deep-foundation/deeplinks/imports/client").DeepClientAuthResult;
            logout: () => import("@deep-foundation/deeplinks/imports/client").DeepClientAuthResult;
            can: (objectIds: number | number[] | null, subjectIds: number | number[] | null, actionIds: number | number[] | null, userIds?: number | number[] | undefined) => boolean;
            name: (input: number | import("@deep-foundation/deeplinks/imports/minilinks").Link<number>) => string | undefined;
            nameLocal: (input: number | import("@deep-foundation/deeplinks/imports/minilinks").Link<number>) => string | undefined;
        } | null;
        ml(): import("@deep-foundation/deeplinks/imports/minilinks").MinilinksResult<import("@deep-foundation/deeplinks/imports/minilinks").Link<number>> | null;
        deep_data(): any[];
        nameL: (L: import("@deep-foundation/deeplinks/imports/minilinks").Link<number>) => any;
        addL: (L: import("@deep-foundation/deeplinks/imports/minilinks").Link<number>, parent_ui_id: $ss_linkpad2_link_ui_id | null, node?: boolean) => $ss_linkpad2_link_ui_id;
        sort_linksL: (A: import("@deep-foundation/deeplinks/imports/minilinks").Link<number>, B: import("@deep-foundation/deeplinks/imports/minilinks").Link<number>) => number;
        add_outL: (L: import("@deep-foundation/deeplinks/imports/minilinks").Link<number>, from_ui_id: $ss_linkpad2_link_ui_id, depth?: number, visited?: Set<string>) => void;
        right_link_id(next?: any): string;
        add_root_L(L: Link, depth: number): $ss_linkpad2_link_ui_id;
        Admin_page_old(): $ss_linkpad2_link;
        Package_page(id: $ss_linkpad2_link_id): $ss_linkpad2_link | null;
        Line_type_id(): string;
        Contain_type_id(): string;
        add_contain_with_line(parent_ui_id: $ss_linkpad2_link_ui_id, v?: string, pos?: number): $ss_linkpad2_link_ui_id;
        add_line_loop(parent_ui_id: $ss_linkpad2_link_ui_id, v?: string, pos?: number): $ss_linkpad2_link_ui_id;
        Wiki_page(): $ss_linkpad2_link;
        default_data(): any[];
        Root_link(): $ss_linkpad2_link;
        Root_package_link(): $ss_linkpad2_link | null;
        auto(): void;
        resize(event?: any): any;
        all_link_ids(next?: any): readonly string[];
        upd_link_ids(id: string): void;
        Link_data(link_id: string, next?: $ss_linkpad2_link_data): $ss_linkpad2_link_data | null;
        link_data_by_ui_id(ui_id: $ss_linkpad2_link_ui_id): $ss_linkpad2_link_data | null;
        type_data_by_ui_id(ui_id: $ss_linkpad2_link_ui_id): $ss_linkpad2_link_data | null;
        link_links(ui_id: $ss_linkpad2_link_ui_id): $ss_linkpad2_link[];
        wiki_data(): any;
        on_hovered(id: any, event?: MouseEvent): void;
        on_focus_folded(ui_id: any): void;
        fold(ui_id: any): void;
        on_focus(ui_id: any): void;
        block_overflow_offset(elem: HTMLElement | Element): number | undefined;
        block_id(dom_id: string): [$ss_linkpad2_link_ui_id, "value"];
        auto_focused_block: string | null;
        auto_scroll(): void;
        scroll_y_offset(offset?: number): any;
        scroll_x_offset(offset?: number): any;
        scrolled: boolean;
        event_wheel(e?: Event): void;
        get_data(): {
            sibling_above_value: (ui_id: $ss_linkpad2_link_ui_id) => string | null;
        };
        actions(): {
            separate: (ui_id: $ss_linkpad2_link_ui_id) => void;
            new_line_sibling: (ui_id: $ss_linkpad2_link_ui_id, val?: string, opt?: {
                focus: boolean;
                direction: 'above' | 'below';
            }) => $ss_linkpad2_link_ui_id;
            new_sibling_below: (ui_id: $ss_linkpad2_link_ui_id, val?: string, opt?: {
                focus: boolean;
            }) => $ss_linkpad2_link_ui_id;
            new_sibling_above: (ui_id: $ss_linkpad2_link_ui_id, val?: string, opt?: {
                focus: boolean;
            }) => $ss_linkpad2_link_ui_id;
            move_below_parent: (ui_id: $ss_linkpad2_link_ui_id) => void;
            move_inside_upper_sibling: (ui_id: $ss_linkpad2_link_ui_id) => void;
            remove_sibling_above: (ui_id: $ss_linkpad2_link_ui_id) => void;
        };
    }
    export {};
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad2_link_hover extends $mol_view {
        hovered(next?: any): boolean;
        event(): Record<string, any>;
        mouseenter(next?: any): any;
        mouseleave(next?: any): any;
    }
}

declare namespace $.$$ {
    class $ss_linkpad2_link_hover extends $.$ss_linkpad2_link_hover {
        mouseenter(event?: MouseEvent): MouseEvent | undefined;
        mouseleave(event?: MouseEvent): MouseEvent | undefined;
    }
}

declare namespace $ {
    class $ss_linkpad2_link_default extends $mol_view {
        ui_id(): any;
        all_link_ids(next?: any): readonly string[];
        Link_data(id: any): any;
        type_name(): string;
        hide_contain(next?: any): boolean;
        depth(): number;
        fold(id: any): any;
        from_id(): string;
        link_id(): string;
        data(): $ss_linkpad2_link_data;
        type_data(): $ss_linkpad2_link_data;
        Block(id: any): $$.$ss_blocks_block;
        actions(): Record<string, any>;
        get_data(): Record<string, any>;
        type_and_name(): readonly any[];
        Link_id(): $ss_blocks_noedit;
        value_and_id(): readonly any[];
        links(): readonly $ss_linkpad2_link[];
        add_new_link(id: any): any;
        replace(id: any): any;
        replace_to_link(id: any): any;
        links_view(): readonly any[];
        to_link_view(): readonly any[];
        sub(): readonly any[];
        self_hovered(next?: any): boolean;
        mouseenter(): MouseEvent | undefined;
        Self(): $$.$ss_linkpad2_link_hover;
        Left_area(): $ss_blocks_noedit;
        Right_area(): $ss_blocks_noedit;
        hovered(): boolean;
        set_mouseenter_event(id: any): any;
        on_hovered(id: any, next?: any): any;
        on_focus(id: any): any;
        attr(): Record<string, any>;
        style(): Record<string, any>;
        event(): Record<string, any>;
        Type(): $ss_blocks_noedit;
        name(): string;
        Name_disabled(): $ss_blocks_noedit;
        Value_block(): $$.$ss_blocks_block;
        Value(): $mol_view;
        Links(): $mol_view;
        To_link_self(): $$.$ss_linkpad2_link_hover;
        To_link_label(): $ss_blocks_noedit;
        to_link_label_sub(): readonly any[];
        node_color(): string;
        to_link(): $$.$ss_linkpad2_link;
        To_link(): $mol_view;
        Prefix(): $ss_blocks_noedit;
        body(): readonly any[];
        Body(): $mol_view;
        label_sub(): readonly any[];
        Label(): $mol_view;
        self(): readonly any[];
        block_dom_id(): string;
        is_node(): boolean;
        hide_last_line(next?: any): boolean;
        has_links(): boolean;
        has_name(): boolean;
        folded(next?: any): boolean;
        focused(): boolean;
        color(): string;
        semitransporent(): string;
        type_name_before(): string;
        focuslineover(next?: any): any;
    }
}

declare namespace $.$$ {
    class $ss_linkpad2_link_default extends $.$ss_linkpad2_link_default {
        actions(): ReturnType<$ss_linkpad2['actions']>;
        get_data(): ReturnType<$ss_linkpad2['get_data']>;
        type_name(): string;
        type_name_before(): string;
        color(): string;
        semitransporent(): string;
        name(): string;
        has_name(): boolean;
        focuslineover(next?: any): void;
        block_id(): $ss_linkpad2_link_block_id;
        block_dom_id(): string;
        Value_block(): $ss_blocks_block;
        focused(): boolean;
        auto(): void;
        hovered(): boolean;
        links_view(): readonly any[];
        to_link_view(): readonly any[];
        fold_click(next?: any): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad2_link_node extends $ss_linkpad2_link_default {
        body(): readonly any[];
        to_link_label_sub(): readonly any[];
        self_hovered(next?: any): boolean;
        mouseenter(): MouseEvent | undefined;
        Self(): $$.$ss_linkpad2_link_hover;
        node_color(): string;
        label_sub(): readonly any[];
        Label(): $ss_blocks_noedit;
        self(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad2_link_root extends $ss_linkpad2_link_default {
        body(): readonly any[];
        to_link_label_sub(): readonly any[];
        node_color(): string;
    }
}

declare namespace $ {
    class $ss_linkpad2_link_loop extends $ss_linkpad2_link_default {
        body(): readonly any[];
        to_link_label_sub(): readonly any[];
        self_hovered(next?: any): boolean;
        mouseenter(): MouseEvent | undefined;
        Self(): $$.$ss_linkpad2_link_hover;
        node_color(): string;
        Float(): $ss_blocks_noedit;
        label_sub(): readonly any[];
        Label(): $mol_view;
        self(): readonly any[];
    }
}

export = $;