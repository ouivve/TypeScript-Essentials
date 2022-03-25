function returnVoid(message: string): void {
  console.log(message);

  return undefined;
}
// function returnVoid(message: string): void

const r = returnVoid("리턴이 없다"); // const r: void

// void로 지정된 함수는 리턴으로 유일하게 undefined를 할당해줄 수 있다.
// void는 리턴값으로 무언가를 할 수 없는 상태.
// 즉 아무것도 하지 않겠다는 것을 명시적으로 표현하고 막는 역할을 한다.
