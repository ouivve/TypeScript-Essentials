function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("anything!");

any1.toString();

let looselyTyped: any = {};

let x = looselyTyped.a.b.c.d; // 아무렇게나 작성해도 오류가 발생하지 않음

function leakingAny(obj: any) {
  //   const a = obj.num; // const a: any
  // 누수를 막는 방식 -> 타입을 지정
  const a: number = obj.num;

  const b = a + 1; // const b: any
  return b;
}

const c = leakingAny({ num: 0 }); // const c: any -> number를 기대했지만 any

// const d: string = c.indexOf("0");
