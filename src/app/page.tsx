import Google from "./(components)/auth/google/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Recipe Pantry</h1>
      <Google />
    </main>
  )
}
