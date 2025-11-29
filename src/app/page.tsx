import Image from "next/image";

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/home');
  const data = await response.json();
  return (
    <div>
      {
        JSON.stringify(data)
      }
    </div>
  );
}
