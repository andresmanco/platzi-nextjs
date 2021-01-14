import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import { useRouter } from 'next/router'

const Avo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id

  const data = await db.getById(`${id}`)
  response.status(200).json({ data })
}

export default Avo
