export type DeployStatus = 'create' | 'ready' | 'fail';
export declare enum LogType {
    Job = "job",
    Deploy = "deploy"
}
export type LanguageId = 'node' | 'ts' | 'rb' | 'py' | 'cs' | 'cob' | 'file' | 'rpc';
export declare enum ValueId {
    METACALL_BOOL = 0,
    METACALL_CHAR = 1,
    METACALL_SHORT = 2,
    METACALL_INT = 3,
    METACALL_LONG = 4,
    METACALL_FLOAT = 5,
    METACALL_DOUBLE = 6,
    METACALL_STRING = 7,
    METACALL_BUFFER = 8,
    METACALL_ARRAY = 9,
    METACALL_MAP = 10,
    METACALL_PTR = 11,
    METACALL_FUTURE = 12,
    METACALL_FUNCTION = 13,
    METACALL_NULL = 14,
    METACALL_CLASS = 15,
    METACALL_OBJECT = 16,
    METACALL_SIZE = 17,
    METACALL_INVALID = 18
}
interface Type {
    name: string;
    id: ValueId;
}
interface Return {
    type: Type;
}
interface Argument {
    name: string;
    type: Type;
}
interface Signature {
    ret: Return;
    args: Argument[];
}
interface Func {
    name: string;
    signature: Signature;
    async: boolean;
}
interface Scope {
    name: string;
    funcs: Func[];
    classes: string[];
    objects: string[];
}
interface Handle {
    name: string;
    scope: Scope;
}
export interface Deployment {
    status: DeployStatus;
    prefix: string;
    suffix: string;
    version: string;
    packages: Record<LanguageId, Handle[]>;
    ports: number[];
}
export interface Create {
    suffix: string;
    prefix: string;
    version: string;
}
export type MetaCallJSON = {
    language_id: LanguageId;
    path: string;
    scripts: string[];
};
export {};
