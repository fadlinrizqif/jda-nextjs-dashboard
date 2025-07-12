'use client';

import { use } from "react";
import { list } from "@/app/lib/list-customers";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";


export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const data = Number(id);
  const index = data - 1;
  const BackIcon = ArrowLeftIcon;
  return (
    <div>
      <Link href={'/dashboard/customers'}><BackIcon className="w-5 inline" />Back to Customers Page</Link>
      <br /><br />
      <h1>Customers Detail</h1>
      <br />
      <p>{list[index].name}</p>
      <p>{list[index].phone}</p>
      <p>{list[index].email}</p>
    </div >

  )
}
