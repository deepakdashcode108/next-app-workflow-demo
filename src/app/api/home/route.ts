export async function GET(request: Request) {
  const users = [
    { id: 1, name: 'Alice in Borderland' },
    { id: 2, name: 'Bobby' }
  ];
  return Response.json(users);
}
