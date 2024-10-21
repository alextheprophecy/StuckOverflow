import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Search} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const Navbar = () => {
    return (
        <header className="bg-white border-t-4 border-orange-400 shadow-sm">
            <div className="container mx-auto px-4 h-[50px] flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Image src="/placeholder.svg?height=30&width=150" height={30} width={150} alt="Stack Overflow" className="h-[30px]" />
                <nav className="hidden md:flex space-x-4">
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">About</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">Products</Link>
                <Link href="#" className="text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">For Teams</Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                <Input type="search" placeholder="Search..." className="pl-8 pr-2 py-1 w-[200px] md:w-[400px]" />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
                <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">Log in</Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sign up</Button>
            </div>
            </div>
      </header>
    )
}
