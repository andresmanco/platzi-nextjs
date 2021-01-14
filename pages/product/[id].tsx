import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setProduct(data)
      })
  })

  return (
    <section>
      <h1>Página producto: {product?.name}</h1>
      <h2>ID: {query.id}</h2>
    </section>
  )
}

export default ProductPage
