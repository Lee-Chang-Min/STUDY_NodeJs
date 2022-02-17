console.log(__filename); //현재 파일 경로
console.log(__dirname); //현재 폴더 경로

console.log(this); //전역 스코프의 this 만 빈객체
console.log(this === module.exports);

function a(){
    console.log(this === global);
}
a();
// 함수 선언문 내부의 this는 global(전역) 객체를 가리킴

