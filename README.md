Great Library Project

# 환경 설정
## 1. 개발 환경
  * Node
  * 프론트 : BootStrap, Angular etc
  * 서버 : expressJS
  * 빌드 : grunt
  * 테스트 : Karma (브라우저 시뮬레이션) , Jasmine (단위 테스트)

## 2. Global NPM 모듈 설치
npm install -g grunt-cli
npm install -g karma-cli

## 3. 프로젝트 클론
  * 현재 프로젝트를 로컬 Repository 로 클론
  * 프로젝트 내에서 사용하는 NPM모듈 일괄 설치
     GreatLibrary> npm install

## 4. 프로젝트 빌드
  * 프로젝트를 빌드하여 client/dist 폴더에 복사한다.
    GreatLibrary> grunt
  * 개발시 다음 스크립트를 실행하여 자동 빌드 하도록 한다.
     GreatLibrary> grunt monitor

## 6. 서버 실행
   * GreatLibrary> nodemon server/server
   * 또는 GreatLibrary>  grunt nodemon  
    (nodemon server/server.js 를 실행시킴)
   
# Quick Start
## 빌드
  * GreatLibrary> grunt
## 개발시
  * GreatLibrary> grunt dev 
  (서버와 자동 빌드를 동시 실행)

# 참고자료
1. Build시 특정 HTML 치환 : https://www.npmjs.org/package/grunt-processhtml

2. Bootstrap3 테마 추가: client/theme/index.html 또는 client/theme/Documentation/index.html 참조
