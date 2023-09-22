import Image from 'next/image'

export default function Home() {
  const lista = [
    {nome: "vinicius", idade: 18, aluno: true},
    {nome: "matheus", idade: 12, aluno: true},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {
          lista.map((item)=>(
            <li key={item.nome}>
              {item.nome} - {item.idade} - {
                item.aluno && 'É aluno'
              }
            </li>
          ))
        }
      </ul>
    </main>
  )
}
