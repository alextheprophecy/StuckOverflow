import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown, MessageSquare, Clock } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export const Answers = () => {
    return (
        <>
            <div>
                <div className="bg-orange-50 border border-orange-200 rounded-md p-4 mb-8">
                    <div className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">57</span>
                <div>
                    <p className="mb-2">
                    Theres an in-depth discussion of this here: 
                    <Link href="#" className="text-blue-600 hover:underline">rightfootin.blogspot.com/2006/09/more-on-python-flatten.html</Link>
                    </p>
                    <p className="text-sm text-gray-600">
                    discussing several methods of flattening arbitrarily nested lists of lists. An interesting read! – RichieHindle
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                    Jun 4, 2009 at 20:41
                    </p>
                </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">34 Answers</h2>
                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sorted by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="highest">Highest score (default)</SelectItem>
                    <SelectItem value="trending">Trending (recent votes)</SelectItem>
                    <SelectItem value="date">Date modified (newest first)</SelectItem>
                    <SelectItem value="date-old">Date created (oldest first)</SelectItem>
                </SelectContent>
                </Select>
            </div>

            <div className="flex space-x-2 mb-4">
                <Button className="bg-orange-500 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">Next</Button>
            </div>

            {/* Answer */}
            <div className="bg-white border rounded-md p-6 mb-4">
                <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                    <ChevronUp className="h-8 w-8" />
                    </Button>
                    <span className="text-xl font-bold text-gray-600">7392</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                    <ChevronDown className="h-8 w-8" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400 mt-2">
                    <MessageSquare className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                    <Clock className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex-1">
                    <p className="mb-4">A list of lists named <code className="bg-gray-100 rounded px-1">xss</code> can be flattened using a nested list comprehension:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                    <code>{`flat_list = [
        x
        for xs in xss
        for x in xs
    ]`}</code>
                    </pre>
                    <p className="mb-4">The above is equivalent to:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                    <code>{`flat_list = []
    for xs in xss:
        for x in xs:
            flat_list.append(x)`}</code>
                    </pre>
                    <p className="mb-4">Here is the corresponding function:</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                    <code>{`def flatten(xss):
        return [x for xs in xss for x in xs]`}</code>
                    </pre>
                    <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Share</span>
                        <span>Improve this answer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="@Emma" />
                        <AvatarFallback>EM</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                        <p className="font-bold">Emma</p>
                        <div className="flex items-center space-x-1">
                            <span className="font-bold text-gray-700">54.9k</span>
                            <Badge variant="secondary" className="bg-yellow-400">●4</Badge>
                            <Badge variant="secondary" className="bg-gray-300">●20</Badge>
                            <Badge variant="secondary" className="bg-orange-400">●10</Badge>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Your Answer Section */}
            <h2 className="text-lg font-bold mb-4">Your Answer</h2>
            <div className="bg-white border rounded-md p-6 mb-4">
                <textarea className="w-full h-32 p-2 border rounded-md" placeholder="Type your answer here..."></textarea>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">Post Your Answer</Button>
            </div>
            </div>
            <aside className="w-[300px] ml-6 hidden lg:block">
            {/* ... existing right sidebar content ... */}
            </aside>
        </>
    )
}
