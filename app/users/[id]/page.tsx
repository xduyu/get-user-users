async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
    const user = await getUser(id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Город:</strong> {user.address?.city ?? "нет данных"}</p>
      <p><strong>Сайт:</strong> {user.website}</p>
    </div>
  );
}
