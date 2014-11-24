Angular Pilot Project
# 1. 기본 환경
1. Angular Pilot 을 실행하기 위해서 다음이 필요함
  - node
  - grunt
  
2. grunt 설치 법
npm install -g grunt
npm install -g grunt-cli

3. 프로젝트 최초 클론 후 다음 실행

  project home > npm install

  project home / client > npm install

  project home / server > npm install

4. npm install 후 빌드하기
  project home > grunt


# 2. 개발시 다음 실행
  1. Client 파일이 변경되면 자동 빌드. Client 파일이 빌드되면, 빌드된 파일을 server/resources 에 복사한다.
     
     project home > grunt monitor
         
  2. 서버 실행
  
    project home / server > nodemon server


# 3.참고자료

1. Build시 특정 HTML 치환 : https://www.npmjs.org/package/grunt-processhtml
