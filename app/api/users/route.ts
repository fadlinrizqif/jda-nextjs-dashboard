import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";



const prisma = new PrismaClient();


export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany({
    where: {
      deleted_at: null
    }
  })

  return NextResponse.json(products, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, price } = body;

  const newProduct = await prisma.products.create({
    data: { name, price }
  })

  return new NextResponse(newProduct, {
    status: 201,
  })
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { id, name, price } = body;

  const updateProduct = await prisma.products.update({
    where: { id },
    data: { name, price }
  })

  return new NextResponse(updateProduct, {
    status: 200,
  })
}


export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  const deleteProduct = await prisma.products.update({
    where: { id },
    data: { deleted_at: new Date() }
  })

  return new NextResponse(deleteProduct, {
    status: 200,
  })
}
















































//let users = [
//  { id: 1, name: 'Monitor', price: 1000000 },
//];
//
//export async function GET(request: Request) {
//  return new Response(JSON.stringify(users), {
//    status: 200,
//    headers: { 'Content-Type': 'application/json' },
//  })
//}
//
//export async function POST(request: Request) {
//  const body = await request.json();
//  const { name, price } = body;
//
//  const newUser = { id: Date.now(), name, price };
//  users.push(newUser);
//  return new Response(JSON.stringify(newUser), {
//    status: 201,
//    headers: { 'Content-Type': 'application/json' }
//  })
//}
//
//export async function PATCH(request: Request) {
//  const body = await request.json();
//  const { id, name, price } = body;
//
//  const existingUser = users.find((user) => user.id === id);
//  if (!existingUser) {
//    return new Response(JSON.stringify({ message: 'User Not Found' }), {
//      status: 404,
//      headers: { 'Content-Type': 'application/json' }
//    })
//  }
//
//  existingUser.name = name;
//  existingUser.price = price;
//  return new Response(JSON.stringify({ ...existingUser, name, price }), {
//    status: 200,
//    headers: { 'Content-Type': 'application/json' },
//  })
//}
//
//export async function DELETE(request: Request) {
//  const body = await request.json();
//  const { id, name, price } = body;
//
//  const existingUser = users.find((user) => user.id === id);
//
//  if (!existingUser) {
//    return new Response(JSON.stringify({ message: 'User Not found' }), {
//      status: 404,
//      headers: { 'Content-Type': 'application/json' },
//    })
//  }
//
//  users = users.filter((user) => user.id !== id);
//  return new Response(JSON.stringify({ message: 'User Alredy Deleted' }), {
//    status: 200,
//    headers: { 'Content-Type': 'application/json' }
//  })
//}
