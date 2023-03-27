function formatNumber(number: number): string {
    const suffixes = ["", "N", "Tr", "T", "NT"];
    const suffixNum = Math.floor(("" + number).length / 3);
    let shortNumber = parseFloat(
        (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(3)
    );
    if (shortNumber % 1 !== 0) {
        shortNumber = Number(shortNumber.toFixed(1));
    }
    return shortNumber + " " + suffixes[suffixNum];
}


export default formatNumber