import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Perspective from '../src/assets/images/BlackSquare.svg';
import Bookmarks from '../src/components/Bookmarks';
function App() {
  return (
    <Router>
      <div className="fade-in">
        <div className="wrapper relative flex items-center justify-center w-full">
          <main className="relative flex w-full max-w-[640px] flex-col justify-start gap-8 px-8 py-8">
            <nav className="flex justify-center">
              <ul className="flex gap-5 font-mono font-thin">
                <li>
                  <Link to="/whoami">/whoami</Link>
                </li>
                <li>
                  <Link to="/bookmarks">/bookmarks</Link>
                </li>
                <li>
                  <Link to="/contact">/contact</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route
                path="/contact"
                element={<div>Contact Page Content</div>}
              />
            </Routes>

            <div className="content relative flex flex-col gap-8">
              <div className="flex w-full flex-col gap-2">
                <img
                  className="custom-image flex size-14 justify-start"
                  src={Perspective}
                  alt="Dark Black square svg"
                  style={{
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                  }}
                />
                <div className="flex flex-col gap-4">
                  <h1 className="home font-bold flex items-center text-base">
                    Yash Singh/
                    {/* <span className="hindi-name font-normal ">(यश सिंह)</span> */}
                    <span className="online-indicator"></span>
                  </h1>
                  <div className="font-light">
                    Minimalist Creator / (ˈmɪnɪməlɪst krɪˈeɪtər) / noun
                  </div>
                  <div className="font-light">
                    An individual who employs simplicity and essential elements
                    to produce clear, impactful works of art.
                  </div>
                  <div className="font-light">
                    A creator who embraces the philosophy of 'less is more,'
                    focusing on purity and clarity in their creative process.
                  </div>
                  <div className="font-light">
                    A multidisciplinary artist who transcends boundaries,
                    creating without limitations.
                  </div>
                  <div className="flex flex-wrap gap-4" id="socials">
                    <a href="mailto: yvsh7.btw@gmail.com">Email</a>
                    <a href="https://x.com/interludeyash">Twitter</a>
                    <a href="https://github.com/nstlgy">Github</a>
                    <a href="">Works</a>
                    <a href="">CV</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects flex w-full flex-col gap-2">
              <div className="flex flex-col gap-4">
                <h1>Projects</h1>
              </div>
              <div className="blur-container">
                <a
                  href=""
                  className="blur-item -mx-4 flex items-center gap-2 whitespace-nowrap text-nowrap rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50 font-extralight"
                >
                  Birthday Wishes
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="bg-border h-[1px] w-full shrink"
                  >
                    <hr />
                  </div>
                  January 2025
                </a>
                <a
                  href=""
                  className="blur-item -mx-4 flex items-center gap-2 whitespace-nowrap text-nowrap rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50 font-extralight"
                >
                  Another Project
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="bg-border h-[1px] w-full shrink"
                  >
                    <hr />
                  </div>
                  February 2025
                </a>
              </div>
            </div>

            <div className="playground flex w-full flex-col gap-2">
              <div className="flex flex-col gap-4">
                <h1>Playground</h1>
              </div>
              <div className="blur-container">
                <a
                  href=""
                  className="blur-item -mx-4 flex items-center gap-2 whitespace-nowrap text-nowrap rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50 font-extralight"
                >
                  Playground Item 1
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="bg-border h-[1px] w-full shrink"
                  >
                    <hr />
                  </div>
                  March 2025
                </a>
                <a
                  href=""
                  className="blur-item -mx-4 flex items-center gap-2 whitespace-nowrap text-nowrap rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50 font-extralight"
                >
                  Playground Item 2
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="bg-border h-[1px] w-full shrink"
                  >
                    <hr />
                  </div>
                  April 2025
                </a>
                <a
                  href=""
                  className="blur-item -mx-4 flex items-center gap-2 whitespace-nowrap text-nowrap rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50 font-extralight"
                >
                  Playground Item 3
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="bg-border h-[1px] w-full shrink"
                  >
                    <hr />
                  </div>
                  May 2025
                </a>
              </div>
            </div>
            <footer className="justify-center flex text-xs">
              <p className="font-extralight">Designed by &nbsp;</p>
              <p className="font-semibold">Yash Singh &nbsp;</p>
              <p className="font-extralight">with a bit of ☕️</p>
            </footer>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
