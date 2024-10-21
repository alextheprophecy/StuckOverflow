import Urls_Side from "./urls_side"

export const R_Side = () => {
    return (
        <aside className="w-[300px] ml-6 hidden lg:block">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
            <h2 className="font-bold mb-2">The Overflow Blog</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Brain Drain: David vs Goliath</li>
              <li>How API security is evolving for the GenAI era</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <h2 className="font-bold mb-2">Featured on Meta</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Preventing unauthorized automated access to the network</li>
              <li className="mb-2">Upcoming initiatives on Stack Overflow and across the Stack Exchange network...</li>
              <li>Proposed designs to update the homepage for logged-in users</li>
            </ul>
          </div>
          <Urls_Side />
        </aside>
    )
}