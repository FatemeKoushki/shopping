import Link from "next/link";

export default function Page() {
  return (
    <div  style={{display : "flex" , flexFlow : "column",justifyContent : "center" , alignItems:"center" , marginTop : "300px" , fontSize : "20px" , textAlign : "center"}} >
      <div >
        <div style={{marginBottom : "10px"}}>
          <span>404</span>
          <span>چنین صفحه ای پیدا نشد!</span>
        </div>
        <Link href="/" className="block text-sky-500"  style={{color : "blue" , display : "block"}}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
