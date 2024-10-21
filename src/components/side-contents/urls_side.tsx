import Link from 'next/link'
import { Badge } from "@/components/ui/badge"

interface RelatedQuestion {
  votes: number
  title: string
  link: string
}

interface HotNetworkQuestion {
  network: string
  title: string
  link: string
}

const relatedQuestions: RelatedQuestion[] = [
  { votes: 2491, title: "Finding duplicate values in a SQL table", link: "#" },
  { votes: 12996, title: 'What does the "yield" keyword do in Python?', link: "#" },
  { votes: 4435, title: "How to find the index for a given item in a list?", link: "#" },
  { votes: 5409, title: "How do I make a flat list out of a list of lists?", link: "#" },
  { votes: 5543, title: 'How to access the index value in a "for" loop?', link: "#" },
  { votes: 7234, title: "How do I check whether a file exists without exceptions?", link: "#" },
  { votes: 7029, title: "How do I merge two dictionaries in a single expression in Python?", link: "#" },
  { votes: 3465, title: "How do I list all files of a directory?", link: "#" },
  { votes: 3222, title: "How do I check if a list is empty?", link: "#" },
  { votes: 6209, title: "How do I execute a program or call a system command?", link: "#" },
]

const hotNetworkQuestions: HotNetworkQuestion[] = [
  { network: "unix", title: 'In /etc/fstab, what\'s the difference between "/dev/disk/by-uuid/" and "UUID="?', link: "#" },
  { network: "physics", title: "How to tell if a charge is accelerating due to gravity or electric field?", link: "#" },
  { network: "math", title: "How can I find intersection of four sphere without solving the system of equations?", link: "#" },
  { network: "rpg", title: "Taking damage while dying in 3.5", link: "#" },
  { network: "travel", title: "Japanese businesses checking for landing sticker", link: "#" },
  { network: "academia", title: "Should research statements be renamed to match each university's specific terminology?", link: "#" },
  { network: "electronics", title: "simple relay/zener based switching power supply", link: "#" },
  { network: "puzzling", title: "Perfect cubes duos in a line", link: "#" },
]

export default function Urls_Side() {
  return (
    <div className="w-full max-w-[300px] mt-10">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Related</h2>
        <ul className="space-y-2">
          {relatedQuestions.map((question, index) => (
            <li key={index} className="flex items-start">
              <Badge variant="secondary" className="mr-2 bg-green-700 text-white font-medium px-2 py-1 text-xs rounded-sm">
                {question.votes}
              </Badge>
              <Link href={question.link} className="text-sm text-blue-600 hover:text-blue-800">
                {question.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Hot Network Questions</h2>
        <ul className="space-y-2">
          {hotNetworkQuestions.map((question, index) => (
            <li key={index} className="flex items-start">
              <span className={`w-4 h-4 mr-2 rounded ${getNetworkColor(question.network)}`}></span>
              <Link href={question.link} className="text-sm text-blue-600 hover:text-blue-800">
                {question.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function getNetworkColor(network: string): string {
  const colors: { [key: string]: string } = {
    unix: "bg-orange-500",
    physics: "bg-blue-500",
    math: "bg-green-500",
    rpg: "bg-purple-500",
    travel: "bg-yellow-500",
    academia: "bg-indigo-500",
    electronics: "bg-red-500",
    puzzling: "bg-pink-500",
  }
  return colors[network] || "bg-gray-500"
}
