import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

const Header = ({Children, pages}) => {
  return (
    <>
      <header className=" flex justify-evenly    items-start flex-col h-[100vh] border-2 w-[30%]">
        <div className="logo">Ashish Kumar</div>
        <div className="navigation flex flex-col gap-4 ">
          {pages.map((page) => (
            <Link to={`/${page.toLowerCase()}`} className="flex items-center gap-2 ">
              <FaHome /> {page}
            </Link>
          ))}
        </div>
      </header>
      {Children}
    </>
  );
};

export default Header;


//           <div className="flex items-center gap-2">
//             {" "}
//             <Link to="/about" className="flex items-center gap-2 ">
//               {" "}
//               <FaUser /> About
//             </Link>
//           </div>
//           <div className="flex items-center gap-2">
//             {" "}
//             <Link to="/projects" className="flex items-center gap-2 ">
//               {" "}
//               <FaProjectDiagram /> Projects
//             </Link>
//           </div>
//           <div className="flex items-center gap-2">
//             {" "}
//             <Link to="/contact" className="flex items-center gap-2 ">
//               {" "}
//               <FaEnvelope /> Contact
//             </Link>
//           </div>
//         </div>
//       </header> */}

//       <header className="fixed left-0 top-0 h-screen w-[280px] bg-white shadow-lg border-r flex flex-col justify-between py-10 px-6">
//         {/* Logo */}
//         <div>
//           <h1 className="text-3xl font-bold tracking-wide text-gray-800 mb-8">
//             Ashish <span className="text-blue-600">Kumar</span>
//           </h1>

//           {/* Navigation */}
//           <nav className="flex flex-col gap-6 text-lg font-medium text-gray-700">
//             <Link
//               to="/"
//               className="flex items-center gap-3 hover:text-blue-600 transition-all hover:translate-x-1"
//             >
//               <FaHome className="text-xl" /> Home
//             </Link>

//             <Link
//               to="/about"
//               className="flex items-center gap-3 hover:text-blue-600 transition-all hover:translate-x-1"
//             >
//               <FaUser className="text-xl" /> About
//             </Link>

//             <Link
//               to="/projects"
//               className="flex items-center gap-3 hover:text-blue-600 transition-all hover:translate-x-1"
//             >
//               <FaProjectDiagram className="text-xl" /> Projects
//             </Link>

//             <Link
//               to="/contact"
//               className="flex items-center gap-3 hover:text-blue-600 transition-all hover:translate-x-1"
//             >
//               <FaEnvelope className="text-xl" /> Contact
//             </Link>
//           </nav>
//         </div>

//         {/* Footer inside sidebar (optional) */}
//         <div className="text-gray-500 text-sm">© 2025 Ashish Kumar</div>
//       </header>
//     </>
//   );
// };

// export default Header;
