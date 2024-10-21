import Image from 'next/image'
import Link from 'next/link'
import { Search, ChevronDown, ChevronUp, Clock, ArrowUpRight, Bookmark } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Answers } from '@/components/ui/answers/answers'
import { R_Side } from '@/components/ui/side-contents/r_side'
import { Navbar } from '@/components/ui/navbar/navbar'
import Urls_Side from '@/components/ui/side-contents/urls_side'

export default function Questions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 flex">
        <aside className="w-[164px] mr-6 hidden md:block">
          <nav>
            <Link href="#" className="block py-1 text-gray-600 hover:text-black">Home</Link>
            <div className="mt-4">
              <h5 className="text-xs uppercase text-gray-500 font-bold mb-2">Public</h5>
              <Link href="#" className="block py-1 pl-4 text-gray-600 hover:text-black bg-gray-200 border-r-4 border-orange-400 font-bold">Questions</Link>
              <Link href="#" className="block py-1 pl-4 text-gray-600 hover:text-black">Tags</Link>
              <Link href="#" className="block py-1 pl-4 text-gray-600 hover:text-black">Users</Link>
              <Link href="#" className="block py-1 pl-4 text-gray-600 hover:text-black">Companies</Link>
            </div>
          </nav>
        </aside>
        
        <div className="flex-1">
          <h1 className="text-2xl mb-2">How do I make a flat list out of a list of lists?</h1>
          <div className="text-sm text-gray-600 mb-4">
            Asked 15 years, 4 months ago Modified 3 months ago Viewed 4.4m times
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4 flex items-center">
            <Image src="/placeholder.svg?height=40&width=40" height={40} width={40} alt="Microsoft Azure" className="mr-4" />
            <div className="flex-1">
              <h3 className="font-bold">Réussissez en développant de nouvelles compétences</h3>
              <p className="text-sm">Codez, testez et créez une application dexception avec 12 mois de services gratuits</p>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              En savoir plus
            </Button>
          </div>
          
          <div className="bg-white border rounded-md p-6 mb-4">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                  <ChevronUp className="h-8 w-8" />
                </Button>
                <span className="text-xl font-bold text-gray-600">5409</span>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                  <ChevronDown className="h-8 w-8" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400 mt-2">
                  <Bookmark className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                  <Clock className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1">
                <p className="mb-4">I have a list of lists like</p>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                  <code>{`[
  [1, 2, 3],
  [4, 5, 6],
  [7],
  [8, 9]
]`}</code>
                </pre>
                <p className="mb-4">How can I flatten it to get <code className="bg-gray-100 rounded px-1">[1, 2, 3, 4, 5, 6, 7, 8, 9]</code>?</p>
                <p className="mb-4 text-sm">
                  If your list of lists comes from a nested list comprehension, the problem can be solved more simply/directly by fixing the 
                  comprehension: please see <Link href="#" className="text-blue-600 hover:underline">How can I get a flat result from a list comprehension instead of a nested list?</Link>
                </p>
                <p className="mb-4 text-sm">
                  The most popular solutions here generally only flatten one level of the nested list. See <Link href="#" className="text-blue-600 hover:underline">Flatten an irregular (arbitrarily nested) list of lists</Link> for solutions that completely flatten a deeply nested structure (recursively, in general).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">python</Badge>
                  <Badge variant="secondary">list</Badge>
                  <Badge variant="secondary">multidimensional-array</Badge>
                  <Badge variant="secondary">flatten</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Share</span>
              <span>Improve this question</span>
              <span>Follow</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="@buhtz" />
                  <AvatarFallback>BZ</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-bold">buhtz</p>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-gray-700">11.9k</span>
                    <Badge variant="secondary" className="bg-yellow-400">●19</Badge>
                    <Badge variant="secondary" className="bg-gray-300">●87</Badge>
                    <Badge variant="secondary" className="bg-orange-400">●177</Badge>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>edited Apr 24, 2023 at 12:01</p>
              </div>
            </div>
          </div>
          
          {/* Answers section (unchanged) */}
          <Answers />
          {/* Your Answer section (unchanged) */}
        </div>
        
        <R_Side />
                    
        
      </main>
    </div>
  )
}