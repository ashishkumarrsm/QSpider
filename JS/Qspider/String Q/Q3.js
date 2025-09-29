// count the number of vowels and consonants in a string

let str = " ashish kumar ";

let vowelsConsonantCount = (str) => {
  let vowelCount = 0;
  let consonantCount = 0;
  let char = "";
  for (let i = str.lrngth; i > 0; i--) {
    char = str[i];
  }
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    vowelCount++;
  } else {
    consonantCount++;
  }
  console.log(vowelCount);
  console.log(consonantCount);
  return { vowelCount, consonantCount };
};
vowelsConsonantCount(str);
