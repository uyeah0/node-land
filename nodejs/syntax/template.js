var name = 'k8805';
var letter = 'Dear' + name + '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut felis elit.  Curabitur laoreet quis massa ut faucibus. ' + name + 'Suspendisse';

// 리터럴 : 정보를 표현하는 방법
var a = 1; // 숫자라는 데이터를 표현하는 리터럴
var letter = `Dear ${name}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut felis elit. ${1+1} Curabitur laoreet quis massa ut faucibus. ${name} Suspendisse`;

console.log(letter);