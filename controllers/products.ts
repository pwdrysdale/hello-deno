import { Product } from "../types.ts"
import { v4 } from "https://deno.land/std/uuid/mod.ts"

let products: Product[] = [
  {
    id: v4.generate(),
    name: "Product 1",
    price: 100,
    description: "This is product 1",
  },
  {
    id: v4.generate(),
    name: "Product 2",
    price: 200,
    description: "This is product 2",
  },
  {
    id: v4.generate(),
    name: "Product 3",
    price: 300,
    description: "This is product 3",
  },
]

// @desc    Get all products
// @route   GET /api/v1/products
export const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  }
}

// @desc    Get single product
// @route   GET /api/v1/products/:id
export const getProduct = ({
  params,
  response,
}: {
  params: { id: string }
  response: any
}) => {
  const product: Product | undefined = products.find((p) => p.id === params.id)

  if (product) {
    response.status = 200
    response.body = {
      success: true,
      data: product,
    }
  } else {
    response.status = 404
    response.body = {
      success: false,
      msg: "No product found",
    }
  }
}

// @desc    Add product
// @route   POST /api/v1/products
export const addProduct = async ({
  request,
  response,
}: {
  request: any
  response: any
}) => {
  const body = await request.body()

  if (!request.hasBody) {
    response.status = 400
    response.body = {
      success: false,
      msg: "No data",
    }
  } else {
    const product: Omit<Product, "id"> = body.value
    const newProduct: Product = { ...product, id: v4.generate() }
    products.push(newProduct)
    response.status = 201
    response.body = {
      success: true,
      data: newProduct,
    }
  }
}

// @desc    Update product
// @route   PUT /api/v1/products/:id
export const updateProduct = async ({
  params,
  request,
  response,
}: {
  params: { id: string }
  request: any
  response: any
}) => {
  const product: Product | undefined = products.find((p) => p.id === params.id)

  if (product) {
    const body = await request.body()
    const updateData: Partial<Product> = body.value

    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    )

    response.status = 200
    response.body = {
      success: true,
      data: products,
    }
  } else {
    response.status = 404
    response.body = {
      success: false,
      msg: "No product found",
    }
  }
}

// @desc    Delete product
// @route   DELETE /api/v1/products/:id
export const deleteProduct = ({
  params,
  response,
}: {
  params: { id: string }
  response: any
}) => {
  products = products.filter((p) => p.id !== params.id)
  response.status = 200
  response.body = {
    success: true,
    data: products,
  }
}
