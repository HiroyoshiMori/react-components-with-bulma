/**
 * Sleep like other languages.
 *
 * @param ms How long sleep in milliseconds
 * @see https://std9.jp/articles/01fmrrhkgrd5jkh2k0t55zbype
 */
export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get date string with format
 *
 * @param date
 * @param format
 * @see https://ribbit.konomi.app/blog/javascript-date-format/
 */
export function getFormattedDate(date: Date, format: string) {
    const symbol = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        w: getWeekNumber(date),
    };

    const formatted: string = format.replace(/(M+|d+|h+|m+|s+|w+)/g, (v) =>
        ((v.length > 1 ? "0" : "") + symbol[v.slice(-1) as keyof typeof symbol]).slice(-2)
    );

    return formatted.replace(/(y+)/g, (v) =>
        date.getFullYear().toString().slice(-v.length)
    );
}

/**
 * Get Week number of the year
 * @param date
 */
export function getWeekNumber(date: Date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const firstMonday = new Date(
        oneJan.getTime()
        + (1 + (oneJan.getDay() - (oneJan.getDay() < 2 ? 0 : 7))) * (24 * 60 * 60 * 1000)
    );
    const numberOfDays = Math.floor(
        (date.getTime() - firstMonday.getTime()) / (24 * 60 * 60 * 1000)
    );
    return Math.ceil((1 + numberOfDays) / 7);
}

/**
 * Check value in array with Regex.
 * 
 * @param arr array to check values
 * @param regex regex
 * @returns number same as Array.indexOf
 */
export function ArrayRegexIncludes(arr: Array<string|number>, regex: RegExp) {
    for (const i in arr) {
        const testStr = arr[i] as string;
        if (regex.test(testStr)) {
            return arr.indexOf(testStr);
        }
    }
    return -1;
}

/**
 * Convert Map to Object for dataset of HTML elements which as key of 'data-*'
 * @param dataSet
 */
export function convertDataSet(dataSet: Map<string, any>) {
    let props = {} as any;
    for (const key of dataSet.keys()) {
        const attributeKey = `data-${key}`;
        props[attributeKey] = dataSet.get(key);
    }
    return props;
}

/**
 * Generate random ID
 */
export function generateId(): string {
    var S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var N=16
    return Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n)=>S[n%S.length]).join('')
}

// -----
// Define functions for removing indent in string into Array.prototype
// @see; https://stackoverflow.com/questions/62415501/typescript-cant-use-array-prototype
// -----
declare global {
    interface Array<T> {
        min(): number;
        flatten(): any[];
    }
}

// ----
// Remove indent in string given especially heardoc
// @see: https://tex2e.github.io/blog/javascript/dedent
// ----
/**
 * Get smallest of the numbers in array
 */
Array.prototype.min = function() {
    return Math.min.apply(null, this);
};
Array.prototype.flatten = function() {
    return Array.prototype.concat.apply([], this);
};

/**
 * Remove indent in string given especially heardoc
 * @param str
 */
export function deIndent(str: string): string {
    function scan(str: string, regex: RegExp) {
        if (!regex.global) throw "regex must have 'global' flag set";
        let m, result = [];
        while (m = regex.exec(str)) {
            m.shift();
            result.push(m);
        }
        return result;
    }

    str = str.trim();
    const margin = scan(str, /^( +)/gm)
        .flatten()
        .map((line: string) => line.length)
        .min();

    return str
        .replace(new RegExp(`^ {${margin}}`, 'gm'), '')
        .replace(/^\n/, '');
}
