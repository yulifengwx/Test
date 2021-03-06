// Generated by typings
// Source: https://raw.githubusercontent.com/ServiceStack/servicestack-client/e82c7d62b3667f3da2a55c006a8e49a0fe3f4c4b/lib/index.d.ts
declare module 'servicestack-client' {
import 'isomorphic-fetch';
export interface IReturnVoid {
    createResponse(): any;
}
export interface IReturn<T> {
    createResponse(): T;
}
export class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: {
        [index: string]: string;
    };
}
export class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
}
export class ErrorResponse {
    responseStatus: ResponseStatus;
}
export interface ISseCommand {
    userId: string;
    displayName: string;
    channels: string;
    profileUrl: string;
}
export interface ISseHeartbeat extends ISseCommand {
}
export interface ISseJoin extends ISseCommand {
}
export interface ISseLeave extends ISseCommand {
}
export interface ISseUpdate extends ISseCommand {
}
export interface ISseConnect extends ISseCommand {
    id: string;
    unRegisterUrl: string;
    heartbeatUrl: string;
    updateSubscriberUrl: string;
    heartbeatIntervalMs: number;
    idleTimeoutMs: number;
}
export interface IReconnectServerEventsOptions {
    url?: string;
    onerror?: (...args: any[]) => void;
    onmessage?: (...args: any[]) => void;
    errorArgs?: any[];
}
/**
 * EventSource
 */
export enum ReadyState {
    CONNECTING = 0,
    OPEN = 1,
    CLOSED = 2,
}
export interface IEventSourceStatic extends EventTarget {
    new (url: string, eventSourceInitDict?: IEventSourceInit): IEventSourceStatic;
    url: string;
    withCredentials: boolean;
    CONNECTING: ReadyState;
    OPEN: ReadyState;
    CLOSED: ReadyState;
    readyState: ReadyState;
    onopen: Function;
    onmessage: (event: IOnMessageEvent) => void;
    onerror: Function;
    close: () => void;
}
export interface IEventSourceInit {
    withCredentials?: boolean;
}
export interface IOnMessageEvent {
    data: string;
}
export class ServerEventsClient {
    channels: string[];
    options: any;
    eventSource: IEventSourceStatic;
    eventSourceUrl: string;
    updateSubscriberUrl: string;
    eventSourceStop: boolean;
    constructor(baseUrl: string, channels: string[], options?: any, eventSource?: IEventSourceStatic);
    onMessage(e: IOnMessageEvent): void;
    reconnectServerEvents(opt?: any): IEventSourceStatic;
    invokeReceiver(r: any, cmd: any, el: any, msg: any, e: any, name: any): void;
    updateChannels(channels: any): void;
}
export class HttpMethods {
    static Get: string;
    static Post: string;
    static Put: string;
    static Delete: string;
    static Patch: string;
    static Head: string;
    static Options: string;
    static hasRequestBody: (method: string) => boolean;
}
export class JsonServiceClient {
    baseUrl: string;
    replyBaseUrl: string;
    oneWayBaseUrl: string;
    mode: RequestMode;
    credentials: RequestCredentials;
    headers: Headers;
    userName: string;
    password: string;
    static toBase64: (rawString: string) => string;
    constructor(baseUrl: string);
    setCredentials(userName: string, password: string): void;
    get<T>(request: IReturn<T>): Promise<T>;
    delete<T>(request: IReturn<T>): Promise<T>;
    post<T>(request: IReturn<T>): Promise<T>;
    put<T>(request: IReturn<T>): Promise<T>;
    patch<T>(request: IReturn<T>): Promise<T>;
    send<T>(method: string, request: IReturn<T>): Promise<T>;
}
export const toCamelCase: (key: string) => string;
export const sanitize: (status: any) => any;
export const nameOf: (o: any) => any;
export const css: (selector: string | NodeListOf<Element>, name: string, value: string) => void;
export const splitOnFirst: (s: string, c: string) => string[];
export const splitOnLast: (s: string, c: string) => string[];
export const humanize: (s: any) => any;
export const queryString: (url: string) => any;
export const combinePaths: (...paths: string[]) => string;
export const createPath: (route: string, args: any) => string;
export const createUrl: (route: string, args: any) => string;
export const appendQueryString: (url: string, args: any) => string;
export const bytesToBase64: (aBytes: Uint8Array) => string;
export const toDate: (s: string) => Date;
export const toDateFmt: (s: string) => string;
export const padInt: (n: number) => string | number;
export const dateFmt: (d?: Date) => string;
export const dateFmtHM: (d?: Date) => string;
export const timeFmt12: (d?: Date) => string;
}
