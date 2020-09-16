#### 벨로퍼트와 함께하는 모던 자바스크립트    
---
### 3장. 자바스크립트에서 비동기 처리 다루기      
   
✔ Promise   
   
    ◼ 비동기 작업을 조금 더 편하게 처리할 수 있도록 하는 역할
    ◼ Promise는 성공할 수도 있고 실패할 수도 있음    
    ◼ Promise 생성   
        ◾ const myPromise = new Promise((resolve, reject) => { ... })   
        ◾ 성공할 때는 resolve 호출, 실패할 때는 reject 호출
   
     
cf. 콜백 함수? ~정리글 따로 써야지,,~       
: 다른 함수의 매개변수로 **함수를 전달**하고, 어떤 이벤트가 발생한 후 매개변수로 전달된 함수가 다시 호출되는 것 (간단한 예시는 아래 👇)      
   
```javascript
// 함수 정의   
function first(a, b, callback) {
    let v = a*b;
    callback(v);
}   
    
// 함수 호출   
first(1, 2, function(v)) {
    // 콜백 함수   
    console.log(v);
}
```   
   
1️⃣ first 함수 호출 시 파라미터로 익명 함수를 넘겨줌   
2️⃣ first 함수는 익명의 함수 파라미터를 callback이라는 이름으로 받음   
3️⃣ first가 실행되면 a, b를 곱한 결과 값을 callback 함수의 파라미터로 넣어줌     
      
      
✔ Promise 예시(1초 뒤에 성공시키는 상황)      
    
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

myPromise.then(n => {
    console.log(n);
});
```