Angular Pilot Project
# 1. 기본 환경
1. Angular Pilot 을 실행하기 위해서 다음이 필요함
  - node
  - grunt
  
2. grunt 설치 법
npm install -g grunt
npm install -g grunt-cli


3. 다음 실행
  project home > npm install
  project home / client > npm install
  project home / server > npm install


# 2. 개발시 다음 실행
    2.1. Auto Build if client files change
         project home > grunt monitor
    2.2. Run Server
         project home / server > nodemon server


# 3.참고자료

1. Build시 특정 HTML 치환 : https://www.npmjs.org/package/grunt-processhtml