export declare const CheckSumGenerator: {
    hex_chr: string;
    hex: (num: number) => string;
    str2blks_SHA1: (str: string) => any[];
    add: (x: number, y: number) => number;
    rol: (num: number, cnt: number) => number;
    ft: (t: number, b: number, c: number, d: number) => number;
    kt: (t: number) => 1518500249 | 1859775393 | -1894007588 | -899497514;
    calcSHA1FromByte: (byteArr: string[]) => string;
    calcSHA1: (str: string) => string;
};
