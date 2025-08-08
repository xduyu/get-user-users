import Link from 'next/link'

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export type User = {
    name: string,
    id: number,
    username: string,
    email: string
}

export default async function Page() {
    const users = await getUsers()
    console.log(users)
  return (
    <div>
        {users?.map((el: User) => {
            return (
                <li key={el.id}>
                    <Link href={`/users/${el.id}`}>{el.name} | {el.email}</Link>
                </li>
            )
        })}
    </div>
  )
}
