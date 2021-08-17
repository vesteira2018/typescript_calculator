#### scripts
- scripts에서 개발모드와 프로덕션모드를 나누는 것이 좋아요
- 지금은 쓸 일이 없다지만 현재 디오션이 나눠져 있으니 나중에 한번 봐보시죵

#### dependencies && devDependencies
- 지금 보니까 의존성 라이브러리들이 어떤게 dependencies이고 devDependencies인건지 구분이 안됩니다
  - dependencies : production모드에서 필요한 의존성 라이브러리 (-P, --save)
  - devDependencies : develop모드에서 필요한 의존성 라이브러리 (-D, --save-dev)
- webpack, babel, eslint, typescript등등 아직 확실하게 이들이 어떻게 작동되고 무엇을 위해 돌아가는지 이해를 못하시는 듯 합니다
  - webpack : 
  - babel : 
  - eslint : javascript, JSX의 정적 분석 도구. 코드를 분석해 문법적인 오류나 안티 패턴을 찾아주고 일관된 코드 스타일로 작성하도록 도와준다.
  - typescript : Type을 명시한 javascript. Interpreter Language의 경우 타입 검사가 없어 디버깅이 어려운 문제가 있다. typescript는 정적 타입 언어이기 때문에 컴파일 시 컴파일 속도는 js보다 느리지만 안정성을 보장한다. 
- 또한 의존성들은 관련있는 것들끼리 지원되는 것이 있고 안되는 것이 있어요
- 그런 부분들까지 보시는게 좋을듯합니다.
- 구분하기가 힘들면 npm사이트에서 라이브러리를 검색하면 어느 부분에 설치해야하는지 나옵니다