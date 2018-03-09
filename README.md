## Redux 어떤 환경에서 사용 해야 하는가?
사내 발표용 데모 코드<br>
https://www.evernote.com/shard/s147/sh/c4a20e24-2cbf-49d5-a3d5-45dbb75dd7d6/de7d176d23799e60

- 컴포넌트 상태 전부를 리덕스에 담을 필요 없다.
- 컴포넌트의 상태를 다른 node의 컴포넌트에서 참조하는 일이 발생 할때 리덕스 스토어를 활용하면 적절하다.
- 리덕스는 필수가 아니며, 복잡한 상태 관리를 하기 위한 라이브러리이다.

## Branches
- master: 리덕스를 사용한 버전
- no-redux: 리덕스를 사용하지 않음 버전
