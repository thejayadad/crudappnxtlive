import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { FiArrowLeftCircle, FiPlusCircle } from "react-icons/fi";

export default async function Home() {
  const post = await prisma.post.findMany({})
  return (
    <div>
    <div className='mx-auto max-w-screen-lg border-b-[1px]'>
      <nav className='flex items-center p-2'>
        <Link
        href={'/new'}
        className='flex items-center'>
          <p className='text-xl font-extrabold text-gray-600 lead py-4'>MyBlog</p>
          <FiPlusCircle className='h-6 w-6 ml-4' /><span>New Post</span>
        </Link>
      </nav>
    </div>
  </div>
  );
}
