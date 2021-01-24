var fs = require('fs');

const COLORS = {    // some values missing because there are multiple blacks
    "656565": 0,
    "002d69": 1,
    "131f7f": 2,
    "3c137c": 3,
    "600b62": 4,
    "730a37": 5,
    "710f07": 6,
    "5a1a00": 7,
    "342800": 8,   
    "0b3400": 9,
    "003c00": 10,
    "003d10": 11,
    "003840": 12,
    "000000": 13,
    "aeaeae": 16,
    "0f63b3": 17,
    "4051d0": 18,
    "7841cc": 19,
    "a736a9": 20,
    "c03470": 21,
    "bd3c30": 22,
    "9f4a00": 23,
    "6d5c00": 24,
    "366d00": 25,
    "077704": 26,
    "00793d": 27,
    "00727d": 28,
    "fefeff": 32,
    "5db3ff": 33,
    "8fa1ff": 34,
    "c890ff": 35,
    "f785fa": 36,
    "ff83c0": 37,
    "ff8b7f": 38,
    "ef9a49": 39,
    "bdac2c": 40,
    "85bc2f": 41,
    "55c753": 42,
    "3cc98c": 43,
    "3ec2cd": 44,
    "4e4e4e": 45,
    "fefeff": 48,
    "bcdfff": 49,
    "d1d8ff": 50,
    "e8d1ff": 51,
    "fbcdfd": 52,
    "ffcce5": 53,
    "ffcfca": 54,
    "f8d5b4": 55,
    "e4dca8": 56,
    "cce3a9": 57,
    "b9e8b8": 58,
    "aee8d0": 59,
    "afe5ea": 60,
    "b6b6b6": 61
}

writeIntegersToBinary([
    COLORS["afe5ea"],
    COLORS["b6b6b6"]
])

function writeIntegersToBinary(intArray){
    var palette = fs.createWriteStream('myBinaryFile');
    var buffer = Buffer.from(intArray);
    palette.write(buffer);
    palette.end();
}

/*
    00: 656565
    01: 002d69
    02: 131f7f
    03: 3c137c
    04: 600b62
    05: 730a37
    06: 710f07
    07: 5a1a00
    08: 342800
    09: 0b3400
    0a: 003c00
    0b: 003d10
    0c: 003840
    0d: 000000
    0e: 000000
    0f: 000000
    10: aeaeae
    11: 0f63b3
    12: 4051d0
    13: 7841cc
    14: a736a9
    15: c03470
    16: bd3c30
    17: 9f4a00
    18: 6d5c00
    19: 366d00
    1a: 077704
    1b: 00793d
    1c: 00727d
    1d: 000000
    1e: 000000
    1f: 000000
    20: fefeff
    21: 5db3ff
    22: 8fa1ff
    23: c890ff
    24: f785fa
    25: ff83c0
    26: ff8b7f
    27: ef9a49
    28: bdac2c
    29: 85bc2f
    2a: 55c753
    2b: 3cc98c
    2c: 3ec2cd
    2d: 4e4e4e
    2e: 000000
    2f: 000000
    30: fefeff
    31: bcdfff
    32: d1d8ff
    33: e8d1ff
    34: fbcdfd
    35: ffcce5
    36: ffcfca
    37: f8d5b4
    38: e4dca8
    39: cce3a9
    3a: b9e8b8
    3b: aee8d0
    3c: afe5ea
    3d: b6b6b6
    3e: 000000
    3f: 000000
*/ 