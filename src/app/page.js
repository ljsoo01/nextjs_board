import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/util/db";

export default async function Home() {
  const client = await connectDB; // 오래 걸리는 작업은 건너뛰고 다음 코드 실행 (-> await으로 기다리게 변경)
  const db = (await connectDB).db('mydb')  // 데이터베이스 이름
  let result = await db.collection('post').find().toArray();
  console.log(result)
  return (
    <div>
      <p>{result[0]?.title}</p>
      <p>{result[0]?.content}</p>
      <p>{result[1]?.title}</p>
      <p>{result[1]?.content}</p>
      <p>{result[2]?.title}</p>
      <p>{result[2]?.content}</p>
    </div>
  );
}

// app/layout.js: page.js를 감싸고 있는 main페이지
// app/page.js: Home페이지
// global.css: layout.js에 연결된 css
// page.module.css: page.js에 연결된 css

// app 폴더가 'http://localhost:3000/'
// http://localhost:3000/list --> app 폴더에 list폴더 만들고 page.js
