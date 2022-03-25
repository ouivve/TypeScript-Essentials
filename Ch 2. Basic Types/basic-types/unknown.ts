declare const maybe: unknown;

// const aNumber: number = maybe; // Error - unknown 형식은 number 형식에 할당할 수 없음

if (maybe === true) {
  const aBoolean: boolean = maybe; // const maybe: true

  // const aString: string = maybe; // Error
}

if (typeof maybe === "string") {
  const aString: string = maybe; // const maybe: string

  // const aBoolean: boolean = maybe; // Error
}
