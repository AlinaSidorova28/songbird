import birdsData from './birds';

const showAnswers = (answersArray) => {
  answersArray.map((el, i) => console.log(`Answer-${i + 1}: ${birdsData[i][el].name}`));
};

const setAnswers = () => {
  const answersArray = [];
  for (let i = 0; i < 6; i += 1) {
    answersArray.push(Math.floor(Math.random() * 6));
  }
  showAnswers(answersArray);
  return answersArray;
};

export default setAnswers;
