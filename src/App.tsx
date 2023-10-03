import './App.css'
import Navbar from './components/Navbar'
import { BlogDTO } from './type/dto'
import Blog from './components/Blog'

const blogs: BlogDTO[] = [
  {
    header: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    date: 'Nov 26th, 2022',
    readingTime: '3 min',
    url: 'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    header: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    date: 'Apr 26th, 2022',
    readingTime: '9 min',
    url: 'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
  {
    header: 'Solidity Made Easy with Hardhat',
    description: 'A walkthrough guide on how to use Hardhat to develop a smart contract with ease!',
    tags: ['hardhat', 'tutorial'],
    author: 'Aikdanai',
    date: 'Aug 5th, 2022',
    readingTime: '6 min',
    url: 'https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb',
  },
  {
    header: 'Solving DApps Problem with Merkle drop',
    description:
      'When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?',
    tags: ['smart contract', 'web3'],
    author: 'Nutchanon',
    date: 'Sep 27th, 2022',
    readingTime: '8 min',
    url: 'https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <div className="boby-blog">
        <div className='blog-all'>
        <div className='blog-in'>
        <div className="blog-view">
        <div className="svg-blog">
          <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="16" height="17" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="4" width="10" height="2" fill="currentColor" stroke="none" />
            <rect x="4" y="8" width="8" height="2" fill="currentColor" stroke="none" />
            <rect x="4" y="12" width="5" height="2" fill="currentColor" stroke="none" />
          </svg>
          <p>Blog</p>
        </div>
        <a href="https://cleverse.com/web3">View All</a>
      </div>
      <div className='blog-4x'>
        {blogs.map((blog) => {
          return <Blog key={blog.header} blog={blog} />
        })}
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
