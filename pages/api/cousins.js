export async function getCousins() {
  return ['Alice', 'Natasha', 'Zaida', 'Sonia', 'Elsa', 'Erca']
}

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      res.status(200).json(await getCousins())
      break

    default:
      res.status(400).json({ success: false, msg: 'Bad request' })
      break
  }
}
