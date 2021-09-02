import Link from "next/link";
import Image from "next/image";
import Layout from "./layout";


export default function TestApp() {
  return (
    <Layout>
      <h2>Hello, World!!!</h2>
      <hr></hr>
      <Image
        src="/147198.jpg"
        height={480}
        width={1080}
      />
      <p>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </p>
      <hr></hr>
    </Layout>
  )
}
