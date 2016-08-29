/// <reference path="./langext.d.ts"/>
/// <reference path="../typings/index.d.ts"/>

console.readLine = function (callback: (chunk: string) => void): void {

    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    process.stdin.once("data", function (chunk) {
        callback(chunk.trim());
    });
};
