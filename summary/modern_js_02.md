#### 벨로퍼트와 함께하는 모던 자바스크립트    
---
### 2장. 알아두면 유용한 JS 문법 😎   
   
✔ 삼항 연산자(중첩도 가능하지만 가독성은 안 좋음)

    ◼  조건 ? True : False    
    
✔ 단축 평가 논리 계산법   
     
    ◼ 논리 연산자 사용할 때 무조건 T/F 사용하지 않아도 됨   
    ◼ 연산자로 코드 단축하기   
        ◾ https://learnjs.vlpt.us/useful/03-short-circuiting.html    
       
    cf. || 연산자는 어떤 값이 Falsy할 때 대체 사용 값을 정해줄 경우 유용   
      
✔ 조건문 응용   
    
    ◼ 특정 값이 여러 값 중 하나인지 확인해야 할 때   
        ◾ 배열 만들고 배열의 includes(T/F 리턴) 함수 사용하기   
    ◼ 값에 따라 다른 결과물을 반환해야 할 때   
        ◾ switch/case문(얘네는 return할 때 break 생략 가능)   
        ◾ 반환 값이 다른 조건이 여러 개인 경우 객체 활용하면 좋음    
    ◼ 값에 따라 실행해야 하는 코드 구문이 다를 때   
        ◾ 객체에 함수 넣기    
   
✔ **비구조화 할당(구조분해) 문법**   
   
    ◼ 비구조화 할당 문법 사용하면 객체 안에 있는 값 추출해서 변수나 상수로 바로 선언 가능    
    ◼ 비구조화 할당 이름 바꾸기 : 콜론 사용    
        ◾ const { name: nickname } = animal   
        => animal 객체 안에 있는 name을 nickname이라고 선언하겠다는 의미    

✔ **spread / rest**   
   
    ◼ spread   
        ◾ spread 연산자 : ...   
        ◾ 기존의 것을 건드리지 않고 새로운 객체를 생성   
    ◼ rest   
        ◾ spread와 생긴 건 비슷한데 역할은 완전 다름   
        ◾ 객체, 배열, 함수 파라미터에서 사용 가능
        ◾ 원하는 값을 넣고 뺄 수 있음    
        
    cf. 함수에서 값을 읽을 때는 값이 파라미터, 값을 넣어줄 때는 값이 인자    
   
✔ Scope   
   
    ◼ Global Scope   
        ◾ 코드의 모든 범위에서 사용 가능   
    ◼ Function Scope   
        ◾ 함수 안에서만 사용 가능   
    ◼ Block Scope   
        ◾ if, for, switch 등 특정 블록 내부에서만 사용 가능   
        ◾ const/let으로 선언한 값은 Block Scope로 선언됨(블록 밖의 범위에서 똑같은 이름 가진 값이 있어도 영향 X)   
        ◾ var는 Function Scope : 블록 내부에서 선언한 값이 블록 밖에도 영향을 미침   
   
✔ **Hoisting**   
   
    ◼ 아직 선언되지 않은 함수/변수를 끌어올려서 사용할 수 있는 방식   
    ◼ const/let : Hoisting은 되지만 변수 생성 과정이 달라서 일시적인 사각지대가 생성되어 초기화 전에는 접근 불가하다는 레퍼런스 에러 표시