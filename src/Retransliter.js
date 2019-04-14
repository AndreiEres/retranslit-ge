export default class Retransliter {
  constructor(translitedText) {
    this.translitedText = translitedText
  }

  replaceChars(char) {
    const translitMap =
      {
        "a": 'ა',
        "b": 'ბ',
        "g": 'გ',
        "d": 'დ',
        "e": 'ე',
        "v": 'ვ', // "w" too
        "z": 'ზ',
        "t": 'თ',
        "i": 'ი',
        "k'": 'კ',
        "l": 'ლ',
        "m": 'მ',
        "n": 'ნ',
        "o": 'ო',
        "p'": 'პ',
        "zh": 'ჟ',
        "r": 'რ',
        "s": 'ს',
        "t'": 'ტ',
        "u": 'უ',
        "f": 'ფ', // "p" too
        "k": 'ქ',
        "gh": 'ღ',
        "q": 'ყ',
        "sh": 'შ',
        "ch": 'ჩ',
        "c": 'ც', // "ts" too
        "dz": 'ძ',
        "ts'": 'წ',
        "ch'": 'ჭ',
        "x": 'ხ', // "kh" too
        "j": 'ჯ',
        "h": 'ჰ',
      }

    return translitMap[char] || char
  }

  retranslit() {
    return this.translitedText
      .split('')
      .map(this.replaceChars)
      .join('')
  }
}
