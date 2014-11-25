Angular Pilot Project
# 1. 기본 환경
1. Angular Pilot 을 실행하기 위해서 다음이 필요함
  * node   :  nodejs.org 에서 node 설치
  * grunt  :  npm install -g grunt-cli

2. 프로젝트 최초 클론 후 다음 실행 
  (package.json 에 정의된 node module을 설치함)
  * GreatLibrary> npm install

4. 프로젝트 빌드
  * GreatLibrary> grunt

# 2. 개발시 다음 실행
  1. Client 파일이 변경되면 자동 빌드

    *  GreatLibrary> grunt monitor
    
    (grunt-watch 를 실행. Client 파일이 빌드되면, 빌드된 파일을 server/resources 에 복사한다.)

  2. 서버 실행
  
    * GreatLibrary> nodemon server/server
    * 또는 GreatLibrary>  grunt nodemon   
    
    (nodemon server/server.js 를 실행시킴)
 
  3. monitor , nodemon task 동시 실행
    * GreatLibrary> grunt dev
   
# 3.참고자료

1. Build시 특정 HTML 치환 : https://www.npmjs.org/package/grunt-processhtml
