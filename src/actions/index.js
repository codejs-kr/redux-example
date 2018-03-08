// 액션 타입을 정의 한다.
export const SET_COLOR = "SET_COLOR";

// 액션 객체를 만들어주는 액션 생성 함수
export function setColor(color) {
  return {
    type: SET_COLOR,
    color: color
  };
}
