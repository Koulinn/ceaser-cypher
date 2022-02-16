function rot13(str) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const codedArray = str.split("");

  const decodedArray = codedArray.map((letter) => {
    //   first check if the element is a letter
    if (alphabet.includes(letter)) {
      const indexLetter = alphabet.indexOf(letter);
      //check if it belongs to the first half of the alphabet
      if (indexLetter <= 12) {
        //   return it shifted
        return alphabet[indexLetter + 13];

        // shift the second half to the first half
      } else {
        //shift the second half to the first half
        const remainingIndex = indexLetter - 13;
        return alphabet[remainingIndex];
      }
      //   if it is not return
    } else {
      return letter;
    }
  });

  return decodedArray.join().replaceAll(",", "");
}

rot13("M N % 6 R");
