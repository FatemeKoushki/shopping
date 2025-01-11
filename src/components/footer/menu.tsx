"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MyModal from "../buttonModal";

export default function RelativeMenu() {
  const pathname = usePathname();

  const icons = [
    {
      name: "contactUs",
      route: "/contactUs",
      filledIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 24 24" width="1.8em" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg>
      ),


      outlinedIcon: (
        <svg xmlns="http://www.w3.org/2000/svg"width="1.8em"
          height="1.8em" viewBox="0 0 24 24"  fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      ),
    },
   
    {
      name: "cart",
      route: "/cart",
      filledIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.8rm" width="1.8em" viewBox="0 0 576 512" fillRule="evenodd">
        <path fillRule="evenodd"  fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
      ),
      outlinedIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="1.8rm" viewBox="0 -960 960 960" width="1.8em"fill="currentColor"
        fillRule="evenodd">
          <path  fill="currentColor"
            fillRule="evenodd" d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
      ),
    },
    {
      name: "home",
      route: "/",
      filledIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"
            clipRule="evenodd"
          />
        </svg>
      ),
      outlinedIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.447 15.397a.75.75 0 1 0-.894 1.205A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.893-1.205A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.853"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 1.25c-.725 0-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325c.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978c.29 1.05.702 1.885 1.445 2.524c.742.64 1.63.925 2.716 1.062c1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132c1.086-.137 1.974-.422 2.716-1.061c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.433.373-.994.593-1.925.71c-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12c-.93-.117-1.492-.337-1.925-.71c-.432-.372-.73-.891-.977-1.787c-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026c-.025-.732.058-1.21.258-1.626s.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
   
    
  ];

  return (
    <>
      <menu className="w-full text-center mx-auto fixed bottom-0  ">
        <div className=" text-center w-full  p-4   bg-white/95  rounded-lg  z-40  mx-auto">
          <div className="relative text-center mx-auto w-full flex justify-around items-center">

            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-black"
                whileTap={{ scale: 0.9 }}
                animate={{
                  opacity: pathname === icon.route ? 1 : 0.5,
                  scale: pathname === icon.route ? 1.2 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={icon.route}>
                  {pathname === icon.route
                    ? icon.filledIcon
                    : icon.outlinedIcon}
                </Link>
              </motion.div>

            ))}
            
            <MyModal />

          </div>
        </div>
      </menu>
    </>
  );
}