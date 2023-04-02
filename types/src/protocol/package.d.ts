import { MetaCallJSON } from './deployment.js';
export declare const findFilesPath: (path?: string, ignoreFiles?: string[]) => Promise<string[]>;
export declare const findMetaCallJsons: (files: string[]) => string[];
export declare const findRunners: (files: string[]) => Set<string>;
export declare enum PackageError {
    Empty = "No files found in the current folder",
    JsonNotFound = "No metacall.json found in the current folder",
    None = "Package correctly generated"
}
interface PackageDescriptor {
    error: PackageError;
    files: string[];
    jsons: string[];
    runners: string[];
}
export declare const generatePackage: (path?: string) => Promise<PackageDescriptor>;
export declare const generateJsonsFromFiles: (files: string[]) => MetaCallJSON[];
export {};
